/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rd: {
          primary: '#00988F',
          highlight: '#00988F',
          background: '#F4F5F7',
          text: 'red',
        },
      },
    },
  },
  plugins: [],
};
