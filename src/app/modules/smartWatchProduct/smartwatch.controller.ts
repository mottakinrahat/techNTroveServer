// controllers/smartwatch.controller.ts
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SmartWatchServices } from "./smartwatch.service";
import { Request, Response } from "express";

// Create a smart watch product
const createSmartWatch = catchAsync(async (req: Request, res: Response) => {
  const result = await SmartWatchServices.createSmartWatchIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Smart Watch created successfully",
    data: result,
  });
});

// Get all smart watch products
const getAllSmartWatch = catchAsync(async (req: Request, res: Response) => {
  const result = await SmartWatchServices.getSmartWatchFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Smart Watches retrieved successfully",
    data: result,
  });
});

// Get a single smart watch product by ID
const getSmartWatchById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SmartWatchServices.getSmartWatchByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Smart Watch retrieved successfully",
    data: result,
  });
});

// Update a smart watch product by ID
const updateSmartWatch = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SmartWatchServices.updateSmartWatchInDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Smart Watch updated successfully",
    data: result,
  });
});

// Delete a smart watch product by ID
const deleteSmartWatch = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SmartWatchServices.deleteSmartWatchFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.NO_CONTENT,
    message: "Smart Watch deleted successfully",
    data: result,
  });
});
const getSingleWatchWithReview = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const result = await SmartWatchServices.getSingleSmartWatchWithReviewIntoDB(
    id
  );

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Watches is retrieve with reviews successfully",
    data: result,
  });
});

export const SmartWatchController = {
  createSmartWatch,
  getAllSmartWatch,
  getSmartWatchById,
  updateSmartWatch,
  deleteSmartWatch,
  getSingleWatchWithReview,
};
