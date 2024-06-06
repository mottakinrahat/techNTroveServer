import { THeadphoneProduct } from './headphone.interface';
import { HeadphoneProductModel } from './headphone.model';


const createHeadphoneIntoDB = async (payload: THeadphoneProduct) => {
  const result = await HeadphoneProductModel.create(payload);
  return result;
};

const getHeadphoneFromDB = async () => {
  const result = await HeadphoneProductModel.find();
  return result;
};

const getSingleHeadphoneFromDB = async (id: string) => {
  const result = await HeadphoneProductModel.findById(id);
  return result;
};

const updateHeadphoneIntoDB = async (id: string, payload: THeadphoneProduct) => {
  const result = await HeadphoneProductModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteHeadphoneFromDB = async (id: string) => {
  const result = await HeadphoneProductModel.findByIdAndDelete(id);
  return result;
};

export const HeadphoneServices = {
  createHeadphoneIntoDB,
  getHeadphoneFromDB,
  getSingleHeadphoneFromDB,
  updateHeadphoneIntoDB,
  deleteHeadphoneFromDB,
};
