/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      displayOne: ["Pacifico", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

