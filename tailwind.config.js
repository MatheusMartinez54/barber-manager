export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#121212',
          800: '#1b1b1b',
          700: '#2a2a2a',
          600: '#393939',
          500: '#4a4a4a',
          danger: '#D62828',
        },
      },
      boxShadow: {
        soft: '0 24px 60px rgba(0, 0, 0, 0.16)',
        softDark: '0 18px 48px rgba(0, 0, 0, 0.24)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
