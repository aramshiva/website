import SpotifyWidget from "../components/spotifynowplaying";
import Link from "next/link";
import Nav from "../components/nav";
import TypeIt from "typeit-react";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Nav />
      <div>
        <div>
          <div className="pb-5 text-3xl font-semibold">
            <span className="wave">👋</span>{" "}
            <span>
              <TypeIt
                options={{
                  strings: [
                    "Hey!",
                    "Hello!",
                    "Welcome",
                    "Howdy!",
                    "Heya!",
                    "Hi!",
                  ],
                  loop: true,
                  breakLines: false,
                  lifeLike: true,
                  waitUntilVisible: true,
                  nextStringDelay: 3000,
                }}
              />
            </span>
            {"  "}
          </div>
          <div className="block text-sm sm:text-lg">
            <span className="font-semibold italic block text-md sm:text-xl">
              When did the internet get so{" "}
              <span className="font-black">busy?</span>
            </span>
            <br />I{"'"}m{" "}
            <Link
              className="underline decoration-blue-500"
              href="https://github.com/aramshiva"
            >
              Aram
            </Link>
            , I don{"'"}t believe we{"'"}ve met.
            <br />I craft web experiences to help us{" "}
            <span className="font-bold">slow down</span> and appericate the{" "}
            <span className="italic">little things.</span>
            <br />
            The world is changing so <span className="font-bold">fast</span>,
            let{"'"}s take a moment to slow down. <br />
            This is my home on the interwebs, where I share my thoughts and
            creations.
            <br />
            <br />
            Sincerely, <br />
            <br />
            <Image
              src="/signature.svg"
              className="p-1"
              alt="Aram Shiva"
              width={100}
              height={100}
            />
          </div>
        </div>
        <SpotifyWidget />
      </div>
      {/* <CommitHash /> */}
    </>
  );
}
