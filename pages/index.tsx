import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import Link from "next/link";
import Typewriter from "typewriter-effect";

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
              <Typewriter
                options={{
                  strings: [
                    "Hello!",
                    "Aloha!",
                    "Howdy!",
                    "Ahoy!",
                    "Hey!",
                    "Heya!",
                    "Bonjour!",
                    "Salut!",
                    "Hallo",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <hr className="w-12 h-1 border-0 md:my-10 bg-gray-400"></hr>
            </div>
            <div className="font-serif text-3xl">
              <p className="text-6xl pb-4">🏗️</p>
              <p>This website is under construction!</p>
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
