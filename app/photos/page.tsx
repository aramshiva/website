"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiBluesky, SiGithub, SiReaddotcv } from "react-icons/si";

function Photos() {
  const [photos, setPhotos] = useState<string[]>([
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
    "/photos/6.jpg",
    "/photos/7.jpg",
    "/photos/8.jpg",
    "/photos/9.jpg",
    "/photos/10.jpg",
    "/photos/11.jpg",
    "/photos/12.jpg",
    "/photos/13.jpg",
    "/photos/14.jpg",
    "/photos/15.jpg",
    "/photos/16.jpg",
    "/photos/17.jpg",
    "/photos/18.jpg",
    "/photos/19.jpg",
    "/photos/20.jpg",
    "/photos/21.jpg",
    "/photos/22.jpg",
    "/photos/23.jpg",
    "/photos/24.jpg",
    "/photos/25.jpg",
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <meta property="og:image" content="/brand/photos.png" />
      <meta property="og:title" content="photos by aram shiva" />
      <meta property="og:url" content="https://aram.sh/photos" />
      <meta property="og:site_name" content="aram.sh" />
      <meta
        property="description"
        content="an collection of photos taken by aram shiva, showcasing various moments and scenes."
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="photos by aram shiva" />
      <meta
        property="twitter:description"
        content="A collection of photos taken by aram shiva, showcasing various moments and scenes."
      />
      <meta property="twitter:image" content="/brand/photos.png" />
      <meta
        property="og:description"
        content="A collection of photos taken by aram shiva, showcasing various moments and scenes."
      />
      <title>photos - aram shiva</title>
      <div className="font-satoshi text-[#374151] [&_a]:decoration-amber-500 [&_a]:hover:text-amber-800 [&_a]:underline [&_a]:font-medium">
        <div className="w-screen">
          <div className="pb-[5rem] px-[7.5rem]">
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
              <p>
                photos pulled from my{" "}
                <Link href="https://flickr.com/photos/191297914@N06/">
                  flickr
                </Link>
                , high quality photos can be found there.
              </p>
              <p className="pb-5">
                i currently am using a lumix gx85 with a olympus m.zuiko 12-40mm
                f/2.8 pro lens.
              </p>

              <div className="gap-4 columns-1 sm:columns-2 lg:columns-3">
                {loading
                  ? Array.from({ length: 20 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-full mb-4 break-inside-avoid bg-gray-200 animate-pulse rounded-lg"
                        style={{ width: 300, height: 300 }}
                      ></div>
                    ))
                  : photos.map((photo, index) => (
                      <Image
                        key={index}
                        src={photo}
                        loading="lazy"
                        alt={`Photo ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full mb-4 break-inside-avoid rounded-lg"
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
