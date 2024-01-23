import { AppProps } from "next/app";
import "../styles/index.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from 'react-wrap-balancer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SpeedInsights />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
