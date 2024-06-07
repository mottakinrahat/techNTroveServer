import { Schema, model } from "mongoose";
import { TCartItem } from "./cart.interface";
const CartItemSchema = new Schema<TCartItem>({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SmartWatchProduct",
  },
});

export const CartModel = model("CartItemSchema", CartItemSchema);
