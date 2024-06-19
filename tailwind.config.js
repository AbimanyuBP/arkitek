/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        awooga: {
          '0%': { width: '20%'},
          '100%': { width: '100%'},
        },
        growabit: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.01)'}
        },
        rightfade: {
          '100%':{
            transform: 'translate(30px,0)',
            opacity: '0'
          }
        }
      },
      animation:{
        'awooga': 'awooga 0.5s',
        'growabit': 'growabit ease-in-out 3s infinite',
        'rightfade': 'rightfade ease-in-out 2s infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

