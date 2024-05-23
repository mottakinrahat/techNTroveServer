import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { HeadphoneServices } from "./headphone.service";

const createHeadPhone = catchAsync(async (req, res) => {
  const result = await HeadphoneServices.createHeadphoneIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "HeadPhone created successfully",
    data: result,
  });
});

const getAllHeadPhone = catchAsync(async (req, res) => {
  const result = await HeadphoneServices.getHeadphoneFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "HeadPhone retrieved successfully",
    data: result,
  });
});

export const headPhoneController = {
  createHeadPhone,
  getAllHeadPhone,
};
