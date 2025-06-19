"use client";
import Email from "./components/email";
import Link from "next/link";
import Music from "./components/music";
import Image from "next/image";
import { SiBluesky, SiGithub, SiReaddotcv } from "react-icons/si";

export default function Page() {
  const hour = new Date().getHours();
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDay = weekdays[new Date().getDay()];
  return (
    <>
      <div className="font-satoshi text-[#374151] [&_a]:decoration-amber-500 [&_a]:hover:text-amber-800 [&_a]:underline [&_a]:font-medium">
        <div className="w-screen">
          <div className="sm:pb-[5rem] sm:px-[7.5rem] pb-[3rem] px-[2rem]">
            <div className="text-left text-wrap">
              <div className="pt-[5rem] pb-7 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Image
                      src="/shapes/1.svg"
                      alt="shape"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link href="/photos" className="!no-underline">
                    photos
                  </Link>
                  <Link href="/guestbook" className="!no-underline">
                    guestbook
                  </Link>
                </div>
                <nav className="flex gap-4">
                  <Link href="https://github.com/aramshiva">
                    <SiGithub className="text-[#374151] text-xl" />
                  </Link>
                  <Link href="https://bsky.app/profile/aram.sh">
                    <SiBluesky className="text-[#374151] text-xl" />
                  </Link>
                  <Link href="/resume.pdf">
                    <SiReaddotcv className="text-[#374151] text-xl" />
                  </Link>
                </nav>
              </div>
              <p className="pb-5">
                {(() => {
                  if (hour >= 5 && hour < 12) return "good morning";
                  if (hour >= 12 && hour < 17) return "good afternoon";
                  if (hour >= 17 && hour < 22) return "good evening";
                  return "good night";
                })()}{" "}
                and happy{" "}
                {new Date().getDay() === 0 || new Date().getDay() === 6
                  ? "weekend"
                  : currentDay}
                ! i{"'"}m aram (he/him){" "}
                <button
                  onClick={() => {
                    const audio = new Audio("/aram.m4a");
                    audio.play();
                  }}
                  className="decoration-amber-500 hover:text-amber-800 underline font-medium hover:cursor-pointer"
                >
                  [/ɑːˈrɑːm/]
                </button>
                . i love to make things that people love to use. <Music />
              </p>
              <p className="pb-5">
                i do community operations, moderation and logistics at{" "}
                <Link
                  href="https://hackclub.com"
                  className="text-[#ec3750] hover:text-[#ffcad1] hover:bg-[#fff4f4] rounded-md p-1 group"
                >
                  <Image
                    src="/logos/hackclub/normal.png"
                    alt="Hack Club Logo"
                    width={17.5}
                    height={17.5 }
                    className="inline-block mr-1 -rotate-6 group-hover:rotate-0 transition-transform"
                  />
                  hack club
                </Link>
                , a global community of young people who love to code. if your a
                teenager whos nerdy, techy or artsy i highly recommend you{" "}
                <Link href="https://hackclub.com/slack">join</Link>!
              </p>
              <p className="pb-5">
                i also am the regional manager for{" "}
                <Link
                  href="https://codeday.org/seattle"
                  className="text-[#FF686B] hover:text-[#903a3c] hover:bg-[#fff4f4] rounded-md p-1 group"
                >
                  <Image
                    src="/logos/codeday.png"
                    alt="CodeDay Logo"
                    width={17.5}
                    height={17.5}
                    className="inline-block mr-1 rotate-6 group-hover:rotate-0 transition-transform"
                  />
                  codeday seattle
                </Link>
                , a 24-hour coding event for high schoolers learning how to code
                with hundreds of students attending each year.
              </p>
              <p className="pb-5">
                i take photos of people, places and things, you can see them{" "}
                <Link href="/photos">[here]</Link>. i{"'"}m also into tech
                theatre (and theatre in general!),{" "}
                <Link href="/essay.pdf" className="!no-underline !font-normal">
                  public transit
                </Link>
                , magic the gathering, genealogy, typography, design, economics,
                linguistics, reading, listening to music and data visualization
                {/* and <Link href="/interests">so much more</Link> */}.
              </p>
              <div>
                <Email />
              </div>
              {/* <iframe src="https://increm.net/badge?key=aram" title="incremnet badge" width="88" height="31" style={{border: "none", background: "url('https://increm.net/bg.png')"}}></iframe>
            <iframe className="bg-white text-white" src="https://webring.phthallo.com/api/widgets/4?format=minimal"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
