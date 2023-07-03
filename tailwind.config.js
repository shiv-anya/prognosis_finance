/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primaryGray: "#C4C4C4"
      },
      backgroundColor: {
        primaryGreen: "#26B645",
        greenDark: "#0FAE96",
      },
      height: {
        popup: "530px",
      },
      width: {
        popup: "440px"
      }
    },
  },
  plugins: [],
}