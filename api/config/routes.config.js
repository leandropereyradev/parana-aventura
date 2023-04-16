const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const { userExists } = require("../middleware/user.mid");
const { cleanBody } = require("../middleware/secure.mid");

// Users
router.post("/users", cleanBody, users.register);
router.get("/users/:id", userExists, users.detail);
router.patch("/users/:id", userExists, cleanBody, users.update);
router.delete("/users/:id", userExists, users.delete);

module.exports = router;
