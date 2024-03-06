import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import "animate.css";

export default function SpotifyWidget() {
   const fetcher = (url: string) => fetch(url).then((r) => r.json());
   const { data } = useSWR("/api/spotify", fetcher);

   if (!data?.isPlaying) {
      return null;
   }

   return (
      <div className="animate__animated animate__slideInUp fixed bottom-3 right-0 flex flex-col p-5 align-middle text-black">
         <div className="rounded-xl border bg-white p-4 shadow-xl">
            <div className="pb-3">
               <p>Currently Listening to:</p>
            </div>
            <Tilt glareEnable>
               <Link
                  target="_blank"
                  rel="noopener noreferer"
                  href={
                     data.songUrl ||
                     "https://open.spotify.com/user/w0irmxmq6rkqvfpu5sznvym1u?si=7d100c9a0f7744a8"
                  }
                  className="relative flex w-72 items-center space-x-4 rounded-2xl p-4 transition-shadow hover:shadow-2xl sm:p-6"
               >
                  <div className="w-16">
                     <Image
                        src={data.albumImageUrl}
                        alt={data.album}
                        className="rounded-xl"
                        width={64}
                        height={64}
                     />
                  </div>

                  <div className="flex-1">
                     <p className="component font-bold">{data.title}</p>
                     <p className="font-dark text-xs">{data.artist}</p>
                  </div>
                  <div className="absolute bottom-2 right-2">
                     <SiSpotify size={20} color={"#000000"} />
                  </div>
               </Link>
            </Tilt>
         </div>
      </div>
   );
}
