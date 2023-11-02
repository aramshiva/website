import Layout from "../components/layout";
import Link from "next/link";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="bg-white justify-left pl-5 text-black text-3xl font-semibold pt-9">
              <div className="h-60"/>
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
              <br />
              {/* <span className="font-mono font-semibold bg-slate-900 rounded pr-3 pl-3 pt-1 pb-1 text-white">
                <span>> </span>
                <Typewriter
                  cursorBlinking
                  words={["Develop", "Imagine", "Create", "Inspire", "Learn"]}
                  cursor
                  loop
                  cursorStyle="|"
                  typeSpeed={125}
                />
              </span><br /> */}
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
