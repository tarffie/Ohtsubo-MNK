/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': {
          DEFAULT: '#f2f5f7',
          100: '#25333d',
          200: '#4a6779',
          300: '#7998ad',
          400: '#b6c7d2',
          500: '#f2f5f7',
          600: '#f5f7f9',
          700: '#f7f9fa',
          800: '#fafbfc',
          900: '#fcfdfd'
        },
        'powder-blue': {
          DEFAULT: '#9cb1c4',
          100: '#1a232c',
          200: '#354758',
          300: '#4f6a84',
          400: '#708ea9',
          500: '#9cb1c4',
          600: '#b0c0d0',
          700: '#c4d0db',
          800: '#d7e0e7',
          900: '#ebeff3'
        },
        'charcoal': {
          DEFAULT: '#2d4654',
          100: '#090e11',
          200: '#121c21',
          300: '#1b2932',
          400: '#243742',
          500: '#2d4654',
          600: '#476e85',
          700: '#6a95af',
          800: '#9cb9c9',
          900: '#cddce4'
        },
        'marian-blue': {
          DEFAULT: '#004087',
          100: '#000c1b',
          200: '#001935',
          300: '#002550',
          400: '#00326a',
          500: '#004087',
          600: '#0061d0',
          700: '#1d86ff',
          800: '#68aeff',
          900: '#b4d7ff'
        }, 'tea-green': {
          DEFAULT: '#c5edac',
          100: '#23430f',
          200: '#45861d',
          300: '#68c92c',
          400: '#95de68',
          500: '#c5edac',
          600: '#d0f0bc',
          700: '#dcf4cd',
          800: '#e8f8de',
          900: '#f3fbee'
        },
        'black': {
          DEFAULT: '#010400',
          100: '#000100',
          200: '#010200',
          300: '#010300',
          400: '#010400',
          500: '#010400',
          600: '#1b6a00',
          700: '#34cf00',
          800: '#68ff35',
          900: '#b3ff9a'
        },
      },
    },
  },
  extend: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    gridTemplateColumns: {
      '70/30': '70% 28%'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    }
  },
  plugins: [],
}
