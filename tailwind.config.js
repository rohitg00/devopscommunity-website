/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D6A',
        secondary: '#FF8547',
        background: '#FFF5F7',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      lineClamp: {
        3: '3',
      },
    },
  },
  plugins: [],
};