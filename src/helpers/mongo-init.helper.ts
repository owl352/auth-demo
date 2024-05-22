import mongoose from "mongoose";
import { log } from "logger";

export async function mongoConnect() {
  const mongo = await mongoose.connect(process.env.MONGO!, { autoIndex: true });
  log("SUCCESSFULLY CONNECTED");
  return mongo;
}
