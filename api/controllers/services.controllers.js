const Lodging = require("../models/lodging.model");
const Fish = require("../models/fish.model");
const FishingZone = require("../models/fishingZone.model");

// Lodging
module.exports.lodgingList = (req, res, next) => {
  Lodging.find()
    .then((lodgings) => res.json(lodgings))
    .catch(next);
};

module.exports.lodgingDetail = (req, res, next) => {};

// Fishing Zone
module.exports.fishingZoneList = (req, res, next) => {
  FishingZone.find()
    .populate("lodgings")
    .populate("fish")
    .then((zones) => res.json(zones))
    .catch(next);
};
module.exports.fishingZoneDetail = (req, res, next) => {};

// Fishes
module.exports.fishesList = (req, res, next) => {
  Fish.find()
    .then((fishes) => res.json(fishes))
    .catch(next);
};
module.exports.fishesDetail = (req, res, next) => {};
