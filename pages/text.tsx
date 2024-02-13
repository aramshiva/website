import React, { useState, useEffect } from "react";

type MessagePageProps = {
    error?: string;
};
const MessagePage: React.FC<MessagePageProps> = ({ error }) => {
    const [displayedMessage, setDisplayedMessage] = useState("");
    const fetchGreeting = async () => {
        try {
            const response = await fetch("/greeting.txt");
            const greetings = await response.text();
            const lines = greetings.split("\n");
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            const updatedMessage = displayedMessage.replace(
                "{greeting}",
                randomLine,
            );
            setDisplayedMessage(updatedMessage);
        } catch (error) {
            console.error("Failed to fetch greetings:", error);
        }
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const fetchMessage = async () => {
            try {
                const response = await fetch("/message.txt");
                const message = await response.text();

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
            } catch (error) {
                console.error("Failed to fetch message:", error);
                setDisplayedMessage("Failed to fetch message");
            }
        };

        if (error) {
            setDisplayedMessage(`Error: ${error}`);
        } else {
            fetchMessage();
        }

        return () => clearTimeout(timeoutId);
    }, [error]);

    useEffect(() => {
        if (!error && displayedMessage.includes("{greeting}")) {
            fetchGreeting();
        }
    }, [error, displayedMessage]);

    return (
        <div className="h-screen w-screen whitespace-pre bg-black pl-2 pt-1 font-mono text-xs text-white">
            <pre>{displayedMessage}</pre>
        </div>
    );
};

export default MessagePage;
