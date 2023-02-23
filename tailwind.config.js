/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
