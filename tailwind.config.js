/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["dark-main"]: "#1a222c",
        ["dark-secondary"]: "#24303F",
      },
    },
  },
  plugins: [],
};
