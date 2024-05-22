import type { Express, Request, Response } from "express";
import { error as err } from "logger";
import { userModel } from "../../models";
export function validateLoginEndpoint(app: Express) {
  app.post("/api/validateLogin", async (req: Request, res: Response) => {
    try {
      if (req.body.login) {
        const login = await userModel
          .findOne({ login: req.body.login }, { login: 1, _id: 0 })
          .exec();
        res.send(login ? true : false);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
      err(error);
    }
  });
}
