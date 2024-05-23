import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PowerBankServices } from "./powerbank.service";

const createPowerBank = catchAsync(async (req, res) => {
  const result = await PowerBankServices.createPowerBankIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "PowerBank created successfully",
    data: result,
  });
});

const getAllPowerBank = catchAsync(async (req, res) => {
  const result = await PowerBankServices.getPowerBankFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "PowerBank retrieved successfully",
    data: result,
  });
});

export const powerBankController = {
  createPowerBank,
  getAllPowerBank,
};
