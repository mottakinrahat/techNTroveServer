import { Schema, model } from "mongoose";
import { TEventItem } from "./eventItem.interface";

const eventItemSchema = new Schema<TEventItem>({
  name: {
    type: String,
    required: [true, "name is Required"],
  },
  image: {
    type: String,
    required: [true, "image is Required"],
  },
});

export const EventItem = model<TEventItem>("EventItem", eventItemSchema);
