import Container from "../components/container";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import SpotifyWidget from "../components/spotifynowplaying";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="h-20" />
            <div className="text-5xl font-semibold">
              <span>
                I am a{" "}
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
            <div className="textl-xl">
              <div>
                <span className="wave">👋</span> I create remarkable experiences
                for the web.
              </div>

            </div>
            <SpotifyWidget />
          </Container>
        </Layout>
      </div>
    </>
  );
}
