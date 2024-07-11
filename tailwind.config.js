/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans"],
      },
      colors: {
        primary: ["#F44335"],
        secondary: ["#F9CCC7"],
      },
      backgroundImage: {
        hero: "url('./assets/imgs/hero.png')",
      },
    },
  },
  plugins: [],
};
