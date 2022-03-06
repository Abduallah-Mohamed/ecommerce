import { Router } from "express";
import {
  createNewProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
} from "../controllers/product.js";

export const product = Router();

product.route("/products").get(getProducts).post(createNewProduct);

product.route("/products/:id").get(getSingleProduct).delete(deleteProduct);
