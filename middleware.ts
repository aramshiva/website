import { NextRequest, NextResponse } from "next/server";
// Assuming direct database access is possible, e.g., via an SDK or library
import { kv } from "@vercel/kv"; // Adjust according to your actual database client
import { getDate } from "./utils"; // Ensure this utility is compatible with middleware environment

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/") {
        const key = `analytics::pageview::${getDate()}`;
        const event = JSON.stringify({
            page: "/",
            country: req.geo?.country || 'Unknown',
        });

        try {
            // Directly save to the database without going through the API route
            await kv.set(key, event); // Example: set TTL for 7 days
        } catch (err) {
            // fail silently to not affect request
            console.error("Error tracking analytics:", err);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
};
