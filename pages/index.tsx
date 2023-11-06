import Link from "next/link";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <div className="blur-3xl invisible dark:visible" id="blob"/>
      <div className="dark:bg-slate-900 selection:bg-yellow-500">
        <Layout>
          <Container>
            <div className="bg-white dark:bg-slate-900 justify-left pl-5 text-black dark:text-slate-200 text-3xl font-semibold pt-9 h-screen">
              <div className="lg:h-60 md:h-40 sm:h-20"/>
              <div className="blog-title-emoji pr-2 text-5xl">
                <Twemoji text="👋" />
              </div><br/>
              <span> Oh, Hello There! I'm Aram. A Young</span>
              <br />
              <span>
                person who loves to{" "}
                <Typewriter
                  words={[
                    "Develop",
                    "Inspire",
                    "Create",
                    "Amaze",
                    "Develop",
                  ]}
                ></Typewriter>
                {" "}<br/>
                I'm
                currently working on <Link href="https://hackthesound.net" className="underline">Hack The Sound</Link><br/>a teenage hackathon in PNW.<br/>
              </span>
              <span className="font-mono text-gray-500 dark:text-gray-400 text-lg font-normal">© Copyright Aram Shiva 2023</span><br/>
              <span className="font-mono text-gray-500 dark:text-gray-400 text-lg font-normal">This site does not contain any <Link className="underline" href="https://www.cookiesandyou.com/">Cookies</Link>.</span>
              <br />
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
