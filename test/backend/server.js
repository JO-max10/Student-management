import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentroutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });



app.get("/", (req, res) => {
  res.json({
    message: "Student Management API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});