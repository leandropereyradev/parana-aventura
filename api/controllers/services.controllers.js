const Lodging = require("../models/lodging.model");
const Fish = require("../models/fish.model");
const FishingZone = require("../models/fishingZone.model");

// Lodging
module.exports.lodgingList = (req, res, next) => {
  Lodging.find({ status: true })
    .then((lodgings) => res.json(lodgings))
    .catch(next);
};

module.exports.lodgingDetail = (req, res, next) => {
  Lodging.findOne({ _id: req.lodging.id })
    .then((lodging) => res.json(lodging))
    .catch(next);
};

// Fishing Zone
module.exports.fishingZoneList = (req, res, next) => {
  FishingZone.find({ status: true })
    .populate({ path: "lodgings", match: { status: true } })
    .populate("fish")
    .then((zones) => res.json(zones))
    .catch(next);
};

module.exports.fishingZoneDetail = (req, res, next) => {
  FishingZone.findOne({ _id: req.zone.id })
    .populate("lodgings")
    .populate("fish")
    .then((lodging) => res.json(lodging))
    .catch(next);
};

// Fishes
module.exports.fishesList = (req, res, next) => {
  Fish.find()
    .then((fishes) => res.json(fishes))
    .catch(next);
};

module.exports.fishesDetail = (req, res, next) => {
  Fish.findOne({ _id: req.fish.id })
    .then((lodging) => res.json(lodging))
    .catch(next);
};
