const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishSchema = new Schema(
  {
    name: String,
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

const Fish = mongoose.model("Fish", fishSchema);
module.exports = Fish;
