
/** @type {import('tailwindcss').Config} */
// export default {
  
//   theme: {
//     extend: {
      
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Bangers', 'cursive'],
        anime: ['Noto Sans JP', 'sans-serif'],
        // Add more as needed
      },
    },
  },
  plugins: [],
};
