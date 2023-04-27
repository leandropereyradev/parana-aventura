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
        loginSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243503/parana-aventura/loginSM_ojrwml.jpg')",
        loginMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243503/parana-aventura/loginMD_izevyv.jpg')",
        loginXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243946/parana-aventura/loginXL_ga1jsk.jpg')",
        userSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/userSM_goaqhj.jpg')",
        userMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/userMD_kk9rqw.jpg')",
        userXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/userXL_gaagly.jpg')",
        fishSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/fishSM_ix9kd8.jpg')",
        fishMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/fishMD_vzy1nw.jpg')",
        fishXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/fishXL_phsuf5.jpg')",
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
