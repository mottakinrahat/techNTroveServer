import { z } from 'zod';

// Define subdocument schemas with custom error messages
const TechnicalSpecificationSchema = z.object({
  model: z.string().min(1, { message: "Model is required" }),
  driverMagnet: z.string().min(1, { message: "Driver magnet is required" }),
  impedance: z.string().min(1, { message: "Impedance is required" }),
  sensitivity: z.string().min(1, { message: "Sensitivity is required" }),
  inputJack: z.string().min(1, { message: "Input jack is required" }),
});

const PhysicalSpecificationSchema = z.object({
  color: z.string().min(1, { message: "Color is required" }),
  cableLength: z.string().min(1, { message: "Cable length is required" }),
});

const WarrantyInfoSchema = z.object({
  warranty: z.string().min(1, { message: "Warranty info is required" }),
});

const SpecificationSchema = z.object({
  technicalSpecification: TechnicalSpecificationSchema,
  physicalSpecification: PhysicalSpecificationSchema,
  warrantyInfo: WarrantyInfoSchema,
});

const FeaturesSchema = z.object({
  model: z.string().min(1, { message: "Model is required" }),
  frequencyResponse: z.string().min(1, { message: "Frequency response is required" }),
  sensitivity: z.string().min(1, { message: "Sensitivity is required" }),
  impedance: z.string().min(1, { message: "Impedance is required" }),
  driverUnit: z.string().min(1, { message: "Driver unit is required" }),
  noiseCancellation: z.string().min(1, { message: "Noise cancellation is required" }),
  plugType: z.string().min(1, { message: "Plug type is required" }),
});

// Define main schema with custom error message
const HeadphoneProductValidationSchema = z.object({
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

export const HeadphoneProductValidation = {
    HeadphoneProductValidationSchema,
};
