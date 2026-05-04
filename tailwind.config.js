/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { mont: ['Montserrat', 'sans-serif'] },
      colors: {
        bg: '#0a0a0f',
        bg2: '#111118',
        bg3: '#1a1a24',
        accent: '#7c3aed',
        accent2: '#a855f7',
        accent3: '#c084fc',
      },
      borderRadius: { iphone: '24px', 'iphone-sm': '16px', 'iphone-xs': '12px' },
    },
  },
  plugins: [],
}

