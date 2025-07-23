/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366',
        'brand-blue-dark': '#002244',
        'brand-yellow': '#FFD700',
        'brand-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
}
