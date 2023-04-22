const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
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
