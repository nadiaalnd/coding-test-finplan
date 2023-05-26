/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#002984",
        black: "#000",
        teal: "#006c84",
        gray: "#757575",
        gainsboro: "#e0e0e0",
      },
      fontFamily: {
        nunito: "Nunito",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
