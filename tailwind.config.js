/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00288F', // Definisikan warna kustom
        secondaryBlue: '#50CAF0',
      },
    },
  },
  plugins: [],
};
