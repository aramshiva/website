import { AppProps } from "next/app";
import React from "react"; // Add missing import statement for React
import "../styles/index.css";
import { Toaster } from "../components/ui/sonner";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <React.Fragment>
         <SessionProvider>
            <Component {...pageProps} />
         </SessionProvider>
         <Toaster />
      </React.Fragment>
   );
}
