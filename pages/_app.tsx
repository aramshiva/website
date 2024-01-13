import { AppProps } from "next/app";
import "../styles/index.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  // return <div className="bg-white dark:bg-gray-800 text-slate-900 dark:text-white"><Component {...pageProps} /></div>
  return (
    <div>
      <SpeedInsights />
      <Component {...pageProps} />
    </div>
  );
}
