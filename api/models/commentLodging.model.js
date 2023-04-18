const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentLodgingSchema = new Schema(
  {
    comment: {
      type: String,
      required: "Comment text is required",
    },
    lodging: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lodging",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;

        return ret;
      },
    },
  }
);

const commentLodging = mongoose.model("commentLodging", commentLodgingSchema);
module.exports = commentLodging;
