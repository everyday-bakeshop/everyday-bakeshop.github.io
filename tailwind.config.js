module.exports = {
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['quiet-sans', 'sans-serif'],
      display: ['novecento-sans-wide'],
      serif: ['amsterdam-four', 'serif'],
    },
    extend: {
      colors: {
        'gray': '#EEE5E2',
        'text-dark': '#221111',
        'text-medium': '#554444', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
