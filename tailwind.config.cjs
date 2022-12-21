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
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-right': {
          '0%': {
              opacity: '0',
              transform: 'translateX(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
      },
      'fade-in-left': {
        '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateX(0)'
        },
    }
    },
    animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out',
        'fade-in-right': 'fade-in-right 1.5s ease-out',
        'fade-in-left': 'fade-in-left 1.5s ease-out'
    }
    },
  },
  plugins: [],
}