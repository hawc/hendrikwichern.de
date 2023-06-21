/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'content': 'var(--content)',
        'primary1': '#06e386',
      },
      fontSize: {
        '5xl': '4rem',
        '6xl': '8rem',
        '7xl': '12rem',
        'text-base': '1.5rem',
      }
    },
  },
  plugins: [],
}
