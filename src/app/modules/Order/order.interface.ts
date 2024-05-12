import { Types } from "mongoose";

export interface TProductId {
  productId: Types.ObjectId;
}

export interface TOrder {
  productsId: TProductId[];
  status: string;
  paymentMethod: string;
  address: string;
  phoneNumber: number;
}
