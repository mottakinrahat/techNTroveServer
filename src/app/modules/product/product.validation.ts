import { z } from "zod";

const MainFeatureValidationSchema = z.object({
  frequency: z.string().nonempty("Frequency is required"),
  signal: z.string().nonempty("Signal is required"),
  connectionType: z.string().nonempty("Connection type is required"),
  microphone: z.string().nonempty("Microphone is required"),
  battery: z.string().nonempty("Battery is required"),
  duration: z.string().nonempty("Duration is required"),
  chargingTime: z.string().nonempty("Charging time is required"),
  standByTime: z.string().nonempty("Standby time is required"),
  suitableFor: z.string().nonempty("Suitable for is required"),
});

const PhysicalSpecificationValidationSchema = z.object({
  cableLength: z.string().nonempty("Cable length is required"),
  communicationDistance: z
    .string()
    .nonempty("Communication distance is required"),
});

const SpecificationValidationSchema = z.object({
  mainFeature: MainFeatureValidationSchema,
  physicalSpecification: PhysicalSpecificationValidationSchema,
});

const FeaturesValidationSchema = z.object({
  mpn: z.string().nonempty("MPN is required"),
  model: z.string().nonempty("Model is required"),
  material: z.string().nonempty("Material is required"),
  communicationDistance: z
    .string()
    .nonempty("Communication distance is required"),
  batteryCapacity: z.string().nonempty("Battery capacity is required"),
  chargeInterface: z.string().nonempty("Charge interface is required"),
});

export const ProductValidationSchema = z.object({
  brand: z.string().nonempty("Brand is required"),
  productImage: z.array(z.string().nonempty("Product image is required")),
  price: z.number().nonnegative("Price must be a non-negative number"),
  regularPrice: z
    .number()
    .nonnegative("Regular price must be a non-negative number"),
  color: z.array(z.string().nonempty("Color is required")),
  name: z.string().nonempty("Name is required"),
  stock: z.boolean().default(false),
  features: FeaturesValidationSchema,
  specification: z.array(SpecificationValidationSchema),
  warranty: z.string().nonempty("Warranty is required"),
  description: z.string().nonempty("Description is required"),
  flashSale: z.boolean().default(false),
  discount: z.number().nonnegative("Discount must be a non-negative number"),
  review: z.string().nonempty("Review is required"),
  category: z.string().nonempty("Category is required"),
  isDeleted: z.boolean().optional(),
});
export const productsValidationSchema = {
  ProductValidationSchema,
};
