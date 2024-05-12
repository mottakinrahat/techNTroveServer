import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { brandServices } from "./brand.service";

const createBrand = catchAsync(async (req, res) => {
  const result = await brandServices.createBrandIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Brand created successfully",
    data: result,
  });
});
const getAllBrand = catchAsync(async (req, res) => {
  const result = await brandServices.getBrandFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Brand retrieved successfully",
    data: result,
  });
});

export const brandController = {
  createBrand,
  getAllBrand,
};
