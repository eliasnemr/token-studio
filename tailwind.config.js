/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)',
        lightOrange: 'var(--light-orange)',
        lighterOrange: 'var(--lighter-orange)',
        lightestOrange: 'var(--lightest-orange)',
        darkOrange: 'var(--dark-orange)',
        grey: 'var(--grey)',
        grey10: 'var(--grey-10)',
        grey20: 'var(--grey-20)',
        grey25: 'var(--grey-25)',
        grey40: 'var(--grey-40)',
        grey60: 'var(--grey-60)',
        grey80: 'var(--grey-80)',
        grey100: 'var(--grey-100)',
        darkContrastFour: 'var(--dark-contrast-four)',
        darkContrast: 'var(--dark-contrast)',
        mediumDarkContrast: 'var(--medium-dark-contrast)',
        lightDarkContrast: 'var(--light-dark-contrast)',
      },
      padding: {
        '15': '60px',
        '7': '30px',
      },
    }
  },
  plugins: [],
  darkMode: 'class'
};
