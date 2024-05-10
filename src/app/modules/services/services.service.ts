import { TServices } from "./services.interface";
import { Services } from "./services.model";
interface UpdateQuery {
  $set: Record<string, any>;
  $addToSet?: Record<string, any>;
  // Add other MongoDB update operators if needed
}
const createServicesIntoDB = async (payload: TServices) => {
  const result = await Services.create(payload);
  return result;
};

const getAllServicesFromDB = async () => {
  const result = await Services.find();
  return result;
};
const getSingleServicesFromDB = async (id: string) => {
  const result = await Services.findById(id);
  return result;
};
const updateServicesFromDB = async (id: string, payload: TServices) => {
  const { eventRules, ...remainingData } = payload;

  const updateQuery: UpdateQuery = {
    $set: remainingData,
  };

  if (eventRules && eventRules.length > 0) {
    (updateQuery as any).$addToSet = { eventRules: { $each: eventRules } };
  }

  const result = await Services.findByIdAndUpdate(id, updateQuery, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteServiceFromDB = async (id: string) => {
  const deleteService = await Services.findByIdAndDelete(id);
  return deleteService;
};

export const ServiceServices = {
  createServicesIntoDB,
  getAllServicesFromDB,
  getSingleServicesFromDB,
  updateServicesFromDB,
  deleteServiceFromDB,
};
