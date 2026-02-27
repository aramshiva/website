import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!id) {
    return NextResponse.json(
      { error: "id is required" },
      { status: 400 },
    );
  }

  try {
    const exifParams = new URLSearchParams({
      method: "flickr.photos.getExif",
      api_key: process.env.FLICKR_KEY!,
      photo_id: id,
      format: "json",
      nojsoncallback: "1",
    });

    if (secret) {
      exifParams.set("secret", secret);
    }

    const sizesParams = new URLSearchParams({
      method: "flickr.photos.getSizes",
      api_key: process.env.FLICKR_KEY!,
      photo_id: id,
      format: "json",
      nojsoncallback: "1",
    });

    const infoParams = new URLSearchParams({
      method: "flickr.photos.getInfo",
      api_key: process.env.FLICKR_KEY!,
      photo_id: id,
      format: "json",
      nojsoncallback: "1",
    });

    if (secret) {
      infoParams.set("secret", secret);
    }

    const [exifResponse, sizesResponse, infoResponse] = await Promise.all([
      fetch(`https://api.flickr.com/services/rest/?${exifParams}`),
      fetch(`https://api.flickr.com/services/rest/?${sizesParams}`),
      fetch(`https://api.flickr.com/services/rest/?${infoParams}`),
    ]);

    if (!exifResponse.ok || !sizesResponse.ok || !infoResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const [exifData, sizesData, infoData] = await Promise.all([
      exifResponse.json(),
      sizesResponse.json(),
      infoResponse.json(),
    ]);

    const photo = exifData.photo;

    const keepTags = new Set([
      "Make",
      "Model",
      "ExposureTime",
      "FNumber",
      "ISO",
      "DateTimeOriginal",
      "ExposureCompensation",
      "FocalLength",
      "FocalLengthIn35mmFormat",
      "LensModel",
      "Flash",
      "MeteringMode",
      "WhiteBalance",
      "ExposureProgram",
      "ExposureMode",
      "SceneCaptureType",
      "LightSource",
      "Contrast",
      "Saturation",
      "Sharpness",
    ]);

    const exif = photo.exif
      .filter((tag: { tag: string }) => keepTags.has(tag.tag))
      .map((tag: { label: string; tag: string; clean?: { _content: string }; raw: { _content: string } }) => ({
        label: tag.label,
        tag: tag.tag,
        value: tag.clean?._content ?? tag.raw._content,
      }));

    const sizes = sizesData.sizes.size.map(
      (s: { label: string; width: string; height: string; source: string }) => ({
        label: s.label,
        width: Number(s.width),
        height: Number(s.height),
        source: s.source,
      }),
    );

    const info = infoData.photo;

    return NextResponse.json({
      id: photo.id,
      camera: photo.camera,
      title: info.title._content,
      description: info.description._content,
      dates: {
        posted: info.dates.posted,
        taken: info.dates.taken,
        lastupdate: info.dates.lastupdate,
      },
      views: info.views,
      tags: info.tags.tag.map((t: { raw: string; _content: string }) => t.raw),
      urls: info.urls.url.map((u: { type: string; _content: string }) => ({
        type: u.type,
        url: u._content,
      })),
      exif,
      sizes,
    });
  } catch (error) {
    console.error("Error fetching EXIF data:", error);
    return NextResponse.json(
      { error: "Error fetching EXIF data" },
      { status: 500 },
    );
  }
}
