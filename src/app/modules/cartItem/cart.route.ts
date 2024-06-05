import validateRequest from "../../middleware/validateRequest";
import { cartController } from "./cart.controller";
import { cartValidation } from "./cart.validation";
import express from "express";
const router = express.Router();

router.post(
  "/",
  validateRequest(cartValidation.cartValidationSchema),
cartController.createCart
);
router.get("/", cartController.getAllCarts);

