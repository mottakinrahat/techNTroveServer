import { z } from "zod";
import { Types } from "mongoose";

// Define the Zod schemas for the nested objects with custom error messages
const BasicInfoSchema = z.object({
  model: z.string().nonempty({ message: "Model is required" }),
  display: z.string().nonempty({ message: "Display is required" }),
  healthTracking: z.string().nonempty({ message: "Health tracking is required" }),
  sports: z.string().nonempty({ message: "Sports is required" }),
  waterResistance: z.string().nonempty({ message: "Water resistance is required" }),
  chargingTime: z.string().nonempty({ message: "Charging time is required" }),
  batteryInfo: z.string().nonempty({ message: "Battery info is required" }),
  sensor: z.string().nonempty({ message: "Sensor is required" }),
  processor: z.string().nonempty({ message: "Processor is required" }),
  connectivity: z.string().nonempty({ message: "Connectivity is required" }),
  material: z.string().nonempty({ message: "Material is required" }),
  OS: z.string().nonempty({ message: "Operating System is required" }),
  specialFeatures: z.array(z.string()).nonempty({ message: "Special features are required" }),
});

const ExteriorSchema = z.object({
  color: z.string().nonempty({ message: "Color is required" }),
});

const WarrantyInfoSchema = z.object({
  warranty: z.string().nonempty({ message: "Warranty is required" }),
});

const SpecificationSchema = z.object({
  basicInfo: BasicInfoSchema,
  exterior: ExteriorSchema,
  warrantyInfo: WarrantyInfoSchema,
});

const FeaturesSchema = z.object({
  model: z.string().nonempty({ message: "Model is required" }),
  display: z.string().nonempty({ message: "Display is required" }),
  healthTracking: z.string().nonempty({ message: "Health tracking is required" }),
  sports: z.string().nonempty({ message: "Sports is required" }),
  waterResistance: z.string().nonempty({ message: "Water resistance is required" }),
  chargingTime: z.string().nonempty({ message: "Charging time is required" }),
});

// Define the main SmartWatchProduct Zod schema with custom error messages
const SmartWatchProductValidationSchema = z.object({
  brand: z.string(),
  productImage: z.array(z.string()).nonempty({ message: "Product images are required" }),
  price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
  regularPrice: z.number().nonnegative({ message: "Regular price must be a non-negative number" }),
  color: z.array(z.string()).nonempty({ message: "At least one color is required" }),
  name: z.string().nonempty({ message: "Name is required" }),
  stock: z.boolean({ message: "Stock status is required" }),
  features: FeaturesSchema,
  specification: z.array(SpecificationSchema).nonempty({ message: "Specifications are required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  flashSale: z.boolean({ message: "Flash sale status is required" }),
  discount: z.number().nonnegative({ message: "Discount must be a non-negative number" }),
  review: z.string(),
  category: z.string().nonempty({ message: "Category is required" }),
  isDeleted: z.boolean().default(false),
});

export const smartWatchValidation = {
    SmartWatchProductValidationSchema

}

