import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.FLICKR_KEY}&user_id=${process.env.FLICKR_USER}&format=json&nojsoncallback=1`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const photos = data.photos.photo;

    const imageUrls = await Promise.all(
      photos.map(async (photo: { id: string }) => {
        try {
          const sizesResponse = await fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${process.env.FLICKR_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`,
          );
          if (!sizesResponse.ok) {
            console.error(
              `Sizes response not ok for photo ${photo.id}:`,
              sizesResponse.status,
            );
            return null;
          }
          const sizesData = await sizesResponse.json();
          const originalSize = sizesData.sizes.size.find(
            (size: { label: string }) => size.label === "Large",
          );
          return originalSize ? originalSize.source : null;
        } catch (error) {
          console.error(`Error fetching sizes for photo ${photo.id}:`, error);
          return null;
        }
      }),
    );

    const validImageUrls = imageUrls.filter((url) => url !== null);
    return NextResponse.json(validImageUrls);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 },
    );
  }
}
