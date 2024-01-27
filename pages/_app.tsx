import { AppProps } from "next/app";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div style={{ transform: 'rotate(180deg)' }}>
    <div className="container mx-auto px-20">
      <Component {...pageProps} />
    </div>
  );
}
