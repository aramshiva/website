const { Redis } = require("@upstash/redis");

const redisKey = process.env.NEXT_PUBLIC_REDIS_KEY || "";
console.log("redisKey", redisKey);

export const redis = new Redis({
   url: "https://usw1-many-monster-33431.upstash.io",
   token: redisKey,
});
