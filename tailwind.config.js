/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '10px',
      },
      spacing: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
}