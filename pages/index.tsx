import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import { Typewriter } from "react-simple-typewriter";

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <div className="text-7xl pt-12 font-worksans font-bold ">
              <div className="blog-title-emoji">
                <Twemoji text="👋" />
              </div>
              <div className="text-7xl font-black bg-gradient-to-r from-yellow-100 via-yellow-150 to-yellow-200 text-transparent bg-clip-text animate-gradient">
                <Typewriter
                  words={[
                    "Hello!",
                    "Aloha!",
                    "Howdy!",
                    "Ahoy!",
                    "Hey!",
                    "Heya!",
                    "Bonjour!",
                    "Salut!",
                    "Hallo",
                    "Bienvenue",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
              <hr className="w-12 h-1 border-0 md:my-10 bg-gray-400"></hr>
            </div>
            <div className="text-3xl">
              <span>Hi, I'm Aram! I am a </span>
              <Typewriter
                words={["Developer", "Student", "Nerd", "Hack Clubber"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
