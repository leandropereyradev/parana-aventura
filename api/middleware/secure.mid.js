const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
    delete req.body.confirm;
  }

  next();
};

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) next(createError(401, "Missing access token"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else next(createError(401, "User not found"));
      })
      .catch(next);
  } catch (err) {
    next(createError(401, "Invalid token"));
  }
};

module.exports.isAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) next(createError(401, "Missing access token"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          if (user.rol === "admin") {
            req.user = user;
            next();
          } else
            next(
              createError(403, "You do not have permissions for this resource")
            );
        } else next(createError(401, "User not found"));
      })
      .catch(next);
  } catch (err) {
    next(createError(401, "Invalid token"));
  }
};
