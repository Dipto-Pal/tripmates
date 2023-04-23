/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B4DB",
        secondary: "#0083B0",
      },
      boxShadow: {
        '3xl': '3px 7px 10px 4px rgba(0, 0, 0, 0.25)',
        'review': '2px 6px 10px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    fontFamily: {
      text: ["Poppins", "sans-serif"],
      heading: ["ClashDisplay-Variable", "sans-serif"],
    },
    screens: {
      xs: "411px",
      sm: "540px",
      smd: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
  },
  plugins: [],
}