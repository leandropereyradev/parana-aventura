const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const maxSize = 2 * 1024 * 1024;

cloudinary.config({
  cloud_name: "dbr9eypvg",
  api_key: "786718846787114",
  api_secret: "pgkJ0LKMHdkLtkxpPkRG4x9Iv7M",
});

const storageUser = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "parana-aventura/images",
  },
});

// const storagePet = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "tindPetPets",
//   },
// });

module.exports.user = multer({
  storage: storageUser,
  limits: { fileSize: maxSize },
});
// module.exports.pet = multer({ storage: storagePet });
