/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AA8D',         // Tribe Life Green
        accent: '#FFD700',          // Gold
        accentAlt: '#FACC15',       // Alternative Gold
        headline: '#121212',        // Charcoal Black
        subline: '#FFFFFF'          // Pure White
      },
      backgroundImage: {
        'tribe-bg': "url('/images/tribelife-bg.png')"
      }
    },
  },
  plugins: [],
}
