const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
      backgroundImage: {
        registerSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/registerSM_tlv1cg.jpg')",
        registerMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/registerMD_zzkpef.jpg')",
        registerXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/registerXL_eh4elo.jpg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      azulProfundo: "#13294B",
      oliva: "#556B2F",
      esmeralda: "#00796B",
      beige: "#ECE5D5",
      marron: "#8D6E63",
      dorado: "#EFB814",
      celeste: "#5FB5C4",
    },
  },
  plugins: [],
});
