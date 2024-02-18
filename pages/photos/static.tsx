import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import Wrapper from "../../components/wrapper";

export default function Photos() {
   return (
      <Wrapper>
         <ParallaxScroll images={images} />
      </Wrapper>
   );
}

const images = [
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
];
