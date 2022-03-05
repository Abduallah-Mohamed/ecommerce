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
  desctiption: {
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
});

export default new model("Product", porductSchema);
