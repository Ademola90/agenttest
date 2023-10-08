/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCol: '#F6673A',
        TFramcol: '#FEEFEA',
        bnbcol: '#2F75FD',
        startTodayCol: '#F6673A',
        footercol: '#FEEFEA',
        btncol: '#AB1882',
        textcol: "#480632",
        homefiveLine: "#940E46",
        homeSixCol: "#FEB238",
        homeSixBgCol: "#F8F3ED",
        homeSixTestiCol: "#222431",
        footerbtncol: "#FEB238",
        homesevenred: "#FA0B2F",
        homesevenbtn: "#C2283F",
        hseventestimonial: "#222431",
        hsevenfooter: " #0B0B0B",
        heightcpl: " #03081B",
        heightbtn: " #2F75FD",
        hninecol: "#FDAA0B",
        hninecoll: "#FDF1FF",
        hninetest: "#A15AC7",
        hninefooter: "#230428",
        hninetoggle: "#280A25",
      },
      fontFamily: {
        'KoHo': ['KoHo', "sans-serif"],
        'Inter': ['Inter', "sans-serif"]
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },



    },
  },
  plugins: [],
}
