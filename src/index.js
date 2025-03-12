import dotevn from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotevn.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection failded!!!", error);
  });
