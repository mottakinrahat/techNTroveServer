import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { productsValidationSchema } from "./product.validation";
import { productController } from "./product.controller";
import auth from "../../middleware/auth";
const router = express.Router();

router.post(
  "/",
  validateRequest(productsValidationSchema.ProductValidationSchema),
  productController.createProduct
);
router.get("/", auth("user"), productController.getAllProduct);
router.get("/:id", productController.getSingleProduct);

export const productRoutes = router;
