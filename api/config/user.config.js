const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const storage = require("../config/cloudinary.config");

const { userExists } = require("../middleware/user.mid");
const { cleanBody, auth, isAdmin } = require("../middleware/secure.mid");

router.get("/users", isAdmin, users.list);
router.post("/users", cleanBody, storage.user.single("file"), users.register);
router.get("/users/:id", userExists, users.detail);
router.get("/users/:id/confirm", userExists, users.confirm);
router.patch(
  "/users/:id",
  storage.user.single("file"),
  auth,
  userExists,
  cleanBody,
  users.update
);
router.delete("/users/:id", auth, users.delete);

router.post("/login", users.login);

module.exports = router;
