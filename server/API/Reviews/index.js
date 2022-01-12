import { ReviewsModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

// Post a review
Router.post("/new", async (req, res) => {
  try {
    const { postReview } = req.body;
    await ReviewsModel.create(postReview);
    return res.json({
      review: postReview,
      msg: "Successfully posted a review",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete a review
Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { deleteReview } = req.params;
    await ReviewsModel.findByIdAndDelete(deleteReview);
    return res.json({
      msg: "Successfully deleted a review",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
