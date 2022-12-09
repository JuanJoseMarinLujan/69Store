/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      richB: "#0a0a0a",
      sunglow: "#ffc914",
      silver: "#7a7a7a",
      orange: "#f75c03",
      richW: "#fafafa",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      gridTemplateColumns: {
        maxContent: 'repeat(2, maxcontent)',
      }
    }
  },
  plugins: [],
};
