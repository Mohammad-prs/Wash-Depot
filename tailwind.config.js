/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // 👈 now your entire site uses Poppins
      },
      colors: {
        brandBlue: "#0074D9", // your logo blue
      },
    },
  },
  plugins: [],
}
