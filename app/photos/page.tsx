import PhotosPage from "./components/Photos";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiBluesky, SiGithub, SiReaddotcv, SiInstagram } from "react-icons/si";

export const metadata: Metadata = {
  title: "Photos by Aram Shiva",
  description: "A collection of photos by Aram Shiva",
  openGraph: {
    images: ["/og.png"],
    siteName: "Photos by Aram Shiva",
  },
};

export default function Home() {
  return (
    <>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Photos"
          href="/feed.xml"
        />
      </head>
      <div className="font-satoshi text-[#374151] [&_a]:decoration-amber-500 [&_a]:hover:text-amber-800 [&_a]:underline [&_a]:font-medium">
        <div className="w-screen">
          <div className="sm:px-30 px-8">
            <div className="pt-20 pb-7 flex justify-between items-center">
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
              <nav className="flex gap-4 text-[#374151] text-xl">
                <Link href="https://www.instagram.com/aramshva/">
                  <SiInstagram />
                </Link>
                <Link href="https://github.com/aramshiva">
                  <SiGithub />
                </Link>
                <Link href="https://bsky.app/profile/aram.sh">
                  <SiBluesky />
                </Link>
                <Link href="/resume.pdf">
                  <SiReaddotcv />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <PhotosPage />
    </>
  );
}
