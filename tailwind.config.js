/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040B14',
          900: '#07111F', // Primary dark background from prompt
          850: '#0B172B',
          800: '#0F213A',
          700: '#162C4E',
          600: '#1F3C68',
        },
        cisco: {
          50: '#EFF8FF',
          100: '#DBEFFF',
          200: '#BFE3FF',
          300: '#93D1FF',
          400: '#60B7FF',
          500: '#008CFF', // Primary Cisco bright blue accent from prompt
          600: '#0070D1',
          700: '#0054A3',
          800: '#003A75',
          900: '#00254D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 140, 255, 0.2)',
        'glow-md': '0 0 25px rgba(0, 140, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(0, 140, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
