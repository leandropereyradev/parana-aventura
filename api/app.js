require("dotenv").config();

const express = require("express");
const logger = require("morgan");

require("./config/db.config");
const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.info(`Server running on http://localhost:${PORT}`)
);
