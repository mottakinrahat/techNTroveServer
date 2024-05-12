import { z } from "zod";

const BrandValidationSchema = z.object({
  brandName: z.string().min(1, { message: "Brand name is required" }),
  brandImage: z.string().url({ message: "Invalid brand image URL" }),
  isDeleted: z.boolean(),
});
export const brandsValidation = {
  BrandValidationSchema,
};
