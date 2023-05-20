import { omit } from "lodash";
import UserModel, { UserInput } from "../models/user.model";
import logger from "../utils/logger";

export const createUser = async (input: UserInput) => {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
      throw new Error(error.message);
    }
  }
};

export const validateUserPasssword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
};
