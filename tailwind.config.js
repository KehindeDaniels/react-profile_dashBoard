/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'almostwhite': '#F7FFFF',
      },

      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}