/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '73px': '73px'
      }
    },
    colors: {
      'background': '#E6E9F2',
      'text-main': '#3A4562',
      'text-secondary': '#878D9D',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}
