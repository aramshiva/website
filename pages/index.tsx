import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
<<<<<<< Updated upstream
      <div className="selection:bg-yellow-500 h-screen selection:text-white">
        <Layout>
          <Container>
            <div className="justify-left pl-5 text-3xl font-semibold pt-9">
              <div className="flex space-x-5 pt-9 text-xl font-normal text-center justify-items-center place-items-center hover:font-mono">
                <Link className="hover:font-bold" href="/">
                  home
                </Link>
                <Link
                  className="hover:font-bold"
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%65%40%61%72%61%6D%2E%73%68"
                >
                  email
                </Link>
                <Link
                  className="hover:font-bold"
                  href="https://github.com/aramshiva"
                  target="_blank"
                >
                  github
                </Link>
                <Link
                  className="hover:font-bold"
                  href="/credits"
                  target="_blank"
                >
                  credits
                </Link>
              </div>
              <div className="h-9" />
              <div className="blog-title-emoji pr-2 text-6xl sm:pt-9 md:pt-9 lg:pt-9">
                <Twemoji text="👋" />
              </div>
              <br />
              <br />
              <span className="text-5xl">
                <span className="font-bold text-gradient-to-r from-blue-500 to-blue-500">Aram Shiva</span> is a{" "}
                <Typewriter
                  words={["", "Developer", "Designer", "Creator", "Hacker"]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
                {" "}based in Seattle.<br/>
                Currently, He is working on<br/> <Link className="underline" href="https://hackthesound.net" target="_blank">Hack The Sound</Link>. A event for teens<br/> in washington to find Makers like<br/>them.
=======
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
>>>>>>> Stashed changes
              </span>
              {"  "}
              <p></p>
            </div>
            <div className="text-gray justify-left pl-5 flex-wrap text-xl">
              This website is currently<span className="text-yellow font-bold text-2xl">{" "}WIP{" "}</span>
            </div>
          </Container>
        </Layout>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z" />
        </svg>
      </div>
      {/* <div className="bg-rainbow h-6 sticky bottom-0" /> */}
    </>
  );
}
