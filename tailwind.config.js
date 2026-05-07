/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { mont: ['Montserrat', 'sans-serif'] },
      colors: {
        bg: '#000000',
        bg2: '#0a0a0a',
        bg3: '#121212',
        accent: '#2a2a2a',
        accent2: '#555555',
        accent3: '#b3b3b3',
        'text-muted': '#888888',
      },
      borderRadius: { iphone: '24px', 'iphone-sm': '16px', 'iphone-xs': '12px' },
    },
  },
  plugins: [],
}

