module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-hexagons': "url('/images/hexagons.svg')",
        'top-header-background': "url('/images/dm-icons/top-background.svg')"
      },
      colors: {
        sptheme: {
          lightgreen: "#018082",
          darkgreen: "#035159",
        }
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
