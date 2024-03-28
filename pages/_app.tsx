import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/fonts.css";
import { Toaster } from "../components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <SessionProvider>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
         </SessionProvider>
         <Toaster />
      </>
   );
}
