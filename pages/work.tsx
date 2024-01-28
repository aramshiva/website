import Link from "next/link";
import Badge from "../components/badge";

export default function Work() {
  return (
    <div className="prose lg:prose-xl">
      <h1 className="mb-4 block text-xl font-bold underline decoration-yellow-300 decoration-8 underline-offset-1 sm:text-3xl">
        Work
      </h1>
      <div className="mb-4">
        <h3 className="text-md mb-4 block font-semibold sm:text-lg">
          Mentee at HCB
        </h3>
        <p className="sm:text-md text-sm text-gray-500">
          I am currently a mentee at{" "}
          <Link href="https://hackclub.com/hcb" className="text-blue-500">
            HCB
          </Link>
          . HCB is a tool for students to make their own non-profits.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-md mb-4 block font-semibold sm:text-lg">
          Hackathon Organizer
        </h3>
        <p className="sm:text-md text-sm text-gray-500">
          I have previously helped organize{" "}
          <Link href="https://hackthesound.net" className="text-blue-500">
            Hack The Sound
          </Link>
          , a 13-hour hackathon in the Puget Sound.
        </p>
      </div>
      <h1 className="text-xl font-bold underline decoration-yellow-300 decoration-8 underline-offset-1 sm:text-3xl">
        Skills
      </h1>
      <div className="flex flex-row space-x-2">
        <Badge className="origin-center -rotate-2" color="#e34c26">
          HTML
        </Badge>
        <Badge className="origin-center rotate-1" color="#264de4">
          CSS
        </Badge>
        <Badge className="origin-center rotate-2" color="#F0DB4F">
          JS
        </Badge>
        <Badge className="origin-center -rotate-3" color="#FFE873">
          Python
        </Badge>
        <Badge className="-rotate-5 origin-center" color="#61dbfb">
          React
        </Badge>
        <Badge className="rotate-4 origin-center" color="black">
          Next.js
        </Badge>
        <Badge className="origin-center -rotate-2" color="#6d28d9">
          Tailwind CSS
        </Badge>
        <Badge className="origin-center rotate-2" color="#9B111E">
          Ruby
        </Badge>
        <Badge className="origin-center -rotate-6" color="#CC0000">
          Rails
        </Badge>
      </div>
    </div>
  );
}
