import Container from "../components/container";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import SpotifyWidget from "../components/spotifynowplaying";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="h-20" />
            <div className="text-7xl font-semibold">
              <span>
                Aram is a{" "}
                <span>
                  <Typewriter
                    words={[
                      "developer",
                      "designer",
                      "creator",
                      "builder",
                      "maker",
                      "photographer",
                      "student",
                    ]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={3000}
                    loop={true}
                  />
                </span>{" "}
                in Seattle.
              </span>
              {"  "}
              <p></p>
            </div>
            <div className="text-lg font-normal">
              <span className="text-xl decoration-dotted underline decoration-red-500 hover:text-9xl">
                Aram
              </span>{" "}
              is a student building remarkable things
            </div>
            <SpotifyWidget />
          </Container>
        </Layout>
      </div>
    </>
  );
}
