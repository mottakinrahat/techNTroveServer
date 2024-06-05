import { Schema, model } from "mongoose";
import { TCart, TCartItem } from "./cart.interface";
const CartItemSchema = new Schema<TCartItem>({
  productId: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
});

// Mongoose schema for TCart
const cartSchema = new Schema<TCart>({
  cartItem: { type: [CartItemSchema], required: true },
});
export const CartModel = model("cartSchema", cartSchema);
