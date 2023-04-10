/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AC2E2E",
        secondary: "#D4E267",
        "gray-500": "#0A033C",
        "grey-100": "#777777",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
}
