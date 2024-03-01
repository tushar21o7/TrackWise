import mongoose from "mongoose";

const trackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    users: [
      {
        email: { type: String, required: true },
        expectedPrice: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Track = mongoose.model("Track", trackSchema);
