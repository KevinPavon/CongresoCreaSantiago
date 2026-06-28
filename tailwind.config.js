/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta cromática CongresoCreaSantiago
        sand: {
          50: '#fdfae6',
          100: '#faf6cc',
          200: '#f5f0a0',
          300: '#e8e070',
          400: '#d4c840',
          500: '#bfad28',
        },
        terracotta: {
          300: '#FFB07C',
          400: '#FF9550',
          500: '#FF7C2C',
          600: '#E06520',
          700: '#C05010',
        },
        forest: {
          400: '#679352',
          500: '#4a7d3a',
          600: '#336C2F',
          700: '#285524',
          800: '#1e401b',
        },
        ink: {
          700: '#5a5a5a',
          900: '#434343',
        },
        cream: '#fbf5b1',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'topo': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cg fill='none' stroke='%23FF7C2C' stroke-opacity='0.08' stroke-width='1'%3E%3Cpath d='M0 300 Q150 220 300 300 T600 300'/%3E%3Cpath d='M0 340 Q150 260 300 340 T600 340'/%3E%3Cpath d='M0 380 Q150 300 300 380 T600 380'/%3E%3Cpath d='M0 260 Q150 180 300 260 T600 260'/%3E%3Cpath d='M0 220 Q150 140 300 220 T600 220'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
