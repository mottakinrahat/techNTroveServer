import { smartWatchValidation } from './smartwatch.validation';
import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { SmartWatchController } from './smartwatch.controller';


const router = express.Router();

router.post(
  "/",
  validateRequest(smartWatchValidation.SmartWatchProductValidationSchema),
  SmartWatchController.createSmartWatch
);
router.get("/", SmartWatchController.getAllSmartWatch);

export const SmartWatchRoutes = router;
