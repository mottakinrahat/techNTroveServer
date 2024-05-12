import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { reviewService } from "./review.service";

const createReview = catchAsync(async (req, res) => {
  const result = await reviewService.createReviewIntoDB(req.user,req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});
const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewService.getAllReviewFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review retrieved successfully",
    data: result,
  });
});

export const reviewController = {
  createReview,
  getAllReview,
};
