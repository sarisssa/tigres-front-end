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
      colors: {
        background: {
          top: "#202738",
          bottom: "#070816",
        },
        link: {
          hover: "#99A1BD14",
        },
        button: {
          DEFAULT: "#4C82FB",
          connect: "#4C82FB3D",
        },
        modal: {
          background: "#0E111A",
          row: {
            hover: "#141b2b",
          },
        },
        tigres: {
          gray: "#99A1BD",
        },
      },
    },
  },
  plugins: [],
};
