
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp2: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
         slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },



         zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
         tada: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
          '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInUp: 'fadeInUp 2s ease-in-out',
        fadeInUp2: 'fadeInUp 1s ease-in-out',

        fadeInDown: 'fadeInDown 1s ease-in-out',
        slideInLeft: 'slideInLeft 2s ease-in-out',
        slideInRight: 'slideInRight 2s ease-in-out',         
        slideInUp: 'slideInUp 2s ease-out',
        slideInDown: 'slideInDown 2s ease-out',

        zoomIn: 'zoomIn 1s ease-in-out',
        tada: 'tada 1s ease-in-out',


      },




     
    },
  },
  plugins: [],
};
