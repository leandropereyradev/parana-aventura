const createError = require("http-errors");
const mongoose = require("mongoose");

const errors = (error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError)
    error = createError(400, error);
  else if (error instanceof mongoose.Error.CastError && error.path === "_id") {
    const sourseName = error.model().constructor.modelName;
    error = createError(404, `${sourseName} not found`);
  } else if (error.message.includes("E11000")) {
    Object.keys(error.keyValue).forEach(
      (key) => (error.keyValue[key] = "Already exists")
    );
    error = createError(409, { errors: error.keyValue });
  } else if (!error.status) error = createError(500, error);

  console.log(error);
  const data = {
    message: error.message,
  };

  if (error.errors) {
    const errors = Object.keys(error.errors).reduce(
      (errorsObject, errorKey) => {
        errorsObject[errorKey] =
          error.errors[errorKey]?.message || error.errors[errorKey];

        return errorsObject;
      },
      {}
    );

    data.errors = errors;
  }

  res.status(error.status).json(data);
};

module.exports = errors;
