require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

require("./config/db.config");
const app = express();

app.use(require("./config/cors.config"));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", require("./config/user.config"));
app.use("/api", require("./config/fishingZone.config"));
app.use("/api", require("./config/fish.config"));
app.use("/api", require("./config/lodging.config"));

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use(require("./middleware/errors.mid"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.info(`Server running on http://localhost:${PORT}`)
);
