import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";
import { getDate } from "../../utils/index";
import { parse } from "date-fns";

type AnalyticsArgs = {
    retention?: number;
};

type TrackOptions = {
    persist?: boolean;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { namespace, event, date, nDays } = req.query;

    if (req.method === "POST") {
        try {
            const analytics = new Analytics();
            await analytics.track(namespace as string, {}, { persist: true });
            res.status(200).json({ message: "Event tracked successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to track event" });
        }
    } else if (req.method === "GET") {
        try {
            const analytics = new Analytics();
            if (date) {
                const data = await analytics.retrieve(
                    namespace as string,
                    date as string,
                );
                res.status(200).json(data);
            } else if (nDays) {
                const data = await analytics.retrieveDays(
                    namespace as string,
                    parseInt(nDays as string),
                );
                res.status(200).json(data);
            } else {
                res.status(400).json({ error: "Invalid request" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve data" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}

class Analytics {
    private retention: number = 60 * 60 * 24 * 7;

    constructor(opts?: AnalyticsArgs) {
        if (opts?.retention) this.retention = opts.retention;
    }

    async track(namespace: string, event: object = {}, opts?: TrackOptions) {
        let key = `analytics::${namespace}`;

        if (!opts?.persist) {
            key += `::${getDate()}`;
        }

        // db call to persist this event
        await (kv as any).put(key, JSON.stringify(event), {
            expirationTtl: this.retention,
        });
    }

    async retrieveDays(namespace: string, nDays: number) {
        type AnalyticsPromise = ReturnType<typeof this.retrieve>;
        const promises: AnalyticsPromise[] = [];

        for (let i = 0; i < nDays; i++) {
            const formattedDate = getDate(i);
            const promise = this.retrieve(namespace, formattedDate);
            promises.push(promise);
        }

        const fetched = await Promise.all(promises);

        const data = fetched.sort((a, b) => {
            if (
                parse(a.date, "dd/MM/yyyy", new Date()) >
                parse(b.date, "dd/MM/yyyy", new Date())
            ) {
                return 1;
            } else {
                return -1;
            }
        });

        return data;
    }

    async retrieve(namespace: string, date: string) {
        const res = await kv.get<Record<string, string>>(
            `analytics::${namespace}::${date}`,
        );

        return {
            date,
            events: Object.entries(res ?? {}).map(([key, value]) => ({
                [key]: Number(value),
            })),
        };
    }
}
