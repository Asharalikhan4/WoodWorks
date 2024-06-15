/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "8rem",
    },
    extend: {
      spacing: {
        height: {
          '128': '36rem',
        },
      },
      fontFamily: {
        OpenSans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};

