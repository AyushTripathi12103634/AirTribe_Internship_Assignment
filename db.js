/**
 * The function `connectDB` connects to a MongoDB database using the provided URL and logs a success
 * message if the connection is successful, or an error message if there is an error.
 */
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURL);
    console.log(`Connected successfully to mongodb `.bgGreen.white);
  } catch (error) {
    console.log(`Error Connecting to MongoDb ${error}`.bgRed.white);
  }
};

export default connectDB;