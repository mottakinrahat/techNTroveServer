import { z } from "zod";
const TProductImage = z.object({
  productImage: z.string(),
});
const TFeatureValidationSchema = z.object({
  warranty: z.string(),
  color: z.array(z.string()),
  model: z.string().nonempty("Model is required"),
});

export const ProductValidationSchema = z.object({
  productName: z.string().nonempty("Product Name is required"),
  brand: z.string().nonempty("Brand is required"),
  productImage: z.array(TProductImage),
  price: z.number().nonnegative("Price must be a non-negative number"),
  regularPrice: z
    .number()
    .nonnegative("Regular price must be a non-negative number"),
  stock: z.boolean().default(false),
  features: TFeatureValidationSchema,
  description: z.string().nonempty("Description is required"),
  flashSale: z.boolean().default(false),
  flashSaleStartDate: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  flashSaleEndDate: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  discount: z.number().nonnegative("Discount must be a non-negative number"),
  review: z.string().nonempty("Review is required"),
  category: z.string().nonempty("Category is required"),
  productQuantity: z.string().nonempty("Quantity is required"),
  isDeleted: z.boolean().optional(),
});
export const productsValidationSchema = {
  ProductValidationSchema,
};
