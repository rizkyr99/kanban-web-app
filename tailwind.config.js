/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainPurple: '#635FC7',
        mainPurpleHover: '#A8A4FF',
        black: '#000112',
        veryDarkGrey: '#20212C',
        darkGrey: '#2B2C37',
        mediumGrey: '#828FA3',
        linesDark: '#3E3F4E',
        linesLight: '#E4EBFA',
        lightGrey: '#F4F7FD',
        red: '#EA5555',
        redHover: '#FF9898',
      },
    },
  },
  plugins: [],
};
