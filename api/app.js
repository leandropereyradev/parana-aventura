require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors");

require("./config/db.config");
const app = express();

app.use(require("./config/cors.config"));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", require("./config/routes.config"));

// Middleware space

//

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError)
    error = createError(400, error);
  else if (error instanceof mongoose.Error.CastError && error.path === "_id") {
    const sourseName = error.model().constructor.modelName;
    error = createError(404, `${sourseName} not found`);
  } else if (error.message.includes("E11000")) {
    // Object.keys(error.keyValue).forEach(
    //   (key) => (error.keyValue[key] = "This mail already exists")
    // );
    error = createError(409, "This email already exists");
  } else if (!error.status) error = createError(500, error);

  const data = {
    message: error.message,
  };

  if (error.errors) {
    const errors = Object.keys(error.errors).reduce(
      (errorsObject, errorKey) => {
        errorsObject[errorKey] = error.errors[errorKey].message;

        return errorsObject;
      },
      {}
    );

    data.errors = errors;
  }

  res.status(error.status).json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.info(`Server running on http://localhost:${PORT}`)
);
