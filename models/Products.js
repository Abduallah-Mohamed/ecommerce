import pkg from "mongoose";
// import { Schema, model } from "mongoose"; // ! not working
const { Schema, model } = pkg;

const porductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add the Product name!"],
    maxlength: [40, "The name is Too Long!!"],
  },
  description: {
    type: String,
    required: [true, "Plesase, Add the description..!"],
    maxlength: [200, "The description is Too Long!!"],
  },
  price: {
    type: Number,
    required: [true, "Please, Add the price of your Product..!"],
  },
  photo: {
    type: String,
    required: [true, "Please, Upload a photo for your Product ... !"],
  },
  category: {
    type: String,
    enum: [
      "electrical",
      "smart phones",
      "kids",
      "men",
      "women",
      "watches",
      "glasses",
    ],
    required: [true, "please add the category field!"],
  },
});

export default new model("Product", porductSchema);
