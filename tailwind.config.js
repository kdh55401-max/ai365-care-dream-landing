/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A43',
          50: '#EAF0F5',
          100: '#CFDDE8',
          400: '#3D6A8A',
          600: '#164059',
          700: '#0E2A43',
          900: '#081A2B',
        },
        teal: {
          DEFAULT: '#1E8A8A',
          50: '#E9F7F6',
          100: '#CFEEEC',
          400: '#3AA6A2',
          600: '#1E8A8A',
        },
        leaf: {
          DEFAULT: '#3FAE7A',
          100: '#D8F0E3',
          500: '#3FAE7A',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(14, 42, 67, 0.15)',
        glow: '0 20px 60px -20px rgba(30, 138, 138, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
