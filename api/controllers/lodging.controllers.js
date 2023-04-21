const Lodging = require("../models/lodging.model");

module.exports.list = (req, res, next) => {
  Lodging.find()
    .populate("commentsLodging")
    .then((lodgings) => res.json(lodgings))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Lodging.findOne({ _id: req.lodging.id })
    .populate("commentsLodging")
    .then((lodging) => res.json(lodging))
    .catch(next);
};

module.exports.rating = (req, res, next) => {
  const lodgingRating = req.lodging.rating;
  const userRating = req.body.rating;
  const average = (
    (lodgingRating + userRating) /
    (lodgingRating === 0 ? 1 : 2)
  ).toFixed(2);

  req.body.rating = average;

  Object.assign(req.lodging, req.body);

  req.lodging
    .save()
    .then((lodging) => res.json(lodging))
    .catch(next);
};
