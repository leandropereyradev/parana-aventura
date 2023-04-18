const FishingZone = require("../models/fishingZone.model");

module.exports.list = (req, res, next) => {
  FishingZone.find()
    .populate("lodgings fish commentFishingZones")
    .then((zones) => res.json(zones))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  FishingZone.findOne({ _id: req.zone.id })
    .populate("lodgings fish commentFishingZones")
    .then((lodging) => res.json(lodging))
    .catch(next);
};

module.exports.rating = (req, res, next) => {
  const zoneRating = req.zone.rating;
  const userRating = req.body.rating;
  const average = (
    (zoneRating + userRating) /
    (zoneRating === 0 ? 1 : 2)
  ).toFixed(2);

  req.body.rating = average;

  Object.assign(req.zone, req.body);

  req.zone
    .save()
    .then((user) => res.json(user))
    .catch(next);
};
