/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '15%': '15%',
      },
      padding: {
        '4%': '4%',
      },
      height: {
        '25%': '25%',
        '50%': '50%',
      },
      width: {
        '20%': '20%',
      },
      colors:{
        'light-gray': 'hsl(212, 45%, 89%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
      }
    },
  },
  plugins: [],
}

