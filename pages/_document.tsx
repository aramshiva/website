import { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
}
