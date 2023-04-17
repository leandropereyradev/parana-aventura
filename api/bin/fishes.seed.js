require("dotenv").config();
require("../config/db.config");

const Fish = require("../models/fish.model");
const fishes = [
  {
    name: "Fish 1",
    description: "description 1",
    image: "image 1",
    fishingZone: ["643d9d5ffb06047aa5b360a6", "643d9d5ffb06047aa5b360a7"],
  },
  {
    name: "Fish 2",
    description: "description 2",
    ubication: "ubication 2",
    image: "image 2",
    fishingZone: ["643d9d5ffb06047aa5b360a7"],
  },
];

Fish.deleteMany()
  .then(() => {
    Fish.create(fishes).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
