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
    fishingZone: ["643ee7a0801b8665cebe46d7", "643ee7a0801b8665cebe46d8"],
  },
  {
    name: "Lodging 2",
    description: "description 2",
    ubication: "ubication 2",
    image: ["image 2"],
    price: 30,
    services: ["breakfast", "dock", "spa"],
    status: false,
    fishingZone: ["643ee7a0801b8665cebe46d7"],
  },
];

Lodging.deleteMany()
  .then(() => {
    Lodging.create(lodgings).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
