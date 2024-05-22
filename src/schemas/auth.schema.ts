import mongoose from "mongoose";
const { Schema } = mongoose;

export const authSchema = new Schema({
  login: { type: String, required: true },
  key: { type: String, required: true },
  date: { type: Date, required: true },
});
