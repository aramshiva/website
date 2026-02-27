import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "https://media.aram.sh"
      : "http://localhost:3000";

  try {
    const extras = [
      "description",
      "date_upload",
      "date_taken",
      "url_z",
      "url_l",
    ].join(",");

    const params = new URLSearchParams({
      method: "flickr.people.getPublicPhotos",
      api_key: process.env.FLICKR_KEY!,
      user_id: process.env.FLICKR_USER!,
      extras,
      per_page: "20",
      format: "json",
      nojsoncallback: "1",
    });

    const response = await fetch(
      `https://api.flickr.com/services/rest/?${params}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.stat !== "ok" || !data.photos) {
      throw new Error(data.message ?? "Flickr API error");
    }

    const photos = data.photos.photo as {
      id: string;
      title: string;
      description: { _content: string };
      dateupload: string;
      datetaken: string;
      url_z?: string;
      url_l?: string;
    }[];

    const items = photos
      .map((photo) => {
        const pubDate = new Date(Number(photo.dateupload) * 1000).toUTCString();
        const imageUrl = photo.url_l ?? photo.url_z ?? "";
        const title = escapeXml(photo.title || "Untitled Photo");
        const description = photo.description?._content
          ? escapeXml(photo.description._content)
          : "";
        const link = `${siteUrl}/photos/p/${photo.id}`;

        return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[<img src="${imageUrl}" alt="${title}" />${description ? `<p>${description}</p>` : ""}]]></description>
    </item>`;
      })
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Photos by Aram Shiva</title>
    <link>${siteUrl}</link>
    <description>Photos I have taken across the years. Photos are pulled from my Flickr (flickr.com/photos/${process.env.FLICKR_USER})</description>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("RSS feed generation error", error);
    return NextResponse.json(
      { error: "internal server error occurred when generating RSS feed" },
      { status: 500 },
    );
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
