import mongoose from "mongoose";
import { authSchema } from "../schemas";

export const authModel = mongoose.model("auth", authSchema);
