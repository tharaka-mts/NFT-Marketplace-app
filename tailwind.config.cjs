/** @type {import('tailwindcss').Config} */
// Defined themes for tailwindcss
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary': "#080B2A",
        'lightBlue': "#15BFFD",
        'dimWhite': "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      'xs': "480px",
      'ss': "620px",
      'sm': "768px",
      'md': "1060px",
      'lg': "1200px",
      'xl': "1700px",
    },
  },
  plugins: [],
};
