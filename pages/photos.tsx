import { useEffect, useState, useMemo } from "react";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import Wrapper from "../components/wrapper";

export default function Photos() {
   const [images, setImages] = useState<string[]>([]);
   const staticImages = useMemo(
      () => [
         "/assets/photos/1.jpg",
         "/assets/photos/2.jpg",
         "/assets/photos/3.jpg",
         "/assets/photos/4.jpg",
         "/assets/photos/5.jpg",
         "/assets/photos/6.jpg",
         "/assets/photos/7.jpg",
         "/assets/photos/8.jpg",
         "/assets/photos/9.jpg",
         "/assets/photos/10.jpg",
         "/assets/photos/11.jpg",
         "/assets/photos/12.jpg",
         "/assets/photos/13.jpg",
         "/assets/photos/14.jpg",
         "/assets/photos/15.jpg",
         "/assets/photos/16.jpg",
         "/assets/photos/17.jpg",
         "/assets/photos/18.jpg",
         "/assets/photos/19.jpg",
      ],
      [],
   );

   useEffect(() => {
      const fetchImages = async () => {
         try {
            const response = await fetch("/api/photos");
            const imageUrls = await response.json();
            setImages(imageUrls);
         } catch (error) {
            console.error("Error fetching images:", error);
            setImages(staticImages);
         }
      };

      fetchImages();
   }, [staticImages]);

   return (
      <>
         <Wrapper>
            <h1 className="mb-4 block text-xl font-bold sm:text-3xl">Photos</h1>
            <ParallaxScroll images={images.length ? images : staticImages} />
         </Wrapper>
      </>
   );
}
