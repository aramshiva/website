import React, { useState, useEffect } from "react";

type MessagePageProps = {
   error?: string;
};

const MessagePage: React.FC<MessagePageProps> = ({ error }) => {
   // State to hold the current text to display
   const [displayedMessage, setDisplayedMessage] = useState("");

   useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (error) {
         setDisplayedMessage(`Error: ${error}`);
         return;
      }

      // Fetch the message from /message.txt
      fetch("/message.txt")
         .then((response) => response.text())
         .then((message) => {
            let index = 0;

            // Function to "type" out the message
            const typeLetter = () => {
               if (message && index < message.length) {
                  setDisplayedMessage(
                     (current) => current + message.charAt(index),
                  );
                  index++;
                  timeoutId = setTimeout(typeLetter, 5); // Assign the timeoutId
               }
            };

            typeLetter(); // Start the typing effect when the component mounts
         })
         .catch((error) => {
            console.error("Failed to fetch message:", error);
            setDisplayedMessage("Failed to fetch message");
         });

      // Cleanup function to prevent memory leaks in case the component unmounts
      // before the typing is finished
      return () => clearTimeout(timeoutId);
   }, [error]); // Effect dependencies

   if (error) {
      return <div>{displayedMessage}</div>;
   }

   // Check if the displayedMessage contains "{greeting}"
   if (displayedMessage.includes("{greeting}")) {
      // Fetch the greetings from /greeting.txt
      fetch("/greeting.txt")
         .then((response) => response.text())
         .then((greetings) => {
            // Split the greetings into an array of lines
            const lines = greetings.split("\n");

            // Get a random line from the greetings
            const randomLine = lines[Math.floor(Math.random() * lines.length)];

            // Replace "{greeting}" with the random line
            const updatedMessage = displayedMessage.replace(
               "{greeting}",
               randomLine,
            );

            // Update the displayed message with the updated message
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
