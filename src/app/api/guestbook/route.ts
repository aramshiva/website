import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function POST(request: Request) {
  const body = await request.json();
  await redis.lpush("aramdotsh", JSON.stringify(body));
  return NextResponse.json({ success: true });
}

export async function GET() {
  const data = await redis.lrange("aramdotsh", 0, -1);
  const messages = [];

  for (const entry of data) {
    messages.push(entry);
  }
  return NextResponse.json(messages);
}
