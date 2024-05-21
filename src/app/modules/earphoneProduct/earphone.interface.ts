import { Types } from "mongoose";
// Define interfaces
export interface TMainFeature {
  frequency: string;
  impedance: string;
  sensitivity: string;
  connectionType: string;
}
export interface TPhysicalSpecification {
  color: string;
  cableLength: string;
  connector: string;
  driver: string;
  weight: string;
}
export interface TWarrantyInfo {
  warranty: string;
}
export interface TSpecification {
  mainFeature: TMainFeature;
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

export interface TEarphoneProduct {
  _id: string;
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
