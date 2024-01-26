import Container from "../components/container";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import SpotifyWidget from "../components/spotifynowplaying";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="h-20" />
            <div>
              <div className="pb-8 text-7xl font-semibold">
                <span>
                  I am a{" "}
                  <span>
                    <Balancer>
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
                    </Balancer>
                  </span>{" "}
                  in Seattle.
                </span>
                {"  "}
                <p></p>
              </div>
              <div className="text-xl">
                <Balancer>
                  <span className="wave">👋</span> I create remarkable
                  experiences for the web. <br />I am currently a mentee at{" "}
                  <Link href="https://hackclub.com/hcb" className="underline">
                    HCB
                  </Link>
                  , a tool for students to run their own non-profits.
                  <br />
                  <br />
                </Balancer>
              </div>
              <div>
                <span className="my-4 text-right text-xs text-gray-500">
                  v. {process.env.APP_VERSION} |{" "}
                  <a
                    className="underline"
                    href={`https://github.com/aramshiva/website/tree/${process.env.COMMIT_HASH}`}
                  >
                    {process.env.COMMIT_HASH}
                  </a>
                </span>
              </div>
            </div>
            <SpotifyWidget />
          </Container>
        </Layout>
      </div>
    </>
  );
}
