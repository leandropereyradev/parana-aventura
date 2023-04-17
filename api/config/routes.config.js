const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const services = require("../controllers/services.controllers");

const { userExists } = require("../middleware/user.mid");
const { cleanBody, auth } = require("../middleware/secure.mid");

// Users
router.post("/users", cleanBody, users.register);
router.get("/users/:id", userExists, users.detail);
router.get("/users/:id/confirm", userExists, users.confirm);
router.patch("/users/:id", auth, cleanBody, users.update);
router.delete("/users/:id", auth, users.delete);

router.post("/login", users.login);

// Lodging
router.get("/lodgings", services.lodgingList);
router.get("/lodgings/:id", services.lodgingDetail);

// FishingZone
router.get("/fishing-zones", services.fishingZoneList);
router.get("/fishing-zones/:id", services.fishingZoneDetail);

module.exports = router;
