/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0c10",
        primary: "#66fcf1",
        accent: "#1f2833",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}