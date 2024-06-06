import httpStatus from "http-status";
import { TEarphoneProduct } from "./earphone.interface";
import { ProductEarphoneModel } from "./earphone.model";
import AppError from "../../utils/AppError";

const createEarphoneIntoDB = async (payload: TEarphoneProduct) => {
  const isProductExist = await ProductEarphoneModel.findOne({
    name: payload?.name,
  });

  if (isProductExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product already exists");
  }

  const result = await ProductEarphoneModel.create(payload);

  return result;
};

const getAllEarphoneFromDB = async () => {
  const result = await ProductEarphoneModel.find();
  return result;
};

const getSingleEarphoneFromDB = async (id: string) => {
  const result = await ProductEarphoneModel.findById(id);
  return result;
};

const updateEarphoneInDB = async (id: string, payload: TEarphoneProduct) => {
  const result = await ProductEarphoneModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteEarphoneFromDB = async (id: string) => {
  const result = await ProductEarphoneModel.findByIdAndDelete(id);
  return result;
};

export const earphoneService = {
  createEarphoneIntoDB,
  getAllEarphoneFromDB,
  getSingleEarphoneFromDB,
  updateEarphoneInDB,
  deleteEarphoneFromDB,
};
