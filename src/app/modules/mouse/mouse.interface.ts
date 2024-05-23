import { Types } from "mongoose";

export interface TFeatures {
  model: string;
  frequency: string;
  precision: string;
  comfortable: string;
}
export interface TDescription {
  productDescription: string;
}

export interface TMouse {
  brand: Types.ObjectId;
  productImage: string[];
  price: number;
  regularPrice: number;
  color: string[];
  name: string;
  stock: boolean;
  description: TDescription;
  flashSale: boolean;
  discount: number;
  review: Types.ObjectId;
  category: string;
  isDeleted: boolean;
  features: TFeatures;
}
