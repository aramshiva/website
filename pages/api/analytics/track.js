import { kv } from "@vercel/kv"; 
import { getDate } from "../../../utils/index";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { namespace, event, persist, retention } = req.body;
    let key = `analytics::${namespace}`;

    if (!persist) {
      key += `::${getDate()}`;
    }

    const retentionPeriod = retention || 60 * 60 * 24 * 7; // Default retention period of 7 days

    // db call to persist this event
    await kv.put(key, JSON.stringify(event), { expirationTtl: retentionPeriod });

    res.status(200).json({ message: "Event tracked successfully" });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
