import { RestaurantModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    return res.json({ restaurants: restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findOne({ _id });
    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found!" });
    return res.json({ restaurant: restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/search", async (req, res) => {
  try {
    const { searchString } = req.body;
    const restaurant = await RestaurantModel.find({
      name: { $regex: search, $option: "i" },
    });
    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found!" });
    return res.json({ restaurant: restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
