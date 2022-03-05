import mongoose from "mongoose";

// ? connect to database
export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully to database ...!".random);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
