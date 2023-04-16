const { sendConfirmationEmail } = require("../config/mailer.config");
const Users = require("../models/user.model");

module.exports.register = (req, res, next) => {
  Users.create(req.body)
    .then((user) => {
      sendConfirmationEmail(user);
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.confirm = (req, res, next) => {
  req.user.confirm = true;
  req.user
    .save()
    .then((user) => res.redirect(`${process.env.WEB_URL}/login`))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.user);

module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Users.deleteOne({ _id: req.user.id })
    .then((user) => res.status(204).send())
    .catch(next);
};
