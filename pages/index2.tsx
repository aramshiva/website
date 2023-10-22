import Layout from "../components/layout";
import Link from "next/link";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="pt-20 md:text-4xl lg:text-5xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="48"
                  d="M184 112l144 144-144 144"
                ></path>
              </svg>
              <Typewriter
                words={["Aram Shiva"]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
              />
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
