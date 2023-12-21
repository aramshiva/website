import Layout from "../components/layout";
import Container from "../components/container";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Index() {
  return (
    <>
      <div>
        <Layout>
          <Container>
<<<<<<< Updated upstream:pages/credits.tsx
            <div className="font-mono whitespace-pre-wrap pt-20">
=======
            <div
              className="font-mono whitespace-pre-wrap pt-20"
              id="console-command"
            >
>>>>>>> Stashed changes:pages/credits/index.tsx
              ${" "}
              <Typewriter
                words={["cat aram.sh/public/credits.txt"]}
                loop={1}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
<<<<<<< Updated upstream:pages/credits.tsx
                // onLoopDone={}
              />
              <span className="invisible" id="credits">
                <br />
                CREDITS
                <br />
                It's important to credit your sources.
                <br />
                <br />
                <br />
                HELP
                <br />
                Helped with some code!
                <br />
                <br />
                <Link href="https://arashshiva.com">Arash Shiva</Link>
                <br />
                <br />
=======
              />
              <span id="credits">
>>>>>>> Stashed changes:pages/credits/index.tsx
                <br />
                INSPIRATION
                <br />
                <br />
                <Link href="https://malted.dev/">malted.dev</Link>
                <br />
                <Link href="https://reeseric.ci/">reeseric.ci</Link>
                <br />
                <Link href="https://zachlatta.com/">zachlatta.com</Link>
                <br />
                <Link href="https://maxwofford.com">maxwofford.com</Link>
                <br />
                <Link href="https://mingjie.dev/">mingjie.dev</Link>
                <br />
                <Link href="https://tobyb.dev/">tobyb.dev</Link>
                <br />
                <Link href="https://sarthakmohanty.me/">sarthakmohanty.me</Link>
                <br />
                <Link href="https://arashshiva.com">arashshiva.com</Link>
                <br />
                <Link href="https://sampoder.com/">sampoder.com</Link>
                <br />
                <Link href="https://eliasruiz.com/">eliasruiz.com</Link>
                <br />
                <Link href="https://chronark.com/">chonark.com</Link>
                <br />
                <Link href="https://github.com/itsmingjie/monolith/tree/main">
                  itsmingjie/monolith
                </Link>
                <br />
                <Link href="https://tr.af">tr.af</Link>
              </span>
            </div>
          </Container>
        </Layout>
      </div>
    </>
  );
}
