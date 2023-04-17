const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishingZoneSchema = new Schema(
  {
    name: String,
    ubication: String,
    destription: String,
    image: String,
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

fishingZoneSchema.virtual("lodgings", {
  ref: "Lodging",
  localField: "_id",
  foreignField: "fishingZone",
  justOne: false,
});

fishingZoneSchema.virtual("fish", {
  ref: "Fish",
  localField: "_id",
  foreignField: "fishingZone",
  justOne: false,
});

const FishingZone = mongoose.model("FishingZone", fishingZoneSchema);
module.exports = FishingZone;
