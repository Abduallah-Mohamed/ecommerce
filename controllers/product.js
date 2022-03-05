import Product from "../models/Products.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({ message: "There is no Products For you!" });
    }
    res.status(200).json({ products });
  } catch (error) {
    next(new ErrorResponse("There is no products for you !", 404));
  }
};
