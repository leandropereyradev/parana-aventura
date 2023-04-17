const Lodging = require("../models/lodging.model");

module.exports.list = (req, res, next) => {
  Lodging.find()
    .then((lodgings) => res.json(lodgings))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Lodging.findOne({ _id: req.lodging.id })
    .then((lodging) => res.json(lodging))
    .catch(next);
};
