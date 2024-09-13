/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiSpotify } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: { name: string; url: string }[];
  album?: {
    name: string;
    url: string;
    images: { url: string; height: number; width: number }[];
  };
  songUrl?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Spotify() {
  const { data: spotifyData, error } = useSWR<SpotifyData>('/api/spotify', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  if (error) return null;
  if (!spotifyData) return null;

  const { title, artist, album, songUrl } = spotifyData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="fixed bottom-3 right-0 flex flex-col p-5 align-middle text-black not-prose"
    >
      <div className="fixed bottom-3 right-0 flex flex-col p-5 align-middle text-black">
        <div className="rounded-xl border bg-white p-4 shadow-xl">
          <div className="pb-3">
            <p>Currently Listening to:</p>
          </div>
          <Tilt glareEnable>
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={
                spotifyData.songUrl ||
                "https://open.spotify.com/user/w0irmxmq6rkqvfpu5sznvym1u?si=7d100c9a0f7744a8"
              }
              className="relative flex w-72 items-center space-x-4 rounded-2xl p-4 transition-shadow hover:shadow-2xl sm:p-6"
            >
              <div className="w-16">
                <Image
                  src={spotifyData.album?.images[0].url ?? '/path/to/fallback-image.jpg'}
                  alt={spotifyData.album?.name ?? 'Album cover'}
                  className="rounded-xl"
                  width={64}
                  height={64}
                />
              </div>

              <div className="flex-1">
                <p className="component font-bold">{spotifyData.title}</p>
                <p className="font-dark text-xs">{spotifyData.artist?.[0].name}</p>
              </div>
              <div className="absolute bottom-2 right-2">
                <SiSpotify size={20} color={"#000000"} />
              </div>
            </Link>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
}