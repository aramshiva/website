"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="flex justify-start font-semibold">
        <p>aram</p>
      </Link>
      <div className="flex justify-end">
        <button onClick={toggleDarkMode}>
          {darkMode ? <IoSunny /> : <FaMoon className="text-white" />}
        </button>
      </div>
    </div>
  );
}
