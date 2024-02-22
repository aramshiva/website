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
            </Meta>
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
