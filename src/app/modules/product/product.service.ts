import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import { ProductModel } from "./product.model";
import { TProduct } from "./product.interface";
import mongoose from "mongoose";
import { UserModel } from "../../user/user.model";

const createProductIntoDB = async (payload: TProduct) => {
  const isUserExist = await ProductModel.findOne({ name: payload?.name });

  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product already exist");
  }

  const result = await ProductModel.create(payload);

  return result;
};

const getAllProductIntoDB = async () => {
  const result = await ProductModel.find().populate("brand");
  return result;
};
const getSingleProductIntoDB = async (id: string) => {
  const convertedId = new mongoose.Types.ObjectId(id);
  const result = await ProductModel.aggregate([
    {
      $match: {
        _id: convertedId,
      },
    },
    {
      $lookup: {
        from: "users",
        let: { creatorId: "$createdBy" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$_id", "$$creatorId"] },
            },
          },
          {
            $project: {
              password: 0,
              updatedAt: 0,
              createdAt: 0,
            },
          },
        ],
        as: "createdBy",
      },
    },
    {
      $unwind: "$createdBy",
    },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "productId",
        as: "reviews",
      },
    },
  ]);

  if (result.length > 0) {
    const foundProduct = await result[0];

    // Fetching user details for each review's createdBy field
    const reviewPromises = foundProduct.reviews.map(async (review: any) => {
      const userId = review.createdBy;

      // Fetch user details using userId from the 'users' collection
      const userDetails = await UserModel.findOne(
        { _id: userId },
        { password: 0, updatedAt: 0, createdAt: 0 }
      );

      if (userDetails) {
        review.createdBy = userDetails;
      } else {
        throw new AppError(
          httpStatus.NOT_FOUND,
          `User not found with the id ${userId}`
        );
      }
      return review;
    });

    const populatedReviews = await Promise.all(reviewPromises);

    foundProduct.reviews = populatedReviews;

    return foundProduct;
  } else {
    throw new AppError(httpStatus.NOT_FOUND, `Course not found with`);
  }
};

export const productServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
};
