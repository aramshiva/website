"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";

interface Photo {
  id: string;
  secret: string;
  title: string;
  url_z: string;
  width_z: number;
  height_z: number;
  url_l: string;
  width_l: number;
  height_l: number;
}

export default function Gallery({
  initialPhotoId,
}: {
  initialPhotoId?: string;
}) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(
    initialPhotoId ?? null,
  );

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photo ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const selectPhoto = (id: string) => {
    setSelectedPhotoId(id);
    window.history.pushState(null, "", `/photos/p/${id}`);
  };

  const closePhoto = () => {
    setSelectedPhotoId(null);
    window.history.pushState(null, "", "/photos/");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            className="group relative mb-4 block break-inside-avoid cursor-pointer border-0 bg-transparent p-0"
            onClick={() => selectPhoto(photo.id)}
          >
            <Image
              src={photo.url_z}
              alt={photo.title || ""}
              width={10000}
              height={10000}
              className="w-full rounded-xl object-cover"
            />
            {photo.title && (
              <>
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute right-3 bottom-3 text-right text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-medium">{photo.title}</p>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
      {selectedPhotoId && (
        <Modal photoId={selectedPhotoId} onClose={closePhoto} />
      )}
    </div>
  );
}
