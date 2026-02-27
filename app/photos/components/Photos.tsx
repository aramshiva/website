import Gallery from "./Gallery";
import Link from "next/link";

export default function PhotosPage({ initialPhotoId }: { initialPhotoId?: string }) {
  return (
    <>
      <div className="p-9 md:px-30">
        <div className="pb-5">
          <p className="text-4xl font-medium">Photos</p>
          <p className="text-2xl">By Aram Shiva</p>
          <p className="text-zinc-800 text-lg pt-2">
            Photos I have taken across the years. Photos are pulled from my{" "}
            <Link href={`https://www.flickr.com/photos/${process.env.FLICKR_USER}`} className="underline">Flickr</Link>
          </p>
          <p className="pt-2">
            I currently use a Panasonic LUMIX S5IIX with a Sigma 28-70mm f/2.8 lens, and an iPhone 16 Pro.
          </p>
          <p className="pt-1">
            Before I used a Panasonic LUMIX GX85 with a Olympus M.12-40mm F2.8 and LUMIX G 25/F1.7 and 12-32/F3.5-5.6.
          </p>
        </div>
        <Gallery initialPhotoId={initialPhotoId} />
      </div>
    </>
  );
}
