const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      green: {
        700: "#447604",
        600: '#4e8a18',
        500: '#589e2b',
        400: '#62b23e',
        300: '#67bc48',
        200: '#6ac14d',
        100: '#6cc551',
      },

      militarygreen: {
        300: "#47624f",
        200: "#58705f",
        100: "#677d6e",
      },

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.pink
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
