module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#FF6363",
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        plaster:'#e0ccba',
        dessert:'#edc9af',
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
