// ? import the modules
import Product from "../models/Products.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    return next(new ErrorResponse("There is no Products For you!", 404));
  }
  res.status(200).json({ products });
});

export const createProduct = asyncHandler(async (req, res, next) => {
  const { name, description, price, photo, category } = req.body;
  if ((!name, !description, !price, !photo, !category))
    return next(new ErrorResponse("please fill all fields!", 400));
  const product = await Product.create(req.body);

  await product.save();

  res.status(201).json({ product });
});

export const getSingleProudct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  if (!productId) return next(new ErrorResponse("where the product Id?", 400));

  const product = await Product.findById(productId);

  if (!product)
    return next(
      new ErrorResponse(`there is no product with id: ${productId}`, 404)
    );

  res.status(200).json(product);
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  if (!productId) return next(new ErrorResponse("where the product Id?", 400));

  const product = await Product.findByIdAndUpdate(productId, req.body);

  if (!product)
    return next(
      new ErrorResponse(`there is no product with id: ${productId}`, 404)
    );

  res.status(200).json(product);
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  if (!productId) return next(new ErrorResponse("where the product Id?", 400));

  const product = await Product.findById(productId);

  if (!product)
    return next(
      new ErrorResponse(`there is no product with id: ${productId}`, 404)
    );

  await product.remove();

  res.status(204).send("the product deleted successfully");
});
