module.exports = {
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['novecento-sans-wide', 'sans-serif'],
    },
    extend: {
      colors: {
        'eb-pink': '#E6CFCF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
