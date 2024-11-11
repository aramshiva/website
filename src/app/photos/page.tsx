"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="gap-4 columns-1 sm:columns-2 lg:columns-3">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="w-full mb-4 break-inside-avoid bg-gray-200 animate-pulse"
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
                className="w-full mb-4 break-inside-avoid rounded-[0.1rem]"
              />
            ))}
      </div>
    </>
  );
}

export default Photos;
