import { Types } from "mongoose";

export interface TCartItem{
    productId:Types.ObjectId;
}

export interface TCart{
    cartItem:TCartItem[];
}