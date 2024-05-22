import type { Express, Request, Response } from "express";
import { error as err } from "logger";
import { getUser } from "../../helpers/get-user.helper";
import type { User } from "../../@types";
import { Roles } from "../../enums";
import { userModel } from "../../models";
export function UnBanEndpoint(app: Express) {
  app.post("/api/unbanUser", async (req: Request, res: Response) => {
    try {
      if (req.body.user) {
        if ((req.body.user as string).replaceAll(" ", "") !== "") {
          const user: User = (await getUser(req.body.login))!;
          if (user.role == Roles.admin) {
            await userModel
              .updateOne({ login: req.body.user }, { banned: false })
              .exec();
            res.send("ok");
          } else {
            res.send(403);
          }
        } else {
          res.send(400);
        }
      } else {
        res.send(400);
      }
    } catch (error) {
      res.sendStatus(500);
      err(error);
    }
  });
}
