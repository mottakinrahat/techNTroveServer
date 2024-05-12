import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const result = await orderServices.createOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});
const getAllOder = catchAsync(async (req, res) => {
  const result = await orderServices.getAllOrderFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result,
  });
});

export const orderController = {
  createOrder,
  getAllOder,
};
