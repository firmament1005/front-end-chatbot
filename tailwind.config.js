/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
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
        'fade-dropdown-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-dropdown-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
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
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-out': 'fade-out 1s ease-out',
        'slide-in': 'slide-in .8s ease-out',
        'slide-out': 'slide-out .8s ease-out',
        'fade-dropdown-in': "fade-dropdown-in .5s ease-out",
        'fade-dropdown-out': "fade-dropdown-out .5s ease-out",
        "slide-dropdown-in": "slide-dropdown-in .5s ease-out",
        "slide-dropdown-out": "slide-dropdown-out .5s ease-out"
      },
    },
  },
  plugins: [],
}