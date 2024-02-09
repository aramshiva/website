/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
   content: [
      "./components/**/*.tsx",
      "./pages/**/*.tsx",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         colors: {
            "accent-1": "#FAFAFA",
            "accent-2": "#EAEAEA",
            "accent-7": "#333",
            success: "#0070f3",
            cyan: "#79FFE1",
         },
         spacing: {
            28: "7rem",
         },
         letterSpacing: {
            tighter: "-.04em",
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         fontSize: {
            "5xl": "2.5rem",
            "6xl": "2.75rem",
            "7xl": "4.5rem",
            "8xl": "6.25rem",
         },
         boxShadow: {
            sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
            md: "0 8px 30px rgba(0, 0, 0, 0.12)",
         },
      },
   },
   darkMode: "class",
   plugins: [nextui(), require("@tailwindcss/typography")],
};
