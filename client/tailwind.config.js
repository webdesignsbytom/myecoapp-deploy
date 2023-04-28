/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'green-bg': "url('../assets/img/myea/green-bg1.png')",
      },
      colors: {
        'main-colour': '#4AAD37',
        'nav-colour': '#4AAD37',
        'footer-colour': '#1F2937',
        'colour-pale': '#99DF8A',
        'colour-light': '#6DC85A',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'dark-text': '#FFFFFF',
        'alt-text': '#000000',
        'dark-alt-text': '#FFFFFF',
        'hover-text': '#94A3B8',
        'dark-hover-text': '#94A3B8',
        'active-text': '#6B7280',
        'dark-active-text': '#6B7280',
        'placeholder-text': 'rgb(55 65 81)',
        'dark-placeholder-text': 'rgb(55 65 81)',
        'main-border': '#000000',
        'dark-border': '#FFFFFF',
        'error-red': '#',
        'success-green': '#',
        'hyperlink-blue': '#2563EB',
        selected: '#2563EB',
        'dark-selected': '#2563EB',
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'special': 'auto 1fr 0.5fr',
        'ls': '1fr 0.4fr',
        'a1a': 'auto 1fr auto',
        '1a1': '1fr auto 1fr',
        'aa': 'auto auto',
        '3x': '3fr 1fr',
        '4x': '4fr 1fr',
        'item': '50px 1fr',
        'ten-one': '10fr 1fr',
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'xo': '1fr 0.6fr',
        'a1a': 'auto 1fr auto',
        '1a1': '1fr auto 1fr',
        'aa': 'auto auto',
        '3x': '3fr 1fr',
        '2x': '2fr 1fr',
      },
    },
  },
  plugins: [],
};
