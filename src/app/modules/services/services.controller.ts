import { Request } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ServiceServices } from "./services.service";

const createServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.createServicesIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Services created successfully",
    data: result,
  });
});
const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllServicesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});
const getSingleServices = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.getSingleServicesFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});
const updateServices = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.updateServicesFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});
const deleteServices = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.deleteServiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully",
    data: result,
  });
});

export const servicesController = {
  createServices,
  getAllServices,
  getSingleServices,
  updateServices,
  deleteServices,
};
