import { TSmartWatchProduct } from "./smartwatch.interface";
import { SmartWatchProductModel } from "./smartwatch.model";


const createSmartWatchIntoDB = async (payload: TSmartWatchProduct) => {
  const result = await SmartWatchProductModel.create(payload);

  return result;
};
const getSmartWatchFromDB = async () => {
  const result = await SmartWatchProductModel.find();
  return result;
};

export const SmartWatchServices = {
    createSmartWatchIntoDB,
    getSmartWatchFromDB,
};
