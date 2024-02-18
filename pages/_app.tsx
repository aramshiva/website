import { AppProps } from "next/app";
import "../styles/index.css";
import { Toaster } from "../components/ui/sonner";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <SessionProvider>
            <Component {...pageProps} />
         </SessionProvider>
         <Toaster />
      </>
   );
}
