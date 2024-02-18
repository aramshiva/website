import { NextApiRequest, NextApiResponse } from "next";
import { Redis } from '@upstash/redis'

const redis = new Redis({
   url: process.env.UPSTASH_REDIS_REST_URL,
   token: process.env.UPSTASH_REDIS_REST_TOKEN,
 })

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

      await redis.set(`${request.body.email}`, JSON.stringify(request.body));
      response.status(200).json({ message: "Entry added" });
   } catch (error) {
      console.error("Failed to add entry:", error);
      response.status(500).json({ error: "Failed to add entry" });
   }
}
