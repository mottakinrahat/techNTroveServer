import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { brandsValidation } from "./brand.validation";
import { brandController } from "./brand.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(brandsValidation.BrandValidationSchema),
  brandController.createBrand
);
router.get("/", brandController.getAllBrand);

export const brandRoutes = router;
