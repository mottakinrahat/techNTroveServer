import { Types } from "mongoose";
export interface TFeatures {
  warranty: string;
  color?: string[];
  model: string;
}

export interface TImages {
  productImage: string;
}
export interface TProduct {
  _id?: string;
  productName: string;
  brand: Types.ObjectId;
  productImage: TImages[];
  regularPrice: number;
  price: number;
  stock: boolean;
  features: TFeatures;
  description: string;
  flashSale: boolean;
  flashSaleStartDate: Date;
  flashSaleEndDate: Date;
  discount: number;
  review: Types.ObjectId;
  category: string;
  isDeleted: boolean;
  productQuantity: string;
}
