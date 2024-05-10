import express from "express";
import { clientValidation } from "./client.validation";
import { ClientControllers } from "./client.controller";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/",
  validateRequest(clientValidation.clientValidationSchema),
  ClientControllers.createClient
);
router.get("/", ClientControllers.getAllClient);

export const ClientRoutes = router;
