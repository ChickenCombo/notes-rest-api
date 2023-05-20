import UserModel, { UserInput } from "../models/user.model";
import logger from "../utils/logger";

export const createUser = async (input: UserInput) => {
  try {
    return await UserModel.create(input);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
      throw new Error(error.message);
    }
  }
};
