import { TSmartWatchProduct } from "./smartwatch.interface";
import { SmartWatchProductModel } from "./smartwatch.model";


const createSmartWatchIntoDB = async (payload: TSmartWatchProduct) => {
  const result = await SmartWatchProductModel.create(payload);

  return result;
};

// get smart watch all
const getSmartWatchFromDB = async () => {
  const result = await SmartWatchProductModel.find();
  return result;
};

// services/smartwatch.service.ts
// Get a smart watch product by ID from the database
const getSmartWatchByIdFromDB = async (id: string): Promise<TSmartWatchProduct | null> => {
  const result = await SmartWatchProductModel.findById(id).lean().exec();
  return result;
};

// services/smartwatch.service.ts
// Update a smart watch product in the database by ID
const updateSmartWatchInDB = async (id: string, payload: Partial<TSmartWatchProduct>): Promise<TSmartWatchProduct | null> => {
  const result = await SmartWatchProductModel.findByIdAndUpdate(id, payload, { new: true }).lean().exec();
  return result;
};

// services/smartwatch.service.ts
// Delete a smart watch product from the database by ID
const deleteSmartWatchFromDB = async (id: string): Promise<TSmartWatchProduct | null> => {
  const result = await SmartWatchProductModel.findByIdAndDelete(id).lean().exec();
  return result;
};

export const SmartWatchServices = {
    createSmartWatchIntoDB,
    getSmartWatchFromDB,
    getSmartWatchByIdFromDB,
    updateSmartWatchInDB,
    deleteSmartWatchFromDB
};
