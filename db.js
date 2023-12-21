import mongoose from "mongoose";
import { nanoid } from "nanoid";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rdsaepulmillah:<password>@cluster0.esqbptu.mongodb.net/?retryWrites=true&w=majority",
    //"mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1",
    {
      minPoolSize: 10,
      maxPoolSize: 400,
    }
  );
};

export const db = mongoose.connection.useDb("contact_db", {
  useCache: true,
});

export const contactSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(8),
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  fax: String,
  address: String,
  gender: String,
  idcard: String,
  jobs: String,
});
