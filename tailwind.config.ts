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
    },
  },
  plugins: [],
}
