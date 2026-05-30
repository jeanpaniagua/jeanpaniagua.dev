import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          surface: '#111111',
        },
        border: {
          DEFAULT: '#1f1f1f',
          strong: '#2a2a2a',
        },
        fg: {
          DEFAULT: '#e5e7eb',
          muted: '#9ca3af',
        },
        accent: {
          DEFAULT: '#06b6d4',
          soft: '#06b6d420',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
      keyframes: {
        'orb-drift-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        'orb-drift-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(0.95)' },
          '66%': { transform: 'translate(25px, -20px) scale(1.04)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'orb-drift-1': 'orb-drift-1 18s ease-in-out infinite',
        'orb-drift-2': 'orb-drift-2 22s ease-in-out infinite',
        'fade-up':     'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
