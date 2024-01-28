/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url(./assets/home/background-home-desktop.jpg)",
        "home-tablet": "url(./assets/home/background-home-tablet.jpg)",
        "home-mobile": "url(./assets/home/background-home-mobile.jpg)",
      },
      fontFamily:{
        "primary":"Barlow Condensed, sans-serif",
        "secondary":"Bellefair, serif",
        "para":"Barlow, sans-serif"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'main': '50% 50%'

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
    screens: {
      "mobile-M": "320px",
      "mobile-l": "375px",
     "tablet": "425px",
    "laptop": "768px",
      "laptop-l": "1024px"
    //   // 'sm': '640px',
    //   // // => @media (min-width: 640px) { ... }

    //   // 'md': '768px',
    //   // // => @media (min-width: 768px) { ... }

    //   // 'lg': '1024px',
    //   // // => @media (min-width: 1024px) { ... }

    //   // 'xl': '1280px',
    //   // // => @media (min-width: 1280px) { ... }

    //   // '2xl': '1536px',
    //   // // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
