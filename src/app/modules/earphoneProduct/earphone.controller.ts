import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { earphoneService } from "./earphone.service";

const createEarphone = catchAsync(async (req, res) => {
  const result = await earphoneService.createEarphoneIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Earphone created successfully",
    data: result,
  });
});
const getAllEarphone = catchAsync(async (req, res) => {
  const result = await earphoneService.getAllEarphoneFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Brand retrieved successfully",
    data: result,
  });
});

export const earphoneController = {
  createEarphone,
  getAllEarphone,
};
