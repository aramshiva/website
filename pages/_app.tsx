import { AppProps } from "next/app";
import React from "react"; // Add missing import statement for React
import "../styles/index.css";
import { Toaster } from "../components/ui/sonner";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <React.Fragment>
         <Component {...pageProps} />
         <Toaster />
      </React.Fragment>
   );
}
