/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'small': '18px' 
      },
      height: {
        'card-h': '198px',
        'card-image-height': '148px',
      },
      width: {
        'card-w': '1280px',
        'card-image-width': '296px',
      },
      margin: {
        'card-mt': '22px',
        'card-ml': '29px',
      },
      fontFamily: {
        inter: ['Inter, sans-serif'],
        SF: ['SF Pro Display']
      },
      colors:{
        "topbar-black": "#101010",
        "nav-grey": "#D0CBCB",
        "filter-white": "#F2F2F2",
        "card-black": "#171717",
        "card-heading-grey": "#CFCFCF",
        "edvora-white": "#FFFFFF",
        "background": "#282928",
      }
    },
  },
  plugins: [],
}
