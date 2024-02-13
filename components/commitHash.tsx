import { Tooltip } from "@material-tailwind/react";
import { formatDistanceToNow, isWeekend } from "date-fns";

export default function CommitHash() {
    const commitDate = new Date(process.env.COMMIT_DATE);
    const isitweekend = isWeekend(commitDate);
    const formattedCommitDate = formatDistanceToNow(commitDate, {
        addSuffix: true,
    });
    return (
        <div>
            <span className="sticky my-4 hidden text-xs text-gray-600 sm:block">
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
                from {formattedCommitDate} {isitweekend ? "on a weekend" : ""}
            </span>
        </div>
    );
}
