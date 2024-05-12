import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { orderValidation } from "./order.validation";
import { orderController } from "./order.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(orderValidation.OrderValidationSchema),
  orderController.createOrder
);
router.get("/", orderController.getAllOder);

export const orderRoutes = router;
