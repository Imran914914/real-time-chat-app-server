import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authentication from "./routes/authentication.js";
import http, { createServer } from 'http'
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.set("trust proxy", true);
app.use(express.json());
app.use("/auth", authentication);
app.get("/api/custom", (req, res) => {
  res.send({ hi: "Hello" });
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

connectDB();