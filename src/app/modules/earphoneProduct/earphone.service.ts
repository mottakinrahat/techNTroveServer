import httpStatus from "http-status";
import { TEarphoneProduct } from "./earphone.interface";
import { ProductEarphoneModel } from "./earphone.model";
import AppError from "../../utils/AppError";

const createEarphoneIntoDB = async (payload: TEarphoneProduct) => {
  const isUserExist = await ProductEarphoneModel.findOne({
    name: payload?.name,
  });

  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product already exist");
  }

  const result = await ProductEarphoneModel.create(payload);

  return result;
};

const getAllEarphoneFromDB = async () => {
  const result = await ProductEarphoneModel.find();
  return result;
};
export const earphoneService = {
  createEarphoneIntoDB,
  getAllEarphoneFromDB,
};
