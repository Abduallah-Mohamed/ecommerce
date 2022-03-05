import { Router } from "express";
import { getProducts } from "../controllers/product.js";

export const product = Router();

product.get("/products", getProducts);
