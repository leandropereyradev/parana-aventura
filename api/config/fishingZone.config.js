const express = require("express");
const router = express.Router();

const fishingZone = require("../controllers/fishingZone.controllers");
const commentFishingZone = require("../controllers/commentFishingZone.controllers");

const { auth } = require("../middleware/secure.mid");
const { fishingZoneExists } = require("../middleware/services.mid");
const {
  commentFishingZoneExists,
  checkAuthorFishingZone,
} = require("../middleware/commentFishingZone.mid");

// FishingZone
router.get("/fishing-zones", fishingZone.list);
router.get("/fishing-zones/:id", fishingZoneExists, fishingZone.detail);
router.post("/fishing-zones/:id/rating", fishingZoneExists, fishingZone.rating);

// Comments FishingZone
router.post(
  "/fishing-zones/:id/comment",
  auth,
  fishingZoneExists,
  commentFishingZone.create
);
router.patch(
  "/fishing-zones/:id/comment/:commentId",
  auth,
  fishingZoneExists,
  commentFishingZoneExists,
  checkAuthorFishingZone,
  commentFishingZone.update
);
router.delete(
  "/fishing-zones/:id/comment/:commentId",
  auth,
  fishingZoneExists,
  commentFishingZoneExists,
  checkAuthorFishingZone,
  commentFishingZone.delete
);

module.exports = router;
