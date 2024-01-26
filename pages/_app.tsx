import { AppProps } from "next/app";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div style={{ transform: 'rotate(180deg)' }}>
    <div className="min-h-screen container mx-auto px-5">
      <Component {...pageProps} />
    </div>
  );
}
