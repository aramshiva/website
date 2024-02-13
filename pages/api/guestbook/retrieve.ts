import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function retrieve(
   request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      const keys = await kv.keys("guestbookEntry:*");
      const entries = [];

      for (const key of keys) {
         const entry = await kv.get(key);
         entries.push(entry);
      }

      response.status(200).json(entries);
   } catch (error) {
      console.error("Failed to list entries:", error);
      response.status(500).json({ error: "Failed to list entries" });
   }
}
