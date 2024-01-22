import { Schema, Types, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    url: { type: String, required: true },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    isTracking: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
