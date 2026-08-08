import { Metadata } from "next";
import PhotosPage from "../../components/Photos";

async function getPhotoInfo(photoId: string) {
  const params = new URLSearchParams({
    method: "flickr.photos.getInfo",
    api_key: process.env.FLICKR_KEY!,
    photo_id: photoId,
    format: "json",
    nojsoncallback: "1",
  });

  const res = await fetch(`https://api.flickr.com/services/rest/?${params}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (data.stat !== "ok") return null;

  const photo = data.photo;
  const title = photo.title._content || "Untitled";
  const server = photo.server;
  const id = photo.id;
  const secret = photo.secret;
  const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg`;

  return { title, imageUrl };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ photo: string }>;
}): Promise<Metadata> {
  const { photo: photoId } = await params;
  const info = await getPhotoInfo(photoId);

  if (!info) return {};

  const siteUrl = process.env.SITE_URL ?? "https://media.aram.sh";
  const ogUrl = `${siteUrl}/api/og?url=${encodeURIComponent(info.imageUrl)}&title=${encodeURIComponent(info.title)}`;

  return {
    title: info.title,
    openGraph: {
      title: info.title,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
  };
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ photo: string }>;
}) {
  const { photo } = await params;
  return <PhotosPage initialPhotoId={photo} />;
}
