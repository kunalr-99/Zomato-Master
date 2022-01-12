import { UserModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

// Fetch data of an existing user
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    if (!getUser) return res.status(404).json({ error: "User not found!!" });
    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update data of an existing user
Router.put("/update/:_userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData,
      },
      {
        new: true,
      }
    );
    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
