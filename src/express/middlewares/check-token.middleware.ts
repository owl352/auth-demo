import { pagesWithTokenAcces } from "../../helpers/constants.helper";
import type { Request } from "express";
import { validateToken } from "../../helpers/validate-key.helper";
import { log } from "logger";

export async function checkTokenMiddleware(
  req: Request,
  res: any,
  next: any
): Promise<any> {
  if (pagesWithTokenAcces.includes(req.url)) {
    if (req.body.login !== undefined && req.body.key !== undefined) {
      const isValidKey: boolean = await validateToken({
        login: req.body.login,
        key: req.body.key,
      });
      if (isValidKey) {
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    }
  } else {
    next();
  }
}
