import { useEffect, useState } from "react";
import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import Wrapper from "../../components/wrapper";

export default function Photos() {
   const [images, setImages] = useState<string[]>([]);

   useEffect(() => {
      const fetchImages = async () => {
         try {
            const response = await fetch("/api/photos");
            const imageUrls = await response.json();
            setImages(imageUrls);
         } catch (error) {
            console.error("Error fetching images:", error);
         }
      };

      fetchImages();
   }, []);

   return (
      <Wrapper>
         <ParallaxScroll images={images} />
      </Wrapper>
   );
}
