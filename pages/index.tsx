import Container from "../components/container";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import SpotifyWidget from "../components/spotifynowplaying";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <div className="bg-black h-screen w-screen text-white">
            <p className="origin-center place-items-center justify-center text-center items-center align-center content-center object-center">Coming Soon</p>
          </div>
          <SpotifyWidget />
        </Layout>
      </div>
    </>
  );
}
