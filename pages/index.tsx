import { formatDistanceToNow } from "date-fns";
import { Typewriter } from "react-simple-typewriter";
import SpotifyWidget from "../components/spotifynowplaying";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";

export default function Index() {
  const commitDate = new Date(process.env.COMMIT_DATE);
  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });

  return (
    <>
      <div>
        <div className="h-20" />
        <div>
          <div className="pb-8 text-7xl font-semibold">
            <span>
              I am a{" "}
              <span>
                <Typewriter
                  words={[
                    "dreamer",
                    "developer",
                    "designer",
                    "builder",
                    "maker",
                    "photographer",
                    "student",
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={75}
                  deleteSpeed={75}
                  delaySpeed={2500}
                  loop={true}
                />
              </span>{" "}
              in Seattle.
            </span>
            {"  "}
            <p></p>
          </div>
          <div className="text-xl">
            <span className="wave">👋</span> I create remarkable experiences for
            the web. <br />I am currently a mentee at{" "}
            <Link href="https://hackclub.com/hcb" className="underline">
              HCB
            </Link>
            , a tool for students to run their own non-profits.
            <br />
            <br />
          </div>
          <div className="font-mono">
            <span className="my-4 text-right sticky text-xs text-gray-500">
              v. {process.env.APP_VERSION} |{" "}
              <a
                className="underline"
                href={`https://github.com/aramshiva/website/tree/${process.env.COMMIT_HASH}`}
              >
                <Tooltip
                  content={process.env.FULL_COMMIT_HASH}
                  className="rounded-xl bg-white p-2 font-sans text-black shadow-lg "
                >
                  {process.env.COMMIT_HASH}
                </Tooltip>
              </a>{" "}
              from {formattedCommitDate}
            </span>
          </div>
        </div>
        <SpotifyWidget />
      </div>
    </>
  );
}
