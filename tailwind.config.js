/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          50: '#fbf7f5',
          100: '#f5ebe6',
          200: '#ebd5cc',
          300: '#dfb8aa',
          400: '#cc8e68', // The text color from the image
          500: '#b36d48',
          600: '#965235',
          700: '#7a4029',
          800: '#633524',
          900: '#502d20',
          950: '#2b1710',
        },
        noir: {
          950: '#0c0a09', // Very dark background (warm black)
          900: '#1c1917', // Card background
          800: '#292524', // Lighter elements
        }
      },
    },
  },
  plugins: [],
}
