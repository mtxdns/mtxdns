/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { },
    backgroundColor: theme => ({
      'primary': '#F7FFF7',
      'secondary': '#4ECDC4',
      'third': '#FFC857',
      'heading': '#FF6F61',
      'accent': '#6A0572',
    }),
    textColor: theme => ({
      'primary': '#F7FFF7',
      'secondary': '#4ECDC4',
      'third': '#FFC857',
      'heading': '#FF6F61',
      'accent': '#6A0572',
    }),
  },
  plugins: [require('@tailwindcss/typography')],
}