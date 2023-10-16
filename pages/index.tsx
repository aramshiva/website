import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`👋 I'm Aram`}</title>
        </Head>
        <Container>
          <div className="text-7xl pt-11 blog-title-emoji">
            <Twemoji text="👋" />
          </div>
          <br />
          <div className="text-3xl">
            <p>Hi, I am </p>
            <span className="font-black text-5xl">
              <Typewriter
                options={{
                  strings: ["Aram", "آرام", "亚兰", "Арам", "อาราม"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <br />
          <div>
            <p>Projects:</p>
            <Link href="https://aram.sh">aram.sh</Link>
          </div>
          <div>
            <p>I am a</p>
            <div className="text-3xl text-mono">
              <Link href="https://hackclub.com" className="">Nerd,</Link><br />
              <Link href="https://en.wikipedia.org/wiki/Canadian_Americans">Canadian, American, </Link><Link href="https://en.wikipedia.org/wiki/Persians">Persian</Link><Link href="https://en.wikipedia.org/wiki/Multiple_citizenship"> (Triple-Citzen)</Link>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
