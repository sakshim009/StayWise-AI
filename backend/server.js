import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat.js";
import bookingRoutes from "./routes/booking.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/search", bookingRoutes);
app.use("/api/ai", recommendationRoutes);
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    "GROQ KEY:",
    process.env.GROQ_API_KEY ? "Loaded ✅" : "Missing ❌"
  );
  console.log(`🚀 Server running on port ${PORT}`);
});