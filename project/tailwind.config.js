/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        purple: {
          400: '#A855F7',
          500: '#9333EA',
          600: '#7C3AED',
        },
        pink: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'gradient': 'gradient-shift 3s ease infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 30px rgba(168, 85, 247, 0.5)',
      }
    },
  },
  plugins: [],
};