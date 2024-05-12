import { Schema, model } from "mongoose";
import { TOrder, TProductId } from "./order.interface";

const productIdSchema = new Schema<TProductId>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const orderSchema = new Schema<TOrder>(
  {
    productsId: [productIdSchema],
    status: {
      type: String,
      enum: ["pending", "processing", "shipping", "received"],
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["BKash", "Nagad", "Stripe", "Cash In Delivery"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<TOrder>("Order", orderSchema);
