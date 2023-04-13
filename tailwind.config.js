/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blueGray: "#77a9ca",
      yellowTuta: "#fcda5e",
      grayTuta: "#666666",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
