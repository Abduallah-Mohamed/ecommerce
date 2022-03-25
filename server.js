// ? MODULES
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";

import { errorHandler } from "./middlewares/error.js";

import "colors";

// ? FILES
import { connection } from "./config/DBconnect.js";
import { product } from "./routes/product.js";

// ? access the env vars
dotenv.config();

// ! the connection to the database
connection();

const app = express();
const admin = express(); // subApp for Admin

// ? read the data form the josn body
app.use(express.json());

// ? morgan package as logger ...
if (process.env.NODE_ENV !== "production") {
  app.use(logger("dev"));
}

// ? mount Routes
app.use("/api/v1/", product);

// ? custome error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is runing on port: ${PORT}`.magenta.bold);
});
