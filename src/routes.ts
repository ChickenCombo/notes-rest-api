import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validate";
import { createUserSchema } from "./schema/user.schema";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
  });

  app.post("/api/users", validate(createUserSchema), createUserHandler);
};

export default routes;
