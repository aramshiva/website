import Link from "next/link";
import Image from "next/image";
import CommitHash from "../components/helpers/commitHash";
import Wrapper from "../components/wrapper";

export default function Index() {
   return (
      <>
         <Wrapper>
            <div>
               <div className="block text-sm sm:text-lg">
                  <span className="block text-xl font-semibold italic sm:text-3xl">
                     When did the internet get so{" "}
                     <span className="relative font-black">
                        busy?
                        <div className="absolute -bottom-1 right-0 w-20 sm:-bottom-1 sm:w-[168px]"></div>
                     </span>
                  </span>
                  Advertisements, pop-ups, notifications, trackers, spam. <br />
                  <br />I{"'"}m{" "}
                  <Link
                     className="underline decoration-yellow-300 decoration-4 underline-offset-1"
                     href="https://github.com/aramshiva"
                  >
                     Aram
                  </Link>
                  , I don{"'"}t believe we{"'"}ve met.
                  <br />I craft web experiences to help us{" "}
                  <span className="font-bold">slow down</span> and appreciate
                  the <span className="italic">little things.</span>
                  <br />
                  The world is changing so{" "}
                  <span className="font-bold">fast</span>, let
                  {"'"}s take a moment to take a breather. <br />
                  This is my home on the interwebs, where I share my thoughts
                  and creations.
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
                     loading="lazy"
                  />
               </div>
            </div>
            <CommitHash />
         </Wrapper>
      </>
   );
}
