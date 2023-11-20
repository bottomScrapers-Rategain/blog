/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-primary":"#3066B1",
        "yellow-primary":"#FFC632"
      }
    },
  },
  plugins: [],
}