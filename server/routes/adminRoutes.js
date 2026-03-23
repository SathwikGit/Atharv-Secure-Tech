import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// 1. GET ALL MESSAGES
router.get("/messages", async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
});

// 2. COUNT PER EMAIL
router.get("/stats", async (req, res) => {
  const stats = await Contact.aggregate([
    {
      $group: {
        _id: "$email",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
  ]);

  res.json(stats);
});

export default router;
