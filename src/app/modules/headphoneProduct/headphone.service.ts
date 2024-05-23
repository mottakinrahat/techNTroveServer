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

export const HeadphoneServices = {
  createHeadphoneIntoDB,
  getHeadphoneFromDB,
};
