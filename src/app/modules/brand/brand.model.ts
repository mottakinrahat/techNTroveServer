import { Schema, model } from "mongoose";
import { TBrand } from "./brand.interface";

const BrandSchema = new Schema<TBrand>(
  {
    brandName: {
      type: String,
      required: true,
    },
    brandImage: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const BrandModel = model<TBrand>("Brand", BrandSchema);
