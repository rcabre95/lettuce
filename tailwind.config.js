/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-wood':  "url('/white-wood.webp')",
        'dark-wood': "url('/Aba-wood-1.webp')",
        'plates': "url('/up-47.webp')"
      },
      fontFamily: {
        "playfair-display": ['"Playfair Display"', 'serif'],
        "montserrat": ["Montserrat", 'sans-serif']
      },
      colors: {
        lettuce: {
          cream: "#FEFBEA",
          blue: "#102c44"
        }
      },
      scale: {
        '200': '2',
        '250': '2.5'
      },
      height: {
        '128': '32rem'
      },
      minHeight: {
        '96': '24rem',
        '38': '9.5rem'
      }
    },
  },
  plugins: [],
}

