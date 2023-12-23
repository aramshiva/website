import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
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
              This website is currently<span className="text-yellow font-bold text-2xl">{" "}WIP{" "}</span>. Come back later.
            </div>
            <div className="grid text-white">
              <div className="h-[30vh] w-[30vh] bg-gray-500 rounded-xl"><span>test</span></div>
            </div>
          </Container>
        </Layout>
      </div>
      {/* <div className="bg-rainbow h-6 sticky bottom-0" /> */}
    </>
  );
}
