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

const getSingleHeadPhone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HeadphoneServices.getSingleHeadphoneFromDB(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "HeadPhone not found",
      data: null,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "HeadPhone retrieved successfully",
      data: result,
    });
  }
});

const updateHeadPhone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HeadphoneServices.updateHeadphoneIntoDB(id, req.body);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "HeadPhone not found",
      data: null,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "HeadPhone updated successfully",
      data: result,
    });
  }
});

const deleteHeadPhone = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HeadphoneServices.deleteHeadphoneFromDB(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "HeadPhone not found",
      data: null,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "HeadPhone deleted successfully",
      data: null,
    });
  }
});

export const headPhoneController = {
  createHeadPhone,
  getAllHeadPhone,
  getSingleHeadPhone,
  updateHeadPhone,
  deleteHeadPhone,
};
