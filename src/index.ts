import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";

const port = config.get<number>("port");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

app.listen(port, async () => {
  console.log("Server running on port 5000");
  await connect();
});
