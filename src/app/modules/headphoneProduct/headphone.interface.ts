import { Types } from "mongoose";
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
