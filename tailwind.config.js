/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slow-pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slow-spin': 'spin 12s linear infinite',
        'reverse-slow-spin': 'reverse-spin 15s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'reverse-spin': {
          'to': {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
};