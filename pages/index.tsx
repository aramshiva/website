import SpotifyWidget from "../components/spotifynowplaying";
import Link from "next/link";
import Nav from "../components/nav";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Nav />
      <div>
        <div className="block text-sm sm:text-lg">
          <span className="block text-xl font-semibold italic sm:text-3xl">
            When did the internet get so{" "}
            <span className="font-black">busy?</span>
          </span>
          Advertisements, pop-ups, notifications, trackers, spam. <br />
          <br />I{"'"}m{" "}
          <Link
            className="underline decoration-blue-300 decoration-4 underline-offset-0"
            href="https://github.com/aramshiva"
          >
            Aram
          </Link>
          , I don{"'"}t believe we{"'"}ve met.
          <br />I craft web experiences to help us{" "}
          <span className="font-bold">slow down</span> and appericate the{" "}
          <span className="italic">little things.</span>
          <br />
          The world is changing so <span className="font-bold">fast</span>, let
          {"'"}s take a moment to take a breather. <br />
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
      {/* <CommitHash /> */}
    </>
  );
}
