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
  const result = await ProductModel.findById(id);
  return result;
};
const getSingleProductWithReviewIntoDB = async (id: string) => {
  const convertedId = new mongoose.Types.ObjectId(id);
  const result = await ProductModel.aggregate([
    {
      $match: {
        _id: convertedId,
      },
    },
    {
      $lookup: {
        from: "brands",
        localField: "brand",
        foreignField: "_id",
        as: "brand",
      },
    },
    {
      $unwind: {
        path: "$brand",
        preserveNullAndEmptyArrays: true,
      },
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

  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  getSingleProductWithReviewIntoDB,
};
