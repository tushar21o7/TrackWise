import { Schema, Types, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    image: { type: String, required: true },
    initialPrice: { type: Number, required: true },
    lowestPrice: { type: Number, required: true },
    highestPrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    targetPrice: { type: Number, default: 1000000 },
    priceArray: [
      {
        price: { type: Number },
        time: { type: Number },
      },
    ],
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
