import { z } from "zod";

// Define a Zod schema for validation
const ReviewValidationSchema = z.object({
  productId: z.string().min(1, { message: "productId is required" }),
  username: z.string().min(1, { message: "username is required" }),
  userEmail: z.string().min(1, { message: "User Email is required" }),
  reviewDescription: z.string().min(1, { message: "description is required" }),
  rating: z
    .number()
    .min(0, { message: "rating must be at least 0" })
    .max(5, { message: "rating cannot be greater than 5" }),
  isDeleted: z.boolean(),
});

export const reviewValidation = {
  ReviewValidationSchema,
};
