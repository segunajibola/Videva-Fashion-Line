/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'demo1': ['1.7rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }]
      }
    },
  },
  plugins: [],
}