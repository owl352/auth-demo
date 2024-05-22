import type { Express, Request, Response } from "express";
import { error as err, log } from "logger";
import { userModel } from "../../models";
import { auth } from "../../helpers/auth.helper";
export function authEndpoint(app: Express) {
  app.post("/api/auth", async (req: Request, res: Response) => {
    try {
      if (req.body.pass && req.body.login) {
        const user = await userModel.findOne({ login: req.body.login }).exec();
        if (user) {
          const token = await auth({ pass: req.body.pass, user: user });
          if (token !== undefined) {
            res.send(token);
          } else {
            res.sendStatus(401);
          }
        } else {
          res.sendStatus(404);
        }
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
      err(error);
    }
  });
}
