import { MenuModel, ImageModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

Router.get("/rest/:_id", async (req, res) => {
  try {
    const { _id } = req.query;
    const menus = await MenuModel.findOne({ _id });
    res.json({ menus: menus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.query;
    const menuImage = await ImageModel.findOne({ _id });
    res.json({ menuImage: menuImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
