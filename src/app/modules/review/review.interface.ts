import { Types } from "mongoose";

export interface TReview {
  productId: Types.ObjectId;
  reviewDescription: string;
  rating: number;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
}
