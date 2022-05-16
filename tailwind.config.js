module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'soft-purple': '#5638cf',
        'mad-black': '#0a0a0a',
        'soft-red': '#ff1c51',
        'dark-red': '#d40031',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}