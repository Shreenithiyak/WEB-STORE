/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#113527',
          light: '#184c38',
        },
        green: {
          950: '#0e291e',
          900: '#113527',
          800: '#184c38',
          700: '#1f6449',
          100: '#c1ebd4',
          50:  '#e7f1eb',
        },
        beige: {
          50: '#f7f8f8',
          100: '#f3f5f5',
          200: '#e6e9e8',
        },
        accent: {
          orange: '#f2bc94',
          orangeDark: '#8e5527',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
