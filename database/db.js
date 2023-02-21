import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const MONGO_URL = `${process.env.MONGO_URL}`;

  mongoose.connect(MONGO_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected ");
  });

  mongoose.connection.on("error", (error) => {
    console.log(`Error while connecting the database ${error.message}`);
  });
};

export default Connection;
