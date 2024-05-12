import { Schema, model } from "mongoose";
import {
  TFeatures,
  TMainFeature,
  TPhysicalSpecification,
  TProduct,
  TSpecification,
} from "./product.interface";

const mainFeatureSchema = new Schema<TMainFeature>({
  frequency: { type: String, required: true },
  signal: { type: String, required: true },
  connectionType: { type: String, required: true },
  microphone: { type: String, required: true },
  battery: { type: String, required: true },
  duration: { type: String, required: true },
  chargingTime: { type: String, required: true },
  standByTime: { type: String, required: true },
  suitableFor: { type: String, required: true },
});

// Schema for TPhysicalSpecification
const physicalSpecificationSchema = new Schema<TPhysicalSpecification>({
  cableLength: { type: String, required: true },
  communicationDistance: { type: String, required: true },
});

// Schema for TSpecification
const specificationSchema = new Schema<TSpecification>({
  mainFeature: { type: mainFeatureSchema, required: true },
  physicalSpecification: { type: physicalSpecificationSchema, required: true },
});

const featuresSchema = new Schema<TFeatures>({
  mpn: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  communicationDistance: {
    type: String,
    required: true,
  },
  batteryCapacity: {
    type: String,
    required: true,
  },
  chargeInterface: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema<TProduct>(
  {
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    productImage: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    color: {
      type: [String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
    features: {
      type: featuresSchema,
      required: true,
    },
    specification: {
      type: [specificationSchema],
      required: true,
    },
    warranty: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    flashSale: {
      type: Boolean,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<TProduct>("Product", productSchema);
