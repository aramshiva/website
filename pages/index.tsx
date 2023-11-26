import Link from "next/link";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
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
              </span>
              <br />
            </div>
          </Container>
        </Layout>
      </div>
      <div className="rainbow h-6 sticky bottom-0" />
    </>
  );
}
