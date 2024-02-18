import { NextApiRequest, NextApiResponse } from "next";
import { Redis } from '@upstash/redis'

const redis = new Redis({
   url: process.env.UPSTASH_REDIS_REST_URL,
   token: process.env.UPSTASH_REDIS_REST_TOKEN,
 })

export default async function retrieve(
   _request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      const keys = await redis.scan(0);
      const entries = [];
      for (const key of keys.slice(0)) {
         const entry = await redis.get(String(key));
         entries.push(entry);
      }
      response.status(200).json(entries);
   } catch (error) {
      console.error("Failed to list entries:", error);
      response.status(500).json(`Failed to list entries, ${error}`);
   }
};
