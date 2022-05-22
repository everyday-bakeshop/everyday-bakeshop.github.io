module.exports = {
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['novecento-sans-wide', 'sans-serif'],
    },
    extend: {
      colors: {
        'eb-gray': '#E3DAD3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
