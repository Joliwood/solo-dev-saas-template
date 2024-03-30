/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#af373b',
          secondary: '#ef4444',
          accent: '#f97316',
          neutral: '#1c1917',
          'base-100': '#111110',
          'base-200': '#1d1d1bb3',
          info: '#93c5fd',
          success: '#22c55e',
          warning: '#facc15',
          error: '#dc2626',

          '--rounded-box': '0.7rem',
          '--padding-card': '1.5rem',
          '--max-height-buton': '5rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
    ],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};