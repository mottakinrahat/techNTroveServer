import { TBrand } from "./brand.interface";
import { BrandModel } from "./brand.model";

const createBrandIntoDB = async (payload: TBrand) => {
  const result = await BrandModel.create(payload);

  return result;
};
const getBrandFromDB = async () => {
  const result = await BrandModel.find();
  return result;
};

export const brandServices = {
  createBrandIntoDB,
  getBrandFromDB,
};
