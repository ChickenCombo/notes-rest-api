import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger"

const port = config.get<number>("port");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

app.listen(port, async () => {
  logger.info(`Server is up and running at http://localhost:${port}`);
  await connect();
});
