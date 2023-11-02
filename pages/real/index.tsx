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
            <Image src="" alt="Welcome Image!" className="100vh" />
            <div className="pt-20 md:text-4xl lg:text-5xl">
              <Typewriter
                words={["Aram Shiva"]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
              />
              <Marquee pauseOnHover autoFill className="pr-9 pl-9">
                <Image
                  src="/assets/orgs/njhs.png"
                  alt="National Junior Honor Society"
                  width={100}
                  height={100}
                  className="pr-9 pl-9"
                />
                <Image
                  src="/assets/orgs/amoc.webp"
                  alt="American College of Musicians"
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/orgs/hackclub.png"
                  alt="Hack Club"
                  width={100}
                  height={100}
                />
              </Marquee>
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
