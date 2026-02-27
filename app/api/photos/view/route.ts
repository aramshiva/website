import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redis = new Redis({
    url: process.env.PHOTOS_REDIS_REST_URL,
    token: process.env.PHOTOS_REDIS_REST_TOKEN,
  })
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  await redis.incr(`photo:${id}`);
  const views = await redis.get(`photo:${id}`);
  return NextResponse.json({ id, views });
}
