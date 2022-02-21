const colors = require('windicss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      green: {
        DEFAULT: '#42b883',
      },
      dark: {
        DEFAULT: '#091a28'
      },
      light: {
        DEFAULT: '#ebf4f1'
      }
    },
  },
}