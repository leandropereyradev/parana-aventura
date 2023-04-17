require("dotenv").config();
require("../config/db.config");

const Lodging = require("../models/lodging.model");
const lodgings = [
  {
    name: "Lodging 1",
    description: "description 1",
    ubication: "ubication 1",
    image: "image 1",
    price: 30,
    fishingZone: ["643d2ec581118534e30871ff", "643d2ec581118534e3087200"],
  },
  {
    name: "Lodging 2",
    description: "description 2",
    ubication: "ubication 2",
    image: "image 2",
    price: 30,
    fishingZone: ["643d2ec581118534e3087200"],
  },
];

Lodging.deleteMany()
  .then(() => {
    Lodging.create(lodgings).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
