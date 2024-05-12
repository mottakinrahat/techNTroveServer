import { z } from "zod";

// Define schema for product ID
const ProductIdSchema = z.object({
  productId: z.string(),
});

// Define schema for order
const OrderValidationSchema = z.object({
  productsId: z.array(ProductIdSchema),
  status: z.enum(["pending", "processing", "shipping", "received"]),
  paymentMethod: z.enum(["BKash", "Nagad", "Stripe", "Cash On Delivery"]),
  address: z.string(),
  phoneNumber: z.number(),
});

export const orderValidation = {
  OrderValidationSchema,
};
