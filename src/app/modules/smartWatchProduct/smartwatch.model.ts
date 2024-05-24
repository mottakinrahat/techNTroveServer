import { Schema, model, Types } from "mongoose";
import {
  TBasicInfo,
  TExterior,
  TFeatures,
  TProductImage,
  TSmartWatchProduct,
  TSpecification,
  TWarrantyInfo,
} from "./smartwatch.interface";

// Sub-schemas for nested objects
const BasicInfoSchema = new Schema<TBasicInfo>({
  model: { type: String, required: true },
  display: { type: String, required: true },
  healthTracking: { type: String, required: true },
  sports: { type: String, required: true },
  waterResistance: { type: String, required: true },
  chargingTime: { type: String, required: true },
  batteryInfo: { type: String, required: true },
  sensor: { type: String, required: true },
  processor: { type: String, required: true },
  connectivity: { type: String, required: true },
  material: { type: String, required: true },
  OS: { type: String, required: true },
  specialFeatures: { type: [String], required: true },
});

const ExteriorSchema = new Schema<TExterior>({
  color: { type: [String], required: true },
});

const WarrantyInfoSchema = new Schema<TWarrantyInfo>({
  warranty: { type: String, required: true },
});

const SpecificationSchema = new Schema<TSpecification>({
  basicInfo: { type: BasicInfoSchema, required: true },
  exterior: { type: ExteriorSchema, required: true },
  warrantyInfo: { type: WarrantyInfoSchema, required: true },
});

const FeaturesSchema = new Schema<TFeatures>({
  model: { type: String, required: true },
  display: { type: String, required: true },
  healthTracking: { type: String, required: true },
  sports: { type: String, required: true },
  waterResistance: { type: String, required: true },
  chargingTime: { type: String, required: true },
});
const smartwatchImagesSchema = new Schema<TProductImage>({
  images: { type: String, required: true },
});

const SmartWatchProductSchema = new Schema<TSmartWatchProduct>(
  {
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    productImage: { type: [smartwatchImagesSchema], required: true },
    price: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    color: { type: [String], required: true },
    name: { type: String, required: true },
    stock: { type: Boolean, required: true },
    features: { type: FeaturesSchema, required: true },
    specification: { type: [SpecificationSchema], required: true },
    description: { type: String, required: true },
    flashSale: { type: Boolean, required: true },
    discount: { type: Number, required: true },
    review: { type: Schema.Types.ObjectId, ref: "Review", required: true },
    category: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const SmartWatchProductModel = model<TSmartWatchProduct>(
  "SmartWatchProduct",
  SmartWatchProductSchema
);
