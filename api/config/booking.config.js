const express = require("express");
const router = express.Router();

const booking = require("../controllers/booking.controllers");
const { auth } = require("../middleware/secure.mid");

router.post("/bookings", auth, booking.create);

module.exports = router;
