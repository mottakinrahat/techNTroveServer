import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { EventItem } from "./eventItem.model";
import { EventItemService } from "./eventItem.service";
import httpStatus from "http-status";

// register user
const createEventItem = catchAsync(async (req, res) => {
  const result = await EventItemService.createEventItemIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Event item created successfully",
    data: result,
  });
});
const getAllEventItem = catchAsync(async (req, res) => {
  const result = await EventItemService.getEventItemFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event items retrieved successfully",
    data: result,
  });
});
const getSingleAllEventItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EventItemService.getSingleEventItemFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event item retrieved successfully",
    data: result,
  });
});
const updateEventItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EventItemService.updateEventItemFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event item updated successfully",
    data: result,
  });
});
const deleteEventItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EventItemService.deleteEventItemFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event item deleted successfully",
    data: result,
  });
});

export const eventItemControllers = {
  createEventItem,
  getAllEventItem,
  getSingleAllEventItem,
  updateEventItem,
  deleteEventItem,
};
