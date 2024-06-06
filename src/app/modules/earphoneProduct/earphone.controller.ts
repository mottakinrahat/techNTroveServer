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
    message: "Earphones retrieved successfully",
    data: result,
  });
});

const getSingleEarphone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await earphoneService.getSingleEarphoneFromDB(id);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Earphone not found",
      data:null
    });
  
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Earphone retrieved successfully",
    data: result,
  });
});

const updateEarphone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await earphoneService.updateEarphoneInDB(id, req.body);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Earphone not found",
      data:null
    });
  
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Earphone updated successfully",
    data: result,
  });
});

const deleteEarphone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await earphoneService.deleteEarphoneFromDB(id);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Earphone not found",
      data:null
    });
  
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Earphone deleted successfully",
    data:result
  });
});

export const earphoneController = {
  createEarphone,
  getAllEarphone,
  getSingleEarphone,
  updateEarphone,
  deleteEarphone,
};
