const CommentLodging = require("../models/commentLodging.model");

module.exports.create = (req, res, next) => {
  CommentLodging.create({
    comment: req.body.comment,
    lodging: req.params.id,
    user: req.user.id,
  })
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const comment = {
    comment: req.body.comment,
    lodging: req.params.id,
    user: req.user.id,
  };
  Object.assign(req.commentLodging, comment);

  req.commentLodging
    .save()
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  CommentLodging.deleteOne({ _id: req.commentLodging.id })
    .then(() => res.status(204).send())
    .catch(next);
};
