/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sp': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1080px',
        '2xl': '1536px',
      },
      colors: {
        'black-rgba': 'rgba(251, 251, 251, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}