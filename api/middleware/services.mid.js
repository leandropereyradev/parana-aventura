const FishingZone = require("../models/fishingZone.model");
const Fish = require("../models/fish.model");
const Lodging = require("../models/lodging.model");
const createError = require("http-errors");

module.exports.fishingZoneExists = (req, res, next) => {
  FishingZone.findById(req.params.id)
    .then((zone) => {
      if (zone) {
        req.zone = zone;
        next();
      } else next(createError(404, "Fishing Zone not found"));
    })
    .catch(next);
};

module.exports.fishExists = (req, res, next) => {
  Fish.findById(req.params.id)
    .then((fish) => {
      if (fish) {
        req.fish = fish;
        next();
      } else next(createError(404, "Fish not found"));
    })
    .catch(next);
};

module.exports.lodgingExists = (req, res, next) => {
  Lodging.findById(req.params.id)
    .then((lodging) => {
      if (lodging) {
        req.lodging = lodging;
        next();
      } else next(createError(404, "Lodging not found"));
    })
    .catch(next);
};
