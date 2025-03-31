// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '0 4px 6px rgba(0, 0, 0, 0.5)',
        glow: '0 0 10px #6BA3FF, 0 0 20px #6BA3FF, 0 0 30px #6BA3FF',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
