import { Types } from "mongoose";
export interface TBasicInfo {
  model: string;
  display: string;
  healthTracking: string;
  sports: string;
  waterResistance: string;
  chargingTime: string;
  batteryInfo: string;
  sensor: string;
  processor: string;
  connectivity: string;
  material: string;
  OS: string;
  specialFeatures: string[];
}
export interface TExterior {
  color: string[];
}
export interface TWarrantyInfo {
  warranty: string;
}
export interface TSpecification {
  basicInfo: TBasicInfo;
  exterior: TExterior;
  warrantyInfo: TWarrantyInfo;
}

export interface TFeatures {
  model: string;
  display: string;
  healthTracking: string;
  sports: string;
  waterResistance: string;
  chargingTime: string;
}
export interface TProductImage {
  images: string;
}

export interface TSmartWatchProduct {
  brand: Types.ObjectId;
  productImage: [TProductImage];
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
  review: string;
  category: string;
  isDeleted: boolean;
}
