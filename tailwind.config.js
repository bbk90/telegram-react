/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["blue-main"]: "#55A4F8",
        ["blue-secondary"]: "#486993",
        ["dark-main"]: "#1A222C",
        ["dark-secondary"]: "#24303F",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
