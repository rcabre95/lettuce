/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-wood':  "url('./src/assets/white-wood.jpeg')",
        'dark-wood': "url('./src/assets/Aba-wood-1.jpg')",
        'plates': "url('./src/assets/up-47.jpg')"
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
      }
    },
  },
  plugins: [],
}

