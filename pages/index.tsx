import Container from "../components/container";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import Link from "next/link";

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
            <div className="fixed bottom-0 text-black w-screen h-30 pb-20 align-middle flex flex-col">
              <div className="pb-3">
                {data?.isPlaying && <p>Currently Listening to:</p>}
              </div>
              <Link
                target="_blank"
                rel="noopener noreferer"
                href={
                  data?.isPlaying
                    ? data.songUrl
                    : "https://open.spotify.com/user/w0irmxmq6rkqvfpu5sznvym1u?si=7d100c9a0f7744a8"
                }
                className={
                  data?.isPlaying
                    && "relative flex items-center p-6 space-x-4 transition-shadow rounded-md hover:shadow-md w-72 border"
                }
              >
                <div className="w-16">
                  {data?.isPlaying && (
                    <img
                      src={data?.albumImageUrl}
                      alt={data?.album}
                      className="rounded-md"
                    />
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-bold component">
                    {data?.isPlaying && data.title}
                  </p>
                  <p className="text-xs font-dark">
                    {data?.isPlaying && data.artist}
                  </p>
                </div>
                <div className="absolute bottom-1.5 right-1.5">
                  <SiSpotify size={20} color={"#1ED760"} />
                </div>
                <div className="absolute bottom-1.5 right-1.5">
                  {data?.isPlaying && (
                    <SiSpotify size={20} color={"#1ED760"} />
                  )}
                </div>
              </Link>
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
