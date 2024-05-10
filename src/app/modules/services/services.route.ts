import { Router } from "express";
import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { servicesValidations } from "./services.validation";
import { servicesController } from "./services.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(servicesValidations.servicesValidationSchema),
  servicesController.createServices
);
router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getSingleServices);
router.put(
  "/:id",
  validateRequest(servicesValidations.updateServicesValidationSchema),
  servicesController.updateServices
);
router.delete("/:id", servicesController.deleteServices);

export const serviceRoutes = router;
