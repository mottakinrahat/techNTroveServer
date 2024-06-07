// routes/smartwatch.route.ts
import express from "express";
import { SmartWatchController } from "./smartwatch.controller";
import validateRequest from "../../middleware/validateRequest";
import { smartWatchValidation } from "./smartwatch.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(smartWatchValidation.SmartWatchProductValidationSchema),
  SmartWatchController.createSmartWatch
);

router.get("/", SmartWatchController.getAllSmartWatch);

router.get("/:id", SmartWatchController.getSmartWatchById);

router.put(
  "/:id",
  validateRequest(smartWatchValidation.SmartWatchProductValidationSchema),
  SmartWatchController.updateSmartWatch
);
router.get("/:id/reviews", SmartWatchController.getSingleWatchWithReview);
router.delete("/:id", SmartWatchController.deleteSmartWatch);

export const SmartWatchRoutes = router;
