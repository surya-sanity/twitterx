/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        dark: "black",
        darkOverlay: "#202327",
        light: "white",
        lightOverlay: "#F0F2F2"
      }
    },
  },
  plugins: [],
}

