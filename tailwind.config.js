// tailwind.config.js
module.exports = {
  darkMode: 'class', // enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};
