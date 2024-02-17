/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000", 
      bluePrimary: "#004382",
      blueSecondary: "#F5FAFF",
      gray: "gray",
      green: "green",
      red: "red",
      hover: "#3d3c3c11",
    },
    extend: {},
  },
  plugins: [],
}

