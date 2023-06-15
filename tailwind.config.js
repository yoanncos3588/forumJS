/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./integration/*.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'sans': ['Asap', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

