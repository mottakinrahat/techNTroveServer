import { TReview } from "./review.interface";
import { ReviewModel } from "./review.model";

const createReviewIntoDB = async (payload: TReview) => {
  // const isProductExist = await ProductModel.findById(payload?.productId);
  const result = await ReviewModel.create(payload);

  return result;
};
const getAllReviewFromDB = async () => {
  const result = await ReviewModel.find();
  return result;
};

export const reviewService = {
  createReviewIntoDB,
  getAllReviewFromDB,
};
