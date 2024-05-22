import type { IAuth } from "../interfaces/IAuth";
import { authModel } from "../models";

export async function auth({ pass, user }: IAuth): Promise<string | undefined> {
  const isCorrect: boolean = await Bun.password.verify(pass, user.passHash);
  if (isCorrect) {
    const date = new Date();
    const newToken = await Bun.password.hash(`${date}${user.login}${pass}`);
    await authModel.deleteOne({ login: user.login }).exec();
    await authModel.create({
      login: user.login,
      key: newToken,
      date: date,
    });
    return newToken;
  }
  return undefined;
}
