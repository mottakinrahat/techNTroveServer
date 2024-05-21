import { Types } from "mongoose";
// Define interfaces
export interface TMainFeature {
  capacity: string;
  input: string;
  output: string;
  interface: string;
  button: string;
}
export interface TPhysicalSpecification {
  dimension: string;
  color: string[];
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
  capacity: string;
  output: string;
  fastCharging: string;
  digitalDisplay: string;
}

export interface TPowerBankProduct {
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
