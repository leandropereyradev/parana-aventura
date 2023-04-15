const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishingZoneSchema = new Schema(
  {
    name: String,
    ubication: String,
    destription: String,
    image: String,
    fishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fish",
      },
    ],
    lodging: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lodging",
      },
    ],
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

const FishingZone = mongoose.model("FishingZone", fishingZoneSchema);
module.exports = FishingZone;
