/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter: ['Inter'],
        Raleway: ['Raleway'],
        GloriaHallelujah: ['Gloria Hallelujah']
      },
      colors: {
        "zinc-850": "#292828",
        "stone-550": "#696969",
        "neutral-450": "#959595" 
      }
    },
  },
  plugins: [],
}

