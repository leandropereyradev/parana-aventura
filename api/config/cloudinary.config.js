const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const maxSize = 2 * 1024 * 1024;

cloudinary.config({
  cloud_name: "dbr9eypvg",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storageUser = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "parana-aventura/images",
  },
});

module.exports.user = multer({
  storage: storageUser,
  limits: { fileSize: maxSize },
});
