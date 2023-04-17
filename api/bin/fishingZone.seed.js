require("dotenv").config();
require("../config/db.config");

const FishingZone = require("../models/fishingZone.model");
const fishingZones = [
  {
    name: "FishingZone 1",
    description: "description 1",
    ubication: "ubication 1",
    image: "image 1",
  },
  {
    name: "FishingZone 2",
    description: "description 2",
    ubication: "ubication 2",
    image: "image 2",
  },
];

FishingZone.deleteMany()
  .then(() => {
    FishingZone.create(fishingZones).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
