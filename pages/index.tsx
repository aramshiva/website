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
          <Container>
            <div className="h-20" />
            <div className="text-7xl font-semibold">
              <span>
                I am a{" "}
                <span>
                  <Typewriter
                    words={[
                      "dreamer",
                      "developer",
                      "designer",
                      "builder",
                      "maker",
                      "photographer",
                      "student",
                    ]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={75}
                    deleteSpeed={75}
                    delaySpeed={2500}
                    loop={true}
                  />
                </span>{" "}
                in Seattle.
              </span>
              {"  "}
              <p></p>
            </div>
            <div className="text-2xl">
              <div>
                <span className="wave">👋</span> I create remarkable experiences
                for the web. <br />I am currently a mentee at{" "}
                <Link href="https://hackclub.com/hcb" className="underline">
                  HCB
                </Link>
                , a tool for students to run their own non-profits.
                <br />
                <br />
              </div>
            </div>
            <SpotifyWidget />
          </Container>
        </Layout>
      </div>
    </>
  );
}
