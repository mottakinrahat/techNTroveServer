import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import { ClientService } from "./client.service";

// register user
const createClient = catchAsync(async (req, res) => {
  const result = await ClientService.createClientIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Client created successfully",
    data: result,
  });
});
const getAllClient = catchAsync(async (req, res) => {
  const result = await ClientService.getClientFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client retrieved successfully",
    data: result,
  });
});

export const ClientControllers = {
  createClient,
  getAllClient,
};
