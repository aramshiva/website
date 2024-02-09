import React, { useState, useEffect } from "react";

type MessagePageProps = {
   error?: string;
};

const MessagePage: React.FC<MessagePageProps> = ({ error }) => {
   const [displayedMessage, setDisplayedMessage] = useState("");

   useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (error) {
         setDisplayedMessage(`Error: ${error}`);
         return;
      }

      fetch("/message.txt")
         .then((response) => response.text())
         .then((message) => {
            let index = 0;

            const typeLetter = () => {
               if (message && index < message.length) {
                  setDisplayedMessage(
                     (current) => current + message.charAt(index),
                  );
                  index++;
                  timeoutId = setTimeout(typeLetter, 5);
               }
            };

            typeLetter();
         })
         .catch((error) => {
            console.error("Failed to fetch message:", error);
            setDisplayedMessage("Failed to fetch message");
         });

      return () => clearTimeout(timeoutId);
   }, [error]);

   if (error) {
      return <div>{displayedMessage}</div>;
   }

   if (displayedMessage.includes("{greeting}")) {
      fetch("/greeting.txt")
         .then((response) => response.text())
         .then((greetings) => {
            const lines = greetings.split("\n");
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            const updatedMessage = displayedMessage.replace(
               "{greeting}",
               randomLine,
            );
            setDisplayedMessage(updatedMessage);
         })
         .catch((error) => {
            console.error("Failed to fetch greetings:", error);
         });
   }

   return (
      <div className="h-screen w-screen whitespace-pre bg-black pl-2 pt-1 font-mono text-xs text-white">
         <pre>{displayedMessage}</pre>
      </div>
   );
};

export default MessagePage;
