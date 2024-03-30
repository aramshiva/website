import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommitHash from "../components/helpers/commitHash";
import Wrapper from "../components/wrapper";

export default function Welcome() {
   const messages = [
      "When did the internet get so busy?",
      "Advertisements, pop-ups, notifications, trackers, spam, malware.",
      "I'm Aram, I don't believe we've met.",
      "I craft web experiences to help us slow down and appreciate the little things.",
      "The world is changing so fast, let's take a moment to take a breather.",
   ];

   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
   const [showContent, setShowContent] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timer);
   }, [currentMessageIndex]);

   useEffect(() => {
      if (currentMessageIndex === messages.length) {
         setShowContent(true);
      }
   }, [currentMessageIndex, messages.length]);

   const renderMessages = () => {
      if (currentMessageIndex < messages.length) {
         return (
            <div className="inter flex h-screen w-screen flex-col items-center justify-center text-black">
               <AnimatePresence mode="wait">
                  <motion.p
                     key={currentMessageIndex}
                     className="text-3xl"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {messages[currentMessageIndex]}
                  </motion.p>
               </AnimatePresence>
            </div>
         );
      }
      return null;
   };

   const renderContent = () => {
      return (
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
         >
            <Wrapper>
               <div>
                  <div className="block text-sm sm:text-lg">
                     <span className="block text-xl font-semibold italic sm:text-3xl">
                        When did the internet get so{" "}
                        <span className="relative font-black">
                           busy?
                           <div className="absolute -bottom-1 right-0 w-20 sm:-bottom-1 sm:w-[168px]"></div>
                        </span>
                     </span>
                     Advertisements, pop-ups, notifications, trackers, spam.{" "}
                     <br />
                     <br />I{"'"}m{" "}
                     <Link
                        className="underline decoration-yellow-300 decoration-4 underline-offset-1"
                        href="https://github.com/aramshiva"
                     >
                        Aram
                     </Link>
                     , I don{"'"}t believe we{"'"}ve met.
                     <br />I craft web experiences to help us{" "}
                     <span className="font-bold">slow down</span> and appreciate
                     the
                     <span className="italic">little things.</span>
                     <br />
                     The world is changing so{" "}
                     <span className="font-bold">fast</span>, let{"'"}s take a
                     moment to take a breather. <br />
                     This is my home on the interwebs, where I share my thoughts
                     and creations.
                     <br />
                     <br />
                     Sincerely, <br />
                     <br />
                     <Image
                        src="/signature.svg"
                        className="p-1"
                        alt="Aram Shiva"
                        width={100}
                        height={100}
                        loading="lazy"
                     />
                  </div>
               </div>
               <CommitHash />
            </Wrapper>
         </motion.div>
      );
   };

   return (
      <>
         {renderMessages()}
         {showContent && renderContent()}
      </>
   );
}
