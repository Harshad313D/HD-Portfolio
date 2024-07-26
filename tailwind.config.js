
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
      backgroundImage: {
        'about-bg': "url('src/assets/about-bg.jpg')", // Path to your image
      },
       backgroundImage: {
        'pslick': "url('src/assets/pslick.jpg')",
      },
     
    },
  },
  plugins: [],
};
