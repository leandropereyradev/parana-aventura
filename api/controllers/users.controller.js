const Users = require("../models/user.model");
const createError = require("http-errors");

module.exports.register = (req, res, next) => {
  Users.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      if (!user) next(createError(404, "User not found"));
      else res.json(user);
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((user) => {
      if (!user) next(createError(404, "User not found"));
      else res.json(user);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Users.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) next(createError(404, "User not found"));
      else res.status(204).send();
    })
    .catch(next);
};
