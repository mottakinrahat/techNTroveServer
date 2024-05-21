import { Schema, model } from "mongoose";
import {
  TEarphoneProduct,
  TFeatures,
  TMainFeature,
  TPhysicalSpecification,
  TSpecification,
  TWarrantyInfo,
} from "./earphone.interface";

const mainFeatureSchema = new Schema<TMainFeature>({
  frequency: { type: String, required: true },
  impedance: { type: String, required: true },
  sensitivity: { type: String, required: true },
  connectionType: { type: String, required: true },
});

const physicalSpecificationSchema = new Schema<TPhysicalSpecification>({
  color: { type: String, required: true },
  cableLength: { type: String, required: true },
  connector: { type: String, required: true },
  driver: { type: String, required: true },
  weight: { type: String, required: true },
});

const warrantyInfoSchema = new Schema<TWarrantyInfo>({
  warranty: { type: String, required: true },
});

const specificationSchema = new Schema<TSpecification>({
  mainFeature: { type: mainFeatureSchema, required: true },
  physicalSpecification: { type: physicalSpecificationSchema, required: true },
  warrantyInfo: { type: warrantyInfoSchema, required: true },
});

const featuresSchema = new Schema<TFeatures>({
  model: { type: String, required: true },
  frequencyResponse: { type: String, required: true },
  sensitivity: { type: String, required: true },
  impedance: { type: String, required: true },
  driverUnit: { type: String, required: true },
  noiseCancellation: { type: String, required: true },
  plugType: { type: String, required: true },
});

const productEarphoneSchema = new Schema<TEarphoneProduct>(
  {
    _id: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    headphoneType: { type: String, required: true },
    productImage: { type: [String], required: true },
    price: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    color: { type: [String], required: true },
    name: { type: String, required: true },
    stock: { type: Boolean, required: true },
    features: { type: featuresSchema, required: true },
    specification: { type: [specificationSchema], required: true },
    description: { type: String, required: true },
    flashSale: { type: Boolean, required: true },
    discount: { type: Number, required: true },
    review: { type: Schema.Types.ObjectId, ref: "Review", required: true },
    category: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ProductEarphoneModel = model<TEarphoneProduct>(
  "EarphoneProduct",
  productEarphoneSchema
);
