const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
      gridTemplateColumns: {
        "80-20": "80% 20%",
      },
      backgroundImage: {
        registerSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/background/registerSM_tlv1cg.jpg')",
        registerMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/background/registerMD_zzkpef.jpg')",
        registerXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682203709/parana-aventura/background/registerXL_eh4elo.jpg')",
        loginSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243503/parana-aventura/background/loginSM_ojrwml.jpg')",
        loginMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243503/parana-aventura/background/loginMD_izevyv.jpg')",
        loginXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682243946/parana-aventura/background/loginXL_ga1jsk.jpg')",
        userSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/background/userSM_goaqhj.jpg')",
        userMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/background/userMD_kk9rqw.jpg')",
        userXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682251058/parana-aventura/background/userXL_gaagly.jpg')",
        fishSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/background/fishSM_ix9kd8.jpg')",
        fishMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/background/fishMD_vzy1nw.jpg')",
        fishXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682520476/parana-aventura/background/fishXL_phsuf5.jpg')",
        fishDetailSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682605218/parana-aventura/background/fish_detailSM_zogobt.jpg')",
        fishDetailMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682605218/parana-aventura/background/fish_detailMD_flahrn.jpg')",
        fishDetailXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682605218/parana-aventura/background/fish_detailXL_ouqohh.jpg')",
        lodgingsSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682680090/parana-aventura/background/lodgingsSM_rnydt9.jpg')",
        lodgingsMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682680091/parana-aventura/background/lodgingsMD_dnxslm.jpg')",
        lodgingsXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682680091/parana-aventura/background/lodgingsXL_um6xjk.jpg')",
        lodgingSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682856260/parana-aventura/background/lodginSM_hivuyo.jpg')",
        lodgingMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682856260/parana-aventura/background/lodgingMD_rcjtst.jpg')",
        lodgingXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1682856260/parana-aventura/background/lodgingXL_f3gaba.jpg')",
        homeSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683201035/parana-aventura/background/homeSM_ywvry8.jpg')",
        homeMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683201035/parana-aventura/background/homeMD_efv31n.jpg')",
        homeXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683201036/parana-aventura/background/homeXL_pjd0hl.jpg')",
        bannerZoneSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683202408/parana-aventura/background/bannerZonaSM_kcn5ka.jpg')",
        bannerZoneMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683202408/parana-aventura/background/bannerZonaMD_vscpre.jpg')",
        bannerZoneXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683202408/parana-aventura/background/bannerZonaXL_tsj24h.jpg')",
        bannerTurismoSM:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683204782/parana-aventura/background/bannerTurismoSM_kx8clz.jpg')",
        bannerTurismoMD:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683204782/parana-aventura/background/bannerTurismoMD_eatopb.jpg')",
        bannerTurismoXL:
          "url('https://res.cloudinary.com/dbr9eypvg/image/upload/v1683204782/parana-aventura/background/bannerTurismoXL_lmtkft.jpg')",
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
