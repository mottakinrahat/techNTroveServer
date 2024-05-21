import { z } from "zod";

// Zod schema for TMainFeature
const mainFeatureSchema = z.object({
  frequency: z.string(),
  impedance: z.string(),
  sensitivity: z.string(),
  connectionType: z.string(),
});

// Zod schema for TPhysicalSpecification
const physicalSpecificationSchema = z.object({
  color: z.string(),
  cableLength: z.string(),
  connector: z.string(),
  driver: z.string(),
  weight: z.string(),
});

// Zod schema for TWarrantyInfo
const warrantyInfoSchema = z.object({
  warranty: z.string(),
});

// Zod schema for TSpecification
const specificationSchema = z.object({
  mainFeature: mainFeatureSchema,
  physicalSpecification: physicalSpecificationSchema,
  warrantyInfo: warrantyInfoSchema,
});

// Zod schema for TFeatures
const featuresSchema = z.object({
  model: z.string(),
  frequencyResponse: z.string(),
  sensitivity: z.string(),
  impedance: z.string(),
  driverUnit: z.string(),
  noiseCancellation: z.string(),
  plugType: z.string(),
});

// Zod schema for TEarphoneProduct
const earphoneProductValidationSchema = z.object({
  brand: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: "Invalid ObjectId",
  }), // Assuming brand is an ObjectId
  headphoneType: z.string(),
  productImage: z.array(z.string()),
  price: z.number(),
  regularPrice: z.number(),
  color: z.array(z.string()),
  name: z.string(),
  stock: z.boolean(),
  features: featuresSchema,
  specification: z.array(specificationSchema),
  description: z.string(),
  flashSale: z.boolean(),
  discount: z.number(),
  review: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: "Invalid ObjectId",
  }), // Assuming review is an ObjectId
  category: z.string(),
  isDeleted: z.boolean().optional(),
});

// Export the Zod schema
export const EarphoneValidation = {
  earphoneProductValidationSchema,
};
