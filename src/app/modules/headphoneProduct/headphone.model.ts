import { Schema, model, Types } from "mongoose";

// Define interfaces
export interface TTechnicalSpecification {
  model: string;
  driverMagnet: string;
  impedance: string;
  sensitivity: string;
  inputJack: string;
}
export interface TPhysicalSpecification {
  color: string;
  cableLength: string;
}
export interface TWarrantyInfo {
  warranty: string;
}
export interface TSpecification {
  technicalSpecification: TTechnicalSpecification;
  physicalSpecification: TPhysicalSpecification;
  warrantyInfo: TWarrantyInfo;
}

export interface TFeatures {
  model: string;
  frequencyResponse: string;
  sensitivity: string;
  impedance: string;
  driverUnit: string;
  noiseCancellation: string;
  plugType: string;
}

export interface THeadphoneProduct {
  
  brand: Types.ObjectId;
  headphoneType: string;
  productImage: string[];
  price: number;
  regularPrice: number;
  color: string[];
  name: string;
  stock: boolean;
  features: TFeatures;
  specification: TSpecification[];
  description: string;
  flashSale: boolean;
  discount: number;
  review: Types.ObjectId;
  category: string;
  isDeleted: boolean;
}

// Sub-schemas for nested objects
const TechnicalSpecificationSchema = new Schema<TTechnicalSpecification>({
  model: { type: String, required: true },
  driverMagnet: { type: String, required: true },
  impedance: { type: String, required: true },
  sensitivity: { type: String, required: true },
  inputJack: { type: String, required: true },
});

const PhysicalSpecificationSchema = new Schema<TPhysicalSpecification>({
  color: { type: String, required: true },
  cableLength: { type: String, required: true },
});

const WarrantyInfoSchema = new Schema<TWarrantyInfo>({
  warranty: { type: String, required: true },
});

const SpecificationSchema = new Schema<TSpecification>({
  technicalSpecification: { type: TechnicalSpecificationSchema, required: true },
  physicalSpecification: { type: PhysicalSpecificationSchema, required: true },
  warrantyInfo: { type: WarrantyInfoSchema, required: true },
});

const FeaturesSchema = new Schema<TFeatures>({
  model: { type: String, required: true },
  frequencyResponse: { type: String, required: true },
  sensitivity: { type: String, required: true },
  impedance: { type: String, required: true },
  driverUnit: { type: String, required: true },
  noiseCancellation: { type: String, required: true },
  plugType: { type: String, required: true },
});

const HeadphoneProductSchema = new Schema<THeadphoneProduct>(
  {
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    headphoneType: { type: String, required: true },
    productImage: { type: [String], required: true },
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

export const HeadphoneProductModel = model<THeadphoneProduct>(
  "HeadphoneProduct",
  HeadphoneProductSchema
);
