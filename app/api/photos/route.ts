import { NextResponse } from "next/server";

export async function GET() {
  try {
    const extras = [
      "description",
      "license",
      "date_upload",
      "date_taken",
      "owner_name",
      "icon_server",
      "original_format",
      "last_update",
      "geo",
      "tags",
      "machine_tags",
      "o_dims",
      "views",
      "media",
      "path_alias",
      "url_sq",
      "url_t",
      "url_s",
      "url_q",
      "url_m",
      "url_n",
      "url_z",
      "url_c",
      "url_l",
      "url_o",
    ].join(",");

    const params = new URLSearchParams({
      method: "flickr.people.getPublicPhotos",
      api_key: process.env.FLICKR_KEY!,
      user_id: process.env.FLICKR_USER!,
      extras,
      per_page: "500",
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
    return NextResponse.json(data.photos);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 },
    );
  }
}