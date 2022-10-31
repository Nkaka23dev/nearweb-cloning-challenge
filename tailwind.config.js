/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "paragraph":'#676767',
        "header":'#3f4246' 
      },
      fontFamily: {
        medium: ["Graphic-medium"],
        regular: ["Graphic-regular"],
      },
    },
  },
  plugins: [],
}
