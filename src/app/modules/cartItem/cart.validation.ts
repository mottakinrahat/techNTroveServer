import { z } from "zod";

const cartItemSchema = z.object({
    productId: z.string(), // Assuming productId is a string
    // Define more properties here if needed
});

const cartValidationSchema = z.object({
    cartItem: z.array(cartItemSchema),
});

export const cartValidation={
    cartValidationSchema
}
