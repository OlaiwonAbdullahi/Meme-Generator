/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#e7e5e5",
        bgColor: "#0c0c0c",
        hrColor: "#5e5d5d",
      },
      fontFamily: {
        titalium: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
