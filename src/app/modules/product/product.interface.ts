import { Types } from "mongoose";
// Define interfaces
export interface TMainFeature {
  frequency: string;
  signal: string;
  connectionType: string;
  microphone: string;
  battery: string;
  duration: string;
  chargingTime: string;
  standByTime: string;
  suitableFor: string;
}

export interface TPhysicalSpecification {
  cableLength: string;
  communicationDistance: string;
}

export interface TSpecification {
  mainFeature: TMainFeature;
  physicalSpecification: TPhysicalSpecification;
}

export interface TFeatures {
  mpn: string;
  model: string;
  material: string;
  communicationDistance: string;
  batteryCapacity: string;
  chargeInterface: string;
}

export interface TProduct {
  _id: string;
  brand: Types.ObjectId;
  productImage: string[];
  price: number;
  regularPrice: number;
  color: string[];
  name: string;
  stock: boolean;
  features: TFeatures;
  specification: TSpecification[];
  warranty: string;
  description: string;
  flashSale: boolean;
  discount: number;
  review: Types.ObjectId;
  category: string;
  isDeleted: boolean;
}
