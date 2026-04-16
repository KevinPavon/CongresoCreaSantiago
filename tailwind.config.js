/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta "Chaco Santiagueño": tierra, quebracho, algarrobo, crema
        sand: {
          50: '#fbf7ee',
          100: '#f5ecd4',
          200: '#ecdcae',
          300: '#dec27c',
          400: '#cfa857',
          500: '#b88a3d',
        },
        terracotta: {
          300: '#e29775',
          400: '#d27a55',
          500: '#b85a36',
          600: '#9a4628',
          700: '#7a341d',
        },
        forest: {
          400: '#5c8a5a',
          500: '#3e6b3e',
          600: '#2d5130',
          700: '#1f3c22',
          800: '#132616',
        },
        ink: {
          700: '#3a2a1f',
          900: '#1c130d',
        },
        cream: '#faf4e6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'topo': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cg fill='none' stroke='%23b85a36' stroke-opacity='0.08' stroke-width='1'%3E%3Cpath d='M0 300 Q150 220 300 300 T600 300'/%3E%3Cpath d='M0 340 Q150 260 300 340 T600 340'/%3E%3Cpath d='M0 380 Q150 300 300 380 T600 380'/%3E%3Cpath d='M0 260 Q150 180 300 260 T600 260'/%3E%3Cpath d='M0 220 Q150 140 300 220 T600 220'/%3E%3C/g%3E%3C/svg%3E\")",
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
