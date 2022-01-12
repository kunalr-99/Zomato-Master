import { OrderModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

// View an existing order
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getOrders = await OrderModel.findOne({ user: _id });
    if (!getOrders)
      return res.status(404).json({ error: "No orders to display!!" });
    return res.json({ restaurants: restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Place a new order
Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const newOrder = await OrderModel.findOneAndUpdate(
      _id,
      {
        $push: { orderDetails },
      },
      {
        new: true,
      }
    );
    return res.json({ orders: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
