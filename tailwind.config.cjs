/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bluewood: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dce6',
          300: '#a9bdd0',
          400: '#7a99b6',
          500: '#5a7d9d',
          600: '#466483',
          700: '#3a516a',
          800: '#35495e',
          900: '#2e3c4c',
        },
        ogreen: {
          50: '#eefbf4',
          100: '#d6f5e2',
          200: '#b1e9ca',
          300: '#7ed7ac',
          400: '#42b883',
          500: '#27a26f',
          600: '#188359',
          700: '#136949',
          800: '#12533c',
          900: '#104432',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
