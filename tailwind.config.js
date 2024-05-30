/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '1'
          },
        },
        'slide-dropdown-in': {
          '0%': {
            transform: 'translateY(-20%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },
        'slide-dropdown-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': {
            transform: 'translateY(-10%)',
            opacity: '1'
          },
        },
      },
      animation: {
        'slide-in': 'slide-in .8s ease-out',
        'slide-out': 'slide-out .8s ease-out',
        "slide-dropdown-in": "slide-dropdown-in .5s ease-out",
        "slide-dropdown-out": "slide-dropdown-out .5s ease-out"
      },
    },
  },
  plugins: [],
}