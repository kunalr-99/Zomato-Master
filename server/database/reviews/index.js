import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
  food: {
    type: mongoose.Types.ObjectId,
    ref: "Foods",
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurants",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  isFoodReview: Boolean,
  isRestaurantReview: Boolean,
  rating: {
    type: Number,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
  ],
});

export const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);
