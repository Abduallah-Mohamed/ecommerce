import Product from "../models/Products.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    return new ErrorResponse("theres no products found!", 404);
  }
  res.status(200).json({ products });
});

export const getSingleProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return new ErrorResponse(`the ID: ${req.params.id} is not exist!`, 404);

  res.status(200).json({ product });
});

export const createNewProduct = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const product = await Product.create(req.body);

  if (!product)
    return next(new ErrorResponse(`please provide the whole data!`, 400));

  res.status(201).json({ product });
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product)
    return new ErrorResponse(
      "there is something happened while deleting this product"
    );

  res.status(200).json({ message: "Deleted Successfully" });
});
