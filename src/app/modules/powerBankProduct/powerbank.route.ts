import { PowerBankValidation } from './powerbank.validation';
import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { powerBankController } from './powerbank.controller';

const router = express.Router();

router.post(
  "/",
  validateRequest(PowerBankValidation.PowerBankProductValidationSchema),
  powerBankController.createPowerBank
);
router.get("/", powerBankController.getAllPowerBank);

export const PowerBankRoutes = router;
