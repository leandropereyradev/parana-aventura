require("dotenv").config();
require("../config/db.config");

const Fish = require("../models/fish.model");
const fishes = [
  {
    name: "Fish 1",
    description: "description 1",
    image: "image 1",
    fishingZone: ["643d2ec581118534e30871ff", "643d2ec581118534e3087200"],
  },
  {
    name: "Fish 2",
    description: "description 2",
    ubication: "ubication 2",
    image: "image 2",
    fishingZone: ["643d2ec581118534e3087200"],
  },
];

Fish.deleteMany()
  .then(() => {
    Fish.create(fishes).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
