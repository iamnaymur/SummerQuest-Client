/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      displayOne: ["Pacifico", "cursive"],
      displayTwo: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
