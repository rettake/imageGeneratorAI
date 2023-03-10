import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set({ strictQuery: true });

  mongoose
    .connect(url)
    .then(() => console.log("Successfully"))
    .catch((e) => {
      throw new Error(e);
    });
};

export default connectDB;
