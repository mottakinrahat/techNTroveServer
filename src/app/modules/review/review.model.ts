import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>(
  {
    productId: { type: Schema.Types.ObjectId, required: true },

    reviewDescription: { type: String, required: true },
    rating: { type: Number, required: true },
    username: { type: String, required: true },
    userEmail: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Define and export the Mongoose model
export const ReviewModel = model<TReview>("Review", reviewSchema);
