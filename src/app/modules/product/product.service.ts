import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import { ProductModel } from "./product.model";
import { TProduct } from "./product.interface";
import mongoose from "mongoose";

const createProductIntoDB = async (payload: TProduct) => {
  const isUserExist = await ProductModel.findOne({
    name: payload?.productName,
  });

  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product already exist");
  }

  const result = await ProductModel.create(payload);

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductIntoDB = async (query: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = {};
  if (query.category) {
    filter.category = query.category;
  }
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

const updateProductIntoDB = async (id: string, payload: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  getSingleProductWithReviewIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
