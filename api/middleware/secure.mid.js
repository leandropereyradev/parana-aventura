module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
    delete req.body.confirm;
  }

  next();
};
