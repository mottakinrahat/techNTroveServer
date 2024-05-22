import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SmartWatchServices } from "./smartwatch.service";


const createSmartWatch = catchAsync(async (req, res) => {
  const result = await SmartWatchServices.createSmartWatchIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "SmartWatch created successfully",
    data: result,
  });
});
const getAllSmartWatch = catchAsync(async (req, res) => {
  const result = await SmartWatchServices.getSmartWatchFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "SmartWatch retrieved successfully",
    data: result,
  });
});

export const SmartWatchController = {
    createSmartWatch,
    getAllSmartWatch,
};
