/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1F2326",
      textColor: "rgb(245 245 244)",
      secondery: "#BA1168",
      boxShadow: "#282d30",
      link: "#1e40af",
      third: "#1d1f21",
    },
    fontFamily: {
      primaryFont: ["Merriweather", "serif"],
    },
    letterSpacing: {
      widest: ".5em",
      small: ".2em",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
