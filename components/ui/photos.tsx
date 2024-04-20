import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({
   images,
   className,
}: {
   images: string[];
   className?: string;
}) => {
   const gridRef = useRef<any>(null);
   const { scrollYProgress } = useScroll({
      container: gridRef, // remove this if your container is not fixed height
      offset: ["start start", "end start"], // remove this if your container is not fixed height
   });

   const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
   const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

   const third = Math.ceil(images.length / 3);

   const firstPart = images.slice(0, third);
   const secondPart = images.slice(third, 2 * third);
   const thirdPart = images.slice(2 * third);

   return (
      <div
         className={cn("h-[40rem] items-start overflow-y-auto", className)}
         ref={gridRef}
      >
         <div
            className="mx-auto grid max-w-5xl grid-cols-1 items-start  gap-10 px-10 py-40 md:grid-cols-2 lg:grid-cols-3"
            ref={gridRef}
         >
            <div className="grid gap-10">
               {firstPart.map((el, idx) => (
                  <motion.div
                     style={{ y: translateFirst }} // Apply the translateY motion value here
                     key={"grid-1" + idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                  >
                     <Image
                        src={el}
                        className="!m-0 gap-10 rounded-lg object-cover object-center !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                        loading="lazy"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="grid gap-10">
               {secondPart.map((el, idx) => (
                  <motion.div
                     style={{ y: translateSecond }}
                     key={"grid-2" + idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                  >
                     <Image
                        src={el}
                        className="!m-0 gap-10 rounded-lg object-cover object-left-top !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="grid gap-10">
               {thirdPart.map((el, idx) => (
                  <motion.div
                     style={{ y: translateThird }}
                     key={"grid-3" + idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                  >
                     <Image
                        src={el}
                        className="!m-0 gap-10 rounded-lg object-cover object-left-top !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
};
