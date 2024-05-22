import mongoose from "mongoose";
import { productSchema } from "../schemas";

export const productModel = mongoose.model("products", productSchema);
