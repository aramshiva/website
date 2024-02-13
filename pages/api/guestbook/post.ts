import { kv } from "@vercel/kv";

import { NextApiRequest, NextApiResponse } from "next";

export default async function post(
   request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      await kv.set(
         `guestbookEntry:${request.body.name}`,
         JSON.stringify(request.body),
      );
      response.status(200).json({ message: "Entry added" });
   } catch (error) {
      console.error("Failed to add entry:", error);
      response.status(500).json({ error: "Failed to add entry" });
   }
}
