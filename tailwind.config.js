/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans JP', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        light: 'var(--color-light)',
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        gray: {
          400: '#777777',
        },
        customBorder: '#707070'
      },
      dropShadow:{
        shine:'0px 0px 6px #FC7400'
      },
      backgroundImage: {
        primary: 'linear-gradient(to right, #FFCC21 0%, #FF963C 100%)',
        'primary-2': 'linear-gradient(32.95deg, #FF963C 8.75%, #FFCC21 86.64%)',
      },
    },
  },
  plugins: [],
};
