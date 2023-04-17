const Comment = require("../models/comment.model");
const createError = require("http-errors");

module.exports.commentExists = (req, res, next) => {
  const commentId = req.params.commentId;

  Comment.findById(commentId)
    .then((comment) => {
      if (comment) {
        req.comment = comment;
        next();
      } else next(createError(404, "Comment not found"));
    })
    .catch(next);
};

module.exports.checkAuthor = (req, res, next) => {
  if (req.comment.user.toString() !== req.user.id.toString())
    next(createError(403, "Forbidden"));
  else next();
};
