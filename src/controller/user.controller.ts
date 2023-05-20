import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);

    logger.info(`User created: ${user?._id}`);

    return res.send(omit(user?.toJSON(), "password"));
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
      return res.status(409).send(error.message);
    }
  }
};
