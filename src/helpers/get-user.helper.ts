import type { User } from "../@types";
import { userModel } from "../models";

export async function getUser(login: string): Promise<User | undefined> {
  const _user = await userModel.findOne({ login: login }, { _id: 0 }).exec();
  if (_user) {
    return _user as User;
  } else {
    return undefined;
  }
}
