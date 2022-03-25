import { ErrorResponse } from "../utils/ErrorResponse.js";

export const errorHandler = (err, req, res, next) => {
  // ? make a copy from the original error so that i can modify it more than once without change the actual error
  let error = { ...err };

  error.message = err.message;

  // ? log to console for dev
  console.log(err.message.red);

  // mongoose bad objectID
  if (err.name === "CastError") {
    const message = `The id: ${err.value} does not exist!`;
    error = new ErrorResponse(message, 404);
  }

  // mongoose dublicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((v) => v.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
  });
};
