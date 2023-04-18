const express = require("express");
const router = express.Router();

const fish = require("../controllers/fish.controllers");

const { fishExists } = require("../middleware/services.mid");

router.get("/fishes", fish.list);
router.get("/fishes/:id", fishExists, fish.detail);

module.exports = router;
