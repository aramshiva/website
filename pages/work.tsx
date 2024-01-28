import Link from "next/link";
import Badge from "../components/badge";
import Marquee from "react-fast-marquee";

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
      <Marquee className="no-scrollbar">
        <div className="flex flex-grow space-x-6">
          <Badge
            className="origin-center -rotate-2"
            color="#e34c26"
            link="https://html.spec.whatwg.org/"
          >
            HTML
          </Badge>
          <Badge
            className="origin-center rotate-1"
            color="#264de4"
            link="https://www.w3.org/TR/CSS/#css"
          >
            CSS
          </Badge>
          <Badge
            className="origin-center rotate-2"
            color="#F0DB4F"
            link="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
          >
            JS
          </Badge>
          <Badge
            className="origin-center -rotate-3"
            color="#FFE873"
            link="https://www.python.org/"
          >
            Python
          </Badge>
          <Badge
            className="-rotate-5 origin-center"
            color="#61dbfb"
            link="https://react.dev/"
          >
            React
          </Badge>
          <Badge
            className="origin-center -rotate-3"
            color="black"
            link="https://nextjs.org/"
          >
            Next.js
          </Badge>
          <Badge
            className="origin-center -rotate-2"
            color="#6d28d9"
            link="https://tailwindcss.com/"
          >
            Tailwind CSS
          </Badge>
          <Badge
            className="origin-center rotate-2"
            color="#9B111E"
            link="https://www.ruby-lang.org/"
          >
            Ruby
          </Badge>
          <Badge
            className="-rotate-5 origin-center"
            color="#CC0000"
            link="https://rubyonrails.org/"
          >
            Rails
          </Badge>
          <Badge
            className="origin-center rotate-3"
            color="#007ACC"
            link="https://nodejs.org/en"
          >
            Node.js
          </Badge>
          <Badge
            className="-rotate-4 rotate-4 origin-center"
            color="#3178C6"
            link="https://www.typescriptlang.org/"
          >
            Typescript
          </Badge>
          <Badge
            className="origin-center -rotate-3"
            color="#F05032"
            link="https://git-scm.com/"
          >
            Git
          </Badge>
          <div className="w-2" />
        </div>
      </Marquee>
    </div>
  );
}
