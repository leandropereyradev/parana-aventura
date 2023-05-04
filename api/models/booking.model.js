const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    checkin: Date,
    checkout: Date,
    people: Number,
    nights: Number,
    aditionals: Array,
    total_price: Number,
    paid: {
      type: Boolean,
      default: false,
    },
    lodging: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lodging",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
