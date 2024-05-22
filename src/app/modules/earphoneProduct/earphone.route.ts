import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { earphoneController } from "./earphone.controller";
import { EarphoneValidation } from "./earphone.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(EarphoneValidation.earphoneProductValidationSchema),
  earphoneController.createEarphone
);
router.get("/",earphoneController.getAllEarphone);

export const earphoneRoutes = router;
