/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gray: "#F7F7F7",
        darkgray: "#999999",
        blue: "#3A86FF",
        yellow: "#FFBE0B",
        red: "#ff3e00",
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'worksans': ['Work Sans']
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
