/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/styles.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "hsl(257, 40%, 49%)",
          softMagenta: "hsl(300, 69%, 71%)"
        }
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        openSans: "var(--font-open-sans)"
      },
      backgroundImage: {
        'mobile': "url('/images/bg-mobile.svg')",
        'desktop': "url('/images/bg-desktop.svg')",
      }
    },
  },
  plugins: [],
}
