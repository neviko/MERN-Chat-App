import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION as string);
    console.log("connected to DB");
  } catch (e) {
    throw new Error("error while connecting to the DB");
  }
};
