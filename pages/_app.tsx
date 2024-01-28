import { AppProps } from "next/app";
import "../styles/index.css";
import SpotifyWidget from "../components/spotifynowplaying";
import Navbar from "../components/nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="px-20">
        <Navbar />
      </div>
      <div className="container mx-auto px-20">
        <Component {...pageProps} />
        <SpotifyWidget />
      </div>
    </>
  );
}
