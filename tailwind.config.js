/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["blue-main"]: "#55A4F8",
        ["dark-main"]: "#1A222C",
        ["dark-secondary"]: "#24303F",
      },
    },
  },
  plugins: [],
};
