    import { NextResponse } from "next/server";

    export async function GET() {
        try {
            const response = await fetch(
                `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.FLICKR_KEY}&user_id=${process.env.FLICKR_USER}&format=json&nojsoncallback=1&extras=url_o`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            const photos = data.photos.photo;
            const imageUrls = photos.map((photo: { url_o: string }) => photo.url_o);
            return NextResponse.json(imageUrls);
        } catch (error) {
            console.error("Error fetching images:", error);
            return NextResponse.json({ error: "Error fetching images" }, { status: 500 });
        }
    }
