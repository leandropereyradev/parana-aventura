const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lodgingSchema = new Schema(
  {
    name: String,
    destription: String,
    ubication: String,
    image: Array,
    price: Number,
    services: Array,
    status: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    fishingZone: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FishingZone",
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

const Lodging = mongoose.model("Lodging", lodgingSchema);
module.exports = Lodging;
