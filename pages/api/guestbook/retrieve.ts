import Redis from "ioredis";
import { NextApiRequest, NextApiResponse } from "next";

const redis = new Redis({
   host: "your-upstash-redis-host",
   port: 6379,
   password: "your-upstash-redis-password",
});

export default async function retrieve(
   request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      const entries = [];

      // Retrieve all keys from the database
      const keys = await getAllKeys();

      for (const key of keys) {
         const entry = await redis.get(key);
         entries.push(entry);
      }

      response.status(200).json(entries);
   } catch (error) {
      console.error("Failed to list entries:", error);
      response.status(500).json(`Failed to list entries, ${error}`);
   }
}

async function getAllKeys() {
   const keys = [];
   let cursor = "0";

   do {
      const [nextCursor, fetchedKeys] = await redis.scan(cursor);
      keys.push(...fetchedKeys);
      cursor = nextCursor;
   } while (cursor !== "0");

   return keys;
}