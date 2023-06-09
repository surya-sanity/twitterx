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
        lightOverlay: "#F0F2F2",
        darkBorder: "rgb(75 85 99)",
        lightBorder: "#F7F7F8",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

