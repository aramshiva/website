"use client";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { useState, useEffect } from "react";
import { Progress } from "@/app/components/ui/progress";

const fetcher = (url: string) =>
  fetch(url, {
    cache: "no-store",
    headers: { "Cache-Control": "no-cache" },
  }).then((r) => r.json());

export default function SpotifyWidget() {
  const { data, mutate } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 15000,
    revalidateOnFocus: true,
    dedupingInterval: 15000,
  });
  const [progress, setProgress] = useState(0);
  const [lastSongId, setLastSongId] = useState("");

  useEffect(() => {
    if (data?.isPlaying) {
      if (lastSongId !== data.songUrl) {
        setLastSongId(data.songUrl);
        setProgress(data.progressMs || 0);
      }

      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1000;
          return newProgress >= data.durationMs ? data.durationMs : newProgress;
        });
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
      setLastSongId("");
    }
  }, [data, lastSongId]);

  useEffect(() => {
    if (data) {
      setProgress(data.progressMs || 0);
    }
  }, [data]);

  // Force refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      mutate();
    }, 30000);

    return () => clearInterval(interval);
  }, [mutate]);

  if (!data?.isPlaying) {
    return null;
  }

  const progressPercentage = (progress / data.durationMs) * 100;

  return (
    <AnimatePresence>
      <motion.div
        key={data.songUrl} // Add key prop to force re-render on song change
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="fixed bottom-3 right-3"
      >
        <Card className="w-full max-w-md bg-white px-1 shadow-sm">
          <CardContent className="px-8 py-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
              Now Playing
            </div>
            <Tilt glareEnable>
              <div className="flex items-center space-x-5 w-72 shadow-xs">
                <Image
                  src={data.album.images[0].url}
                  alt={data.album.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg shadow-sm object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-medium text-gray-900 truncate">
                    {data.title}
                  </h2>
                  <p className="text-sm text-gray-600 truncate mb-3">
                    {data.artist[0].name}
                  </p>
                  <Progress
                    value={progressPercentage}
                    className="w-[65%] h-1"
                  />
                  {/* <div className="w-[60%] bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-gray-600 h-1 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div> */}
                </div>
              </div>
              <div className="absolute bottom-2 right-2">
                <SiSpotify size={20} color={"#000000"} />
              </div>
            </Tilt>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
