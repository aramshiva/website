import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.FLICKR_KEY}&user_id=191297914@N06&format=json&nojsoncallback=1`
        );
        const photos = response.data.photos.photo;
        const imageUrls = photos.map((photo: any) => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
        res.status(200).json(imageUrls);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Error fetching images" });
    }
}
