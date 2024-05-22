import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { initEndPoints } from "./endpoints";
import { log } from "logger";
import { checkTokenMiddleware } from "./middlewares";
export function initExpress() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
    })
  );
  app.use(checkTokenMiddleware);
  initEndPoints(app);
  app.listen(process.env.PORT ?? 8080, () => {
    log(`Listening on: localhost:${process.env.PORT ?? 8080}`);
  });
}
