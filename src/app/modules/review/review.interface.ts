import { Types } from "mongoose";

export interface TReview {
  productId: Types.ObjectId;
  reviewDescription: string;
  rating: number;
  username: string;
  userEmail: string;
  isDeleted: boolean;
}
