/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'some-color': '#f6f6f6',
        'text-color': '#5abeb3',
      },
      boxShadow: {
        'button': '5px 5px 10px #bebebe -5px -5px 10px #ffffff',
      },
      gap: {
        '11': '0.80rem',
      }
    },
  },
  plugins: [],
}
