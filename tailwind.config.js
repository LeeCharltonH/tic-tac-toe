module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 0px 0px 30px 3px rgba(23,190,187,0.3)',
        outset: '0px 0px 30px 3px rgba(23,190,187,0.3)'
      }
    },
    colors: {
      black: '#010101',
      'light-grey': '#e4e4e4',
      'dark-purple': '#4b1d3f',
      red: '#d62246',
      'light-green': '#d4f4dd',
      cyan: '#17bebb',
      'dark-cyan': '#0e7c7b',
      white: '#fff'
    }
  },
  plugins: []
};
