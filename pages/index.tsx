import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Footer from "../components/footer";

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
          <div className="text-3xl font-mono">
            <p>Hi, I am </p>
            <span className="font-black text-5xl font-mon">
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
          {/* <div>
            <p className="text-4xl">Projects:</p>
            <Link href="https://aram.sh">aram.sh</Link>
          </div> */}
          {/* <div>
            <p className="text-3xl font-bold">I am a</p>
            <div className="text-2xl text-mono">
              <Link href="https://hackclub.com" className="">Nerd,</Link><br />
              <Link href="https://en.wikipedia.org/wiki/Canadian_Americans">Canadian, American, </Link><Link href="https://en.wikipedia.org/wiki/Persians">Persian</Link><Link href="https://en.wikipedia.org/wiki/Multiple_citizenship"> (Triple-Citzen)</Link>
            </div> */}
          <div className="font-mono">
            <br /><br /><br /><br /><br />
            <p>To: @Reader</p>
            <p>Subject: Coming Soon</p>
            <p>From: @Aram</p><br /><br />
            <p>Dear Reader,</p>
            <blockquote className="font-serif">
              <p className="italic">"All great ideas start on a blank page."</p>
              <p>-Unknown.</p>
            </blockquote>
            <span>and you stumbled upon my empty page. Come back later for a</span><span className="font-serif font-bold">&nbsp;Great Idea</span>
            <br /><br />
            <p>-Sincerely</p>
            <p className="font-mono text-xl">Aram Shiva</p>
            <br /><br />
            <span>P.S. You can submit a </span><Link href="https://github.com/aramshiva/website/issues" className="underline"> GitHub Issue</Link><span> and tag it with `enhancement` to request/give an idea!</span>
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
