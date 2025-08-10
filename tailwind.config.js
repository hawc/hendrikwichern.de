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
      },
      fontSize: {
        '2xl': '1.25rem',
        '3xl': '2rem',
        '5xl': '4.2rem',
        '6xl': '8rem',
        '7xl': '12rem',
        'text-base': '1.5rem',
      },
      gridTemplateColumns: {
        '1-3': '33% auto',
      },
      gap: {
        '2px': '2px',
      },
      margin: {
        '-2px': '-2px',
      },
      borderWidth: {
        '2px': '2px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.break-before-page': {
            'break-before': 'page',
            'page-break-before': 'always',
          },
          '.break-after-page': {
            'break-after': 'page',
            'page-break-after': 'always',
          },
        },
        ['print'] // enables usage like print:break-before-page
      )
    },
  ],
}
