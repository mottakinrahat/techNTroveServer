import { Schema, model } from "mongoose";
import { TClient } from "./client.interface";

const clientSchema = new Schema<TClient>({
  name: {
    type: String,
    required: [true, "name is Required"],
  },
  image: {
    type: String,
    required: [true, "image is Required"],
  },
  designation: {
    type: String,
    required: [true, "designation is Required"],
  },
  quote: {
    type: String,
    required: [true, "quote is Required"],
  },
});

export const Client = model<TClient>("Client", clientSchema);
