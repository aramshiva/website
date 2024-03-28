import { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/meta";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <Meta>
               <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
               />
               <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/favicon/apple-touch-icon.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon/favicon-16x16.png"
               />
               <link rel="manifest" href="/favicon/site.webmanifest" />
               <link
                  rel="mask-icon"
                  href="/favicon/safari-pinned-tab.svg"
                  color="#5bbad5"
               />
               <meta name="msapplication-TileColor" content="#da532c" />
               <meta name="theme-color" content="#333333" />
            </Meta>
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
