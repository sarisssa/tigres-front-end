/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", "Inter", "sans-serif"],
      },
    },
    colors: {
      background: {
        top: "#202738",
        bottom: "#070816",
      },
      link: {
        hover: "#99a1bd14",
      },
    },
  },
  plugins: [],
};
