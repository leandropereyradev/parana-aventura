const express = require("express");
const router = express.Router();

const lodging = require("../controllers/lodging.controllers");
const { lodgingExists } = require("../middleware/services.mid");
const { auth } = require("../middleware/secure.mid");
const {
  commentLodgingExists,
  checkAuthorLodging,
} = require("../middleware/commentLodging.mid");
const commentLodging = require("../controllers/commentLodgingcontrollers");

// Lodging
router.get("/lodgings", lodging.list);
router.get("/lodgings/:id", lodgingExists, lodging.detail);
router.post("/lodgings/:id/rating", lodgingExists, lodging.rating);

// Comments Lodging
router.post("/lodging/:id/comment", auth, lodgingExists, commentLodging.create);
router.patch(
  "/lodging/:id/comment/:commentId",
  auth,
  lodgingExists,
  commentLodgingExists,
  checkAuthorLodging,
  commentLodging.update
);
router.delete(
  "/lodging/:id/comment/:commentId",
  auth,
  lodgingExists,
  commentLodgingExists,
  checkAuthorLodging,
  commentLodging.delete
);

module.exports = router;
