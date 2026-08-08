/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Aperture, Camera, Copy, Check, Maximize2, Minimize2, Share } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SiApple, SiX, SiThreads } from "react-icons/si";

interface ExifTag {
  label: string;
  tag: string;
  value: string;
}

interface PhotoSize {
  label: string;
  width: number;
  height: number;
  source: string;
}

interface PhotoDetails {
  id: string;
  camera: string;
  title: string;
  description: string;
  dates: {
    posted: string;
    taken: string;
    lastupdate: string;
  };
  views: string;
  tags: string[];
  urls: { type: string; url: string }[];
  exif: ExifTag[];
  sizes: PhotoSize[];
}

interface ModalProps {
  photoId: string;
  onClose: () => void;
}

export default function Modal({ photoId, onClose }: ModalProps) {
  const [details, setDetails] = useState<PhotoDetails | null>(null);
const [copied, setCopied] = useState(false);
const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      fetch(`/api/photos/get?id=${photoId}`, { signal: controller.signal }).then((res) => res.json()),
      fetch(`/api/photos/view?id=${photoId}`, { signal: controller.signal }).then((res) => res.json()),
    ])
      .then(([detailsData, viewData]) => {
        setDetails({
          ...detailsData,
          views: String(Number(detailsData.views) + Number(viewData.views)),
        });
      })
      .catch(() => {});
    return () => controller.abort();
  }, [photoId]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const displaySize = useMemo(
    () =>
      details?.sizes.find((s) => s.label === "Large 2048") ||
      details?.sizes.find((s) => s.label === "Large 1600") ||
      details?.sizes.find((s) => s.label === "Large"),
    [details?.sizes],
  );

  const exifMap = useMemo(
    () => new Map(details?.exif.map((e) => [e.tag, e])),
    [details?.exif],
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 md:p-4"
      onClick={onClose}
    >
      {details ? (
      <div
        className="grid max-h-[95vh] w-full max-w-6xl grid-cols-1 overflow-y-auto rounded-lg bg-white md:max-h-[90vh] md:grid-cols-2 md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-white md:min-h-[60vh]">
          {displaySize && (
            <Image
              src={displaySize.source}
              alt={details?.title || ""}
              width={displaySize.width}
              height={displaySize.height}
              className="max-h-[50vh] w-full object-cover md:max-h-[90vh]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          {displaySize && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 bottom-2 bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={() => setFullscreen(true)}
            >
              <Maximize2 className="size-4" />
            </Button>
          )}
        </div>
        {fullscreen && displaySize && (
          <div
            className="fixed inset-0 z-60 overflow-auto bg-black"
            onClick={() => setFullscreen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="fixed right-4 top-4 z-61 bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={() => setFullscreen(false)}
            >
              <Minimize2 className="size-4" />
            </Button>
            <img
              src={displaySize.source}
              alt={details?.title || ""}
              className="h-screen w-screen object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="overflow-y-auto p-4 md:p-6">
          {details && (
            <div className="flex min-h-full flex-col">
              {details.title && (
                <div>
                  <p className="text-2xl font-medium">
                    {details.title}
                  </p>
                  <p className="pt-1 pb-5">
                    Taken {details.dates.taken.split(" ")[0]}
                  </p>
                </div>
              )}
              <div className="space-y-1 text-zinc-800">
                <div className="flex items-center gap-1">
                  {details.camera?.toLowerCase().includes("iphone") ? (
                    <SiApple className="size-4" />
                  ) : (
                    <Camera className="size-4" />
                  )}
                  {details.camera && <p>{details.camera}</p>}
                </div>
                {exifMap.get("LensModel") && (
                  <div className="flex items-center gap-1">
                    <Aperture className="size-4" />
                    <p>{exifMap.get("LensModel")!.value}</p>
                  </div>
                )}
                {exifMap.get("FocalLength") && (
                  <div className="flex items-center gap-1">
                    <p>{exifMap.get("FocalLength")!.value}</p>
                    {exifMap.get("FocalLengthIn35mmFormat") && (
                      <HoverCard>
                        <HoverCardTrigger>
                          <p className="text-zinc-600 decoration-dotted hover:underline">
                            {exifMap.get("FocalLengthIn35mmFormat")!.value}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-48">35mm equivalent</HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                )}
                {exifMap.get("FNumber") && (
                  <p>ƒ/{exifMap.get("FNumber")!.value.replace(/^f\//, "")}</p>
                )}
                {exifMap.get("ExposureTime") && (
                  <p>
                    {exifMap
                      .get("ExposureTime")!
                      .value.replace(/^.*\((.+)\)$/, "$1")
                      .replace(/\s*sec$/, "")}
                    s
                  </p>
                )}
                {exifMap.get("ISO") && <p>ISO {exifMap.get("ISO")!.value}</p>}
                {exifMap.get("ExposureCompensation") && (
                  <p>{exifMap.get("ExposureCompensation")!.value}</p>
                )}
              </div>
              <p className="mt-auto pt-4 pb-2">{details.views} views</p>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="flex min-w-0 w-full items-center gap-2 rounded-md border pl-3 text-sm md:w-auto md:flex-1">
                  <span className="truncate">{`${window.location.origin}/photos/p/${details.id}`}</span>
                  <Button
                    variant="outline"
                    className="ml-auto shrink-0 bg-transparent border-none shadow-none"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.origin}/photos/p/${details.id}`
                      );
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="flex-1 md:w-20 md:flex-none"
                  onClick={() => {
                    const url = `${window.location.origin}/photos/p/${details.id}`;
                    window.open(
                      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`,
                      "_blank"
                    );
                  }}
                >
                  <SiX />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 md:w-20 md:flex-none"
                  onClick={() => {
                    const url = `${window.location.origin}/photos/p/${details.id}`;
                    window.open(
                      `https://threads.net/intent/post?url=${encodeURIComponent(url)}`,
                      "_blank"
                    );
                  }}
                >
                  <SiThreads />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 md:w-20 md:flex-none"
                  onClick={() => {
                    const url = `${window.location.origin}/photos/p/${details.id}`;
                    navigator.share({ url });
                  }}
                >
                  <Share />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      ) : (
        <div className="flex items-center justify-center bg-white px-20 py-32 rounded-lg md:px-108 md:py-92">
          <p className="text-zinc-700">Loading...</p>
        </div>
      )}
    </div>
  );
}
