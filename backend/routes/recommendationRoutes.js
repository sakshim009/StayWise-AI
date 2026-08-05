import express from "express";
import { recommendHotel } from "../controllers/recommendationController.js";

const router = express.Router();

// AI Hotel Recommendation
router.post("/recommend", recommendHotel);

export default router;