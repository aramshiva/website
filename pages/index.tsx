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
      <div className="bg-black">
        <Layout>
          <Container>
            <div className="h-20" />
            <div className="justify-left pl-5 text-7xl font-semibold text-white">
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
            <div className="text-white justify-left pl-5 flex-wrap text-xl">
              This website is currently
              <span className="text-yellow font-bold text-2xl"> WIP </span>.
              Come back later.
            </div>
          </Container>
          <div className="fixed bottom-0 text-white w-screen h-30 p-20 text-center align-middle flex flex-col items-center justify-center">
            <div className="pb-3">
              {data?.isPlaying ? <p>Currently Listening to:</p> : <div />}
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
                  ? "relative flex items-center p-5 space-x-4 transition-shadow rounded-md hover:shadow-md w-72 border"
                  : ""
              }
              // className='relative flex items-center p-5 space-x-4 transition-shadow rounded-md hover:shadow-md w-72'
            >
              <div className="w-16">
                {data?.isPlaying ? (
                  <img
                    // className="w-16 shadow-sm"
                    src={data?.albumImageUrl}
                    alt={data?.album}
                  />
                ) : (
                  <div />
                  // <SiSpotify size={64} color={'#1ED760'} />
                )}
              </div>

              <div className="flex-1">
                <p className="font-bold component">
                  {data?.isPlaying ? data.title : ""}
                </p>
                <p className="text-xs font-dark">
                  {data?.isPlaying ? data.artist : ""}
                </p>
              </div>
              {/* <div className='absolute bottom-1.5 right-1.5'>
                            <SiSpotify size={20} color={'#1ED760'} />
                        </div> */}
              <div className="absolute bottom-1.5 right-1.5">
                {data?.isPlaying ? (
                  <SiSpotify size={20} color={"#1ED760"} />
                ) : (
                  <div />
                )}
              </div>
            </Link>
          </div>
        </Layout>
      </div>
    </>
  );
}
