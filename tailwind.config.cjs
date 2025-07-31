/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/aos/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

