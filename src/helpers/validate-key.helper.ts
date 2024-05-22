import { log } from "logger";
import type { IValidate } from "../interfaces";
import { authModel } from "../models";
import { keyLifeTime } from "./constants.helper";

export async function validateToken({
  login,
  key,
}: IValidate): Promise<boolean> {
  const token = await authModel.findOne({ login: login, key: key }).exec();
  log(JSON.stringify({ login: login, key: key }));
  if (token) {
    log(new Date().getTime() - token.date.getTime());
    if (new Date().getTime() - token.date.getTime() < keyLifeTime) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
