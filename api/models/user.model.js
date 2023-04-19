const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Your name is required",
      minlength: [3, "You name needs a last of 3 characters"],
    },
    lastname: {
      type: String,
      required: "Your lastname is required",
      minlength: [3, "You lastname needs a last of 3 characters"],
    },
    email: {
      type: String,
      required: "Your email is required",
      match: [/^\S+@\S+\.\S+$/, "Your email must be valid"],
      unique: true,
    },
    password: {
      type: String,
      required: "Your password is required",
      minlength: [8, "Your password needs at least of 8 characters"],
    },
    telephone: {
      type: Number,
      required: "Your telephone is required",
      minlength: [9, "Your password needs at least of 9 numbers"],
    },
    image: {
      type: Object,
      required: "Your image is required",
    },
    confirm: {
      type: Boolean,
      default: process.env.USER_CONFIRMATION_REQUIRED === "false",
    },
    rol: {
      type: String,
      default: "user",
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
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
