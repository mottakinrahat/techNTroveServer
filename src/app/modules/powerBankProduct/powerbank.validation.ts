import { z } from 'zod';

// Define subdocument schemas with custom error messages
const MainFeatureSchema = z.object({
  capacity: z.string().min(1, { message: "Capacity is required" }),
  input: z.string().min(1, { message: "Input is required" }),
  output: z.string().min(1, { message: "Output is required" }),
  interface: z.string().min(1, { message: "Interface is required" }),
  button: z.string().min(1, { message: "Button is required" }),
});

const PhysicalSpecificationSchema = z.object({
  dimension: z.string().min(1, { message: "Dimension is required" }),
  color: z.array(z.string().min(1, { message: "Each color must be at least 1 character long" })),
});

const WarrantyInfoSchema = z.object({
  warranty: z.string().min(1, { message: "Warranty is required" }),
});

const SpecificationSchema = z.object({
  mainFeature: MainFeatureSchema,
  physicalSpecification: PhysicalSpecificationSchema,
  warrantyInfo: WarrantyInfoSchema,
});

const FeaturesSchema = z.object({
  model: z.string().min(1, { message: "Model is required" }),
  capacity: z.string().min(1, { message: "Capacity is required" }),
  output: z.string().min(1, { message: "Output is required" }),
  fastCharging: z.string().min(1, { message: "Fast charging is required" }),
  digitalDisplay: z.string().min(1, { message: "Digital display is required" }),
});

// Define main schema with custom error message
const PowerBankProductValidationSchema = z.object({
  
  brand: z.string(),
  headphoneType: z.string().min(1, { message: "Headphone type is required" }),
  productImage: z.array(z.string()),
  price: z.number().positive({ message: "Price must be a positive number" }),
  regularPrice: z.number().positive({ message: "Regular price must be a positive number" }),
  color: z.array(z.string().min(1, { message: "Each color must be at least 1 character long" })),
  name: z.string().min(1, { message: "Name is required" }),
  stock: z.boolean(),
  features: FeaturesSchema,
  specification: z.array(SpecificationSchema).nonempty({ message: "Specifications are required" }),
  description: z.string().min(1, { message: "Description is required" }),
  flashSale: z.boolean(),
  discount: z.number().nonnegative({ message: "Discount must be a non-negative number" }),
  review: z.string(),
  category: z.string().min(1, { message: "Category is required" }),
  isDeleted: z.boolean(),
});

export const PowerBankValidation = {
    PowerBankProductValidationSchema,
};
