import { initExpress } from "./src/express";
import { mongoConnect } from "./src/helpers/mongo-init.helper";

async function main() {
  await mongoConnect();
  initExpress();
}

main();
