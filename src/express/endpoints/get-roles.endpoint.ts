import type { Express, Request, Response } from "express";
import { Roles } from "../../enums";
import { error as err } from "logger";
export function getRolesEndpoint(app: Express) {
  app.post("/api/getRole", async (req: Request, res: Response) => {
    try {
      if (req.body.id) {
        res.send(Roles[req.body.id]);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
      err(error);
    }
  });
}
