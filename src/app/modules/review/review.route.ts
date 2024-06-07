import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { reviewValidation } from "./review.validation";
import { reviewController } from "./review.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(reviewValidation.ReviewValidationSchema),
  reviewController.createReview
);
router.get("/", reviewController.getAllReview);

export const ReviewRoutes = router;
