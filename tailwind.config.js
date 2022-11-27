/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "token-modal":
          "rgb(0 0 0 / 24%) 12px 16px 24px, rgb(0 0 0 / 24%) 12px 8px 12px, rgb(0 0 0 / 32%) 4px 4px 8px",
      },
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
          "close-icon": "rgb(152, 161, 192)",
          pill: {
            active: "rgb(76, 130, 251)",
            hover: "rgba(184, 192, 220, 0.08)",
          },
        },
        modal: {
          background: "#0E111A",
          row: {
            hover: "#141b2b",
          },
        },
        input: {
          background: "rgb(19, 26, 42)",
          border: "rgb(152, 161, 192)",
        },
        swap: {
          background: "#0d111a",
          row: "#141B2B",
          focus: "#474C5E",
          row: {
            background: "#131b2a",
            button: "#293249",
            hover: "#323D53",
          },
        },
        tigres: {
          gray: "#99A1BD",
          placeholder: "#5d6887",
          border: "#1b2236",
        },
      },
    },
  },
  plugins: [],
};
