import mongoose from "mongoose";
const { Schema } = mongoose;

export const userSchema = new Schema({
  login: { type: String, required: true },
  passHash: { type: String, required: true },
  username: { type: String, required: true },
  banned: { type: Boolean, required: true, default: false },
  history: { type: Schema.Types.Mixed, required: true, default: [] },
  actualDeliveries: { type: Schema.Types.Mixed, required: true, default: [] },
  transactions: { type: Schema.Types.Mixed, required: true, default: [] },
  actualTransactions: { type: Schema.Types.Mixed, required: true, default: [] },
  role: { type: Number, required: true, default: 0 },
});
