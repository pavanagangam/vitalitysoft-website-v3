/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#060913',
          card: '#0d1326',
          light: '#131b36',
        },
        parchment: {
          DEFAULT: '#f3f4f6',
          muted: '#9ca3af',
        },
        terracotta: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
          glow: '#4f46e5',
        },
        cyber: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#a855f7',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        serif: ['Bodoni Moda', 'Playfair Display', 'Georgia', 'serif'],
        script: ['Petit Formal Script', 'Dancing Script', 'cursive'],
        sans: ['Urbanist', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
