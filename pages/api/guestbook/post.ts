import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function post(
   request: NextApiRequest,
   response: NextApiResponse,
) {
   try {
      // Check for the request's origin
      const origin = request.headers.origin;
      // Specify your site's domain
      const allowedOrigin =
         process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000";

      // Reject requests from origins other than your site
      if (!origin || origin !== allowedOrigin) {
         return response
            .status(403)
            .json({
               message:
                  "Access denied. Requests are only allowed from the same site.",
            });
      }

      if (!request.body) {
         return response
            .status(400)
            .json({ message: "Error: Request body is empty." });
      }

      await kv.set(`${request.body.name}`, JSON.stringify(request.body));
      response.status(200).json({ message: "Entry added" });
   } catch (error) {
      console.error("Failed to add entry:", error);
      response.status(500).json({ error: "Failed to add entry" });
   }
}
