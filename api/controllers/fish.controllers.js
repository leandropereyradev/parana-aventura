const Fish = require("../models/fish.model");

module.exports.list = (req, res, next) => {
  Fish.find()
    .then((fishes) => res.json(fishes))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Fish.findOne({ _id: req.fish.id })
    .then((lodging) => res.json(lodging))
    .catch(next);
};
