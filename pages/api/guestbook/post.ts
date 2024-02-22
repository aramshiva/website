import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function post(
   request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      if (!request.body) {
         return response
            .status(400)
            .json({ message: "Error: Request body is empty." });
      }

      await kv.set(`${request.body.email}`, JSON.stringify(request.body));
      response.status(200).json({ message: "Entry added" });
   } catch (error) {
      console.error("Failed to add entry:", error);
      response.status(500).json({ error: "Failed to add entry" });
   }
}
