import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProudct,
  updateProduct,
} from "../controllers/product.js";

export const product = Router();

product.route("/products").get(getProducts).post(createProduct);

product
  .route("/products/:productId")
  .get(getSingleProudct)
  .put(updateProduct)
  .delete(deleteProduct);
