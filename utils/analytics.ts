import { kv } from "@vercel/kv";
import { getDate } from "./index";
import { parse } from "date-fns";

type AnalyticsArgs = {
    retention?: number;
};

type TrackOptions = {
    persist?: boolean;
};

export class Analytics {
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
        type AnalyticsPromise = ReturnType<typeof analytics.retrieve>;
        const promises: AnalyticsPromise[] = [];

        for (let i = 0; i < nDays; i++) {
            const formattedDate = getDate(i);
            const promise = analytics.retrieve(namespace, formattedDate);
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

export const analytics = new Analytics();
