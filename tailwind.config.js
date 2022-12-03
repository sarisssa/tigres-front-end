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
        dark: {
          background: {
            top: "#202738",
            bottom: "#070816",
          },
          tigres: {
            gray: "#99A1BD",
            placeholder: "#5d6887",
            border: "#1b2236",
          },
          button: {
            DEFAULT: "#4C82FB",
            connect: "#4C82FB3D",
            active: "rgb(76, 130, 251)",
          },
          modal: {
            background: "#0E111A",
            row: {
              hover: "#141b2b",
            },
          },
          swap: {
            background: "#0d111a",
            row: {
              button: "#293249",
              hover: "rgb(52 59 81)",
            },
          },
          input: {
            background: "rgb(19, 26, 42)",
          },
        },
        background: {
          top: "rgba(255, 184, 226, 0.51)",
          bottom: "#ffffff",
        },
        link: {
          hover: "#99A1BD14",
        },
        button: {
          DEFAULT: "rgb(251, 17, 142)",
          connect: "rgba(251, 17, 142, 0.24)",
          "close-icon": "rgb(152, 161, 192)",
          pill: {
            hover: "rgba(184, 192, 220, 0.08)",
          },
        },
        modal: {
          background: "#ffffff",
          row: {
            hover: "rgb(245, 246, 252)",
          },
        },
        input: {
          background: "rgb(245, 246, 252)",
          border: "rgb(152, 161, 192)",
          text: "rgb(13, 17, 28)",
        },
        swap: {
          background: "#ffffff",
          row: "#141B2B",
          focus: "#474C5E",
          row: {
            background: "#131b2a",
            button: "rgb(232, 236, 251)",
            hover: "rgb(227, 230, 245)",
          },
        },
        tigres: {
          gray: "#5d6785",
          placeholder: "rgb(152, 161, 192)",
          border: "rgb(210, 217, 238)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
