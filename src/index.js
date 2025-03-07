import dotevn from "dotenv";
import connectDB from "./db/db.js";

dotevn.config({
  path: "./env",
});

connectDB();
