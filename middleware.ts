import arcjet, { createMiddleware, detectBot } from "@arcjet/next";
export const config = {
   // matcher tells Next.js which routes to run the middleware on.
   // This runs the middleware on all routes except for static assets.
   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
const aj = arcjet({
   // Set your Arcjet key as an environment variable rather than hard coding.
   // See: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
   key: process.env.ARCJET_KEY!,
   // No rules are required for Arcjet Shield - it runs on every request.
   // You can add other rules, such as rate limiting, here.
   rules: [
      detectBot({
         mode: "DRY_RUN", // "LIVE" will block requests. Use "DRY_RUN" to log only
         // Change back to "LIVE" later on
         block: ["AUTOMATED"], // blocks all automated clients
      }),
   ],
});
export default createMiddleware(aj);
