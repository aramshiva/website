import { kv } from "@vercel/kv";
import { parse } from "date-fns";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { namespace, date } = req.body;
        const key = `analytics::${namespace}::${date}`;

        const result = await kv.get(key);

        // Assuming result is the stored JSON string of events
        const events = result ? JSON.parse(result) : {};

        res.status(200).json({
            date,
            events,
        });
    } else {
        // Handle any other HTTP method
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
