import { AppProps } from "next/app";
import React from "react"; // Add missing import statement for React
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <React.Fragment>
         <Component {...pageProps} />
      </React.Fragment>
   );
}
