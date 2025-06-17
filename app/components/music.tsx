"use client";

import useSWR from "swr";
import Link from "next/link";

export default function Music() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data: currentData, isLoading } = useSWR("/api/music", fetcher);

  if (isLoading) {
    return null;
  }

  if (!currentData || currentData.error) {
    return null;
  }

  return (
    <span className="lowercase">
      i{"'"}m currently listening to{" "}
      <Link
        href={currentData.songUrl || "https://www.last.fm/user/armhs"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-800 rounded-md p-[0.1rem] group"
      >
        {currentData.albumImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentData.albumImageUrl}
            alt={`${currentData.albumName} by ${currentData.artistName}`}
            width={24}
            height={24}
            className="inline-block rounded mr-1 rotate-3 group-hover:rotate-0 transition-transform"
          />
        )}
        {currentData.albumName} by {currentData.artistName}
      </Link>{" "}
      on Apple Music
    </span>
  );
}
