const CommentFishingZone = require("../models/commentFishingZone.model");
const createError = require("http-errors");

module.exports.commentFishingZoneExists = (req, res, next) => {
  const commentId = req.params.commentId;

  CommentFishingZone.findById(commentId)
    .then((comment) => {
      if (comment) {
        req.commentFishingZone = comment;
        next();
      } else next(createError(404, "Comment not found"));
    })
    .catch(next);
};

module.exports.checkAuthorFishingZone = (req, res, next) => {
  if (
    req.user.rol === "admin" ||
    req.commentFishingZone.user.toString() === req.user.id.toString()
  )
    next();
  else next(createError(403, "Forbidden"));
};
