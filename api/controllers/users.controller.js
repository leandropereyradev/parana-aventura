const { sendConfirmationEmail } = require("../config/mailer.config");
const User = require("../models/user.model");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports.register = (req, res, next) => {
  if (req.file) req.body.image = req.file.path;

  User.create(req.body)
    .then((user) => {
      // sendConfirmationEmail(user);
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

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
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
  User.deleteOne({ _id: req.user.id })
    .then((user) => res.status(204).send())
    .catch(next);
};

module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) return next(createError(401, "Invalid email or password"));

      if (!user.confirm)
        return next(createError(401, "Please confirm your account"));

      user.checkPassword(req.body.password).then((passwordConfirmated) => {
        if (!passwordConfirmated)
          return next(createError(401, "Invalid email or password"));

        const token = jwt.sign(
          { sub: user.id, exp: Date.now() / 1000 + 3600 },
          process.env.JWT_SECRET
        );

        res.json({ ...user.toJSON(), token });
      });
    })
    .catch(next);
};
