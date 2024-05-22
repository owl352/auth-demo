import mongoose from "mongoose";
const { Schema } = mongoose;

export const productSchema = new Schema({
  name: { type: String, required: true },
  proice: { type: Number, required: true },
  images: { type: Schema.Types.Mixed, required: true, default: [] },
  inStock: { type: Boolean, required: true },
  isAvailable: { type: Boolean, required: true },
  description: { type: String, required: true },
  additions: { type: String },
  previewImg: { type: Schema.Types.Mixed, required: true, default: [] },
});
