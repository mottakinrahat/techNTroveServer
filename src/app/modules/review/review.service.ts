import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import { ProductModel } from "../product/product.model";
import { TReview } from "./review.interface";
import { ReviewModel } from "./review.model";
import { JwtPayload } from "jsonwebtoken";

const createReviewIntoDB = async (userData: JwtPayload, payload: TReview) => {
  const isProductExist = await ProductModel.findById(payload?.productId);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, `Product not found`);
  }
  const result = await ReviewModel.create({
    ...payload,
    createdBy: userData?._id,
  });
  await result.populate({
    path: "createdBy",
    select: " -password -createdAt -updatedAt",
  });

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
