const CommentLodging = require("../models/commentLodging.model");
const createError = require("http-errors");

module.exports.commentLodgingExists = (req, res, next) => {
  const commentId = req.params.commentId;

  CommentLodging.findById(commentId)
    .then((comment) => {
      if (comment) {
        req.commentLodging = comment;
        next();
      } else next(createError(404, "Comment not found"));
    })
    .catch(next);
};

module.exports.checkAuthorLodging = (req, res, next) => {
  if (
    req.user.rol === "admin" ||
    req.commentLodging.user.toString() === req.user.id.toString()
  )
    next();
  else next(createError(403, "Forbidden"));
};
