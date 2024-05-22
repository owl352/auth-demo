import type { Express, Request, Response } from "express";
import { error as err } from "logger";
import { getUser } from "../../helpers/get-user.helper";
export function getUserEndpoint(app: Express) {
  app.post("/api/getUser", async (req: Request, res: Response) => {
    try {
      res.send(await getUser(req.body.login));
    } catch (error) {
      res.sendStatus(500);
      err(error);
    }
  });
}
