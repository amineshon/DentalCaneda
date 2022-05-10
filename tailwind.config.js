const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class',
  important: true,
  theme: {
    colors: {
      ...colors,
      blue: {
        gray: '#e5eff6',
        text: '#8eaec2',
        light: '#28acff',
        DEFAULT: '#0068a9',
        dark: '#101532',
      },
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      right: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '.65rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
