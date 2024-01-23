import { AppProps } from "next/app";
import "../styles/index.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SpeedInsights />
      <Component {...pageProps} />
    </div>
  );
}
