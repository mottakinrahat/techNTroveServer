import { z } from "zod";

const cartValidationSchema = z.object({
  productId: z.string(), // Assuming productId is a string
  // Define more properties here if needed
});

export const cartValidation = {
  cartValidationSchema,
};
