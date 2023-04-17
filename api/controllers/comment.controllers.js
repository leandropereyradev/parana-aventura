const Comment = require("../models/comment.model");

module.exports.create = (req, res, next) => {
  Comment.create({
    comment: req.body.comment,
    fishingZone: req.params.id,
    user: req.user.id,
  })
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const comment = {
    comment: req.body.comment,
    fishingZone: req.params.id,
    user: req.user.id,
  };
  Object.assign(req.comment, comment);

  req.comment
    .save()
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Comment.deleteOne({ _id: req.comment.id })
    .then(() => res.status(204).send())
    .catch(next);
};
