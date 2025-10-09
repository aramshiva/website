"use client";

import React from "react";

export default function Email() {
  const handleClick = () => {
    navigator.clipboard.writeText("me" + String.fromCharCode(64) + "aram.sh");
  };

  return (
    <>
      <p>
        i would love to meet you or learn new things! feel free to email me
        about yourself, someone you{"'"}re working on, a cool thing you saw
        recently, or just to say hi!{" "}
        <button
          id="contact"
          className="decoration-amber-500 hover:text-amber-800 cursor-pointer underline font-medium"
          onClick={handleClick}
        >
          [click here to copy my email address to your clipboard.]
        </button>
      </p>
    </>
  );
}
