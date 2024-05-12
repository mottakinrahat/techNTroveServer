import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};
const getAllOrderFromDB = async () => {
  const result = await OrderModel.find().populate("products");
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
};
