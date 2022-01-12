import express from "express";
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.findOne({ restaurant: _id });
    if (!foods)
      return res
        .status(404)
        .json({ error: "This food is not available at this restaurant" });
    return res.json({ food: foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const foods = await FoodModel.findOne({
      category: { $regex: category, $option: "i" },
    });
    if (!foods)
      return res
        .status(404)
        .json({ error: "This category of food is not available" });
    return res.json({ food: foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
