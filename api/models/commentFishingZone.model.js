const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentFishingZoneSchema = new Schema(
  {
    comment: {
      type: String,
      required: "Comment text is required",
    },
    fishingZone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FishingZone",
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

const commentFishingZone = mongoose.model(
  "commentFishingZone",
  commentFishingZoneSchema
);
module.exports = commentFishingZone;
