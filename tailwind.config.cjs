/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e1b27',
        card: '#0a1828',
        dark: '#000f1d',
        blue: '#50a6d7',
        gray: '#495868',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}