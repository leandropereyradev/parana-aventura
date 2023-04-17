const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const fishingZone = require("../controllers/fishingZone.controllers");
const comment = require("../controllers/comment.controllers");
const lodging = require("../controllers/lodging.controllers");
const fish = require("../controllers/fish.controllers");

const { userExists } = require("../middleware/user.mid");
const { cleanBody, auth } = require("../middleware/secure.mid");
const {
  fishingZoneExists,
  lodgingExists,
  fishExists,
} = require("../middleware/services.mid");
const { commentExists, checkAuthor } = require("../middleware/comment.mid");

// Users
router.post("/users", cleanBody, users.register);
router.get("/users/:id", userExists, users.detail);
router.get("/users/:id/confirm", userExists, users.confirm);
router.patch("/users/:id", auth, cleanBody, users.update);
router.delete("/users/:id", auth, users.delete);

router.post("/login", users.login);

// Lodging
router.get("/lodgings", lodging.list);
router.get("/lodgings/:id", lodgingExists, lodging.detail);

// FishingZone
router.get("/fishing-zones", fishingZone.list);
router.get("/fishing-zones/:id", fishingZoneExists, fishingZone.detail);
router.post("/fishing-zones/:id/rating", fishingZoneExists, fishingZone.rating);

// Comments
router.post(
  "/fishing-zones/:id/comment",
  auth,
  fishingZoneExists,
  comment.create
);
router.patch(
  "/fishing-zones/:id/comment/:commentId",
  auth,
  fishingZoneExists,
  commentExists,
  checkAuthor,
  comment.update
);
router.post(
  "/fishing-zones/:id/comment/:commentId",
  auth,
  fishingZoneExists,
  commentExists,
  checkAuthor,
  comment.delete
);

// Fish
router.get("/fishes", fish.list);
router.get("/fishes/:id", fishExists, fish.detail);

module.exports = router;
