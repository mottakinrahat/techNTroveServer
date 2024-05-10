import { Schema, model } from "mongoose";
import { TServices } from "./services.interface";

const servicesSchema = new Schema<TServices>(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    eventRules: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const Services = model<TServices>("Services", servicesSchema);
