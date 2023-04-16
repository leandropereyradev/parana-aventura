const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");

// Users
router.post("/users", users.register);
router.get("/users/:id", users.detail);
router.patch("/users/:id", users.update);
router.delete("/users/:id", users.delete);

module.exports = router;
