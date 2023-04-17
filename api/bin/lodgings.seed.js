require("dotenv").config();
require("../config/db.config");

const Lodging = require("../models/lodging.model");
const lodgings = [
  {
    name: "Lodging 1",
    description: "description 1",
    ubication: "ubication 1",
    image: ["image 1"],
    price: 30,
    services: ["breakfast", "pool", "spa"],
    status: true,
    fishingZone: ["643d9d5ffb06047aa5b360a6", "643d9d5ffb06047aa5b360a7"],
  },
  {
    name: "Lodging 2",
    description: "description 2",
    ubication: "ubication 2",
    image: ["image 2"],
    price: 30,
    services: ["breakfast", "dock", "spa"],
    status: false,
    fishingZone: ["643d9d5ffb06047aa5b360a6"],
  },
];

Lodging.deleteMany()
  .then(() => {
    Lodging.create(lodgings).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
