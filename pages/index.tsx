import Link from "next/link";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>

      <div className="selection:bg-yellow-500 h-screen">
        <Layout>
          <Container>
            <div className="bg-white justify-left pl-5 text-black text-3xl font-semibold pt-9">
              <div className="flex space-x-5 pt-9 text-xl font-normal text-center justify-items-center place-items-center">
                <Link href="/">home</Link>
                <Link href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%65%40%61%72%61%6D%2E%73%68">email</Link>
                <Link href="https://github.com/aramshiva" target="_blank">github</Link>
              </div>
              <div className="h-9" />
              <div className="blog-title-emoji pr-2 text-5xl sm:pt-9 md:pt-9 lg:pt-9">
                <Twemoji text="👋" />
              </div>
              <br />
              <span> I'm Aram </span>
              <br />
              <span>
                I make reallly dumb things on the interwebs<br />
                I'm currently working on{" "}
                <Link href="https://hackthesound.net" className="underline">
                  Hack The Sound
                </Link>
                <br />a hackathon in Washington.
                <br />
              </span>
              <br />
            </div>
          </Container>
        </Layout>
        <div className="rainbow h-9 sticky bottom-0"/>
      </div>
    </>
  );
}
