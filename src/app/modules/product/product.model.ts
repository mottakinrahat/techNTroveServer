import { Schema, model } from "mongoose";
import { TProduct, TFeatures, TImages } from "./product.interface";

const featuresSchema = new Schema<TFeatures>({
  warranty: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
  },
  model: {
    type: String,
    required: true,
  },
});

const imageSchema = new Schema<TImages>({
  productImage: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema<TProduct>(
  {
    productName: {
      type: String,
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    productImage: {
      type: [imageSchema],
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
    features: {
      type: featuresSchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    flashSale: {
      type: Boolean,
      required: true,
    },
    flashSaleStartDate: {
      type: Date,
    },
    flashSaleEndDate: {
      type: Date,
    },
    discount: {
      type: Number,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    productQuantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<TProduct>("Product", productSchema);
