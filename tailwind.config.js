/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js,ts}',],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideIn': 'slideIn 1.5s ease-in-out',
      }
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    adeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    slideIn: {
      '0%': { transform: 'translateY(30px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
  },

  plugins: [],
}

