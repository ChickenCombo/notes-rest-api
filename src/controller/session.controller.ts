import { Request, Response } from "express";
import { validateUserPasssword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt";
import config from "config";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  const user = await validateUserPasssword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTimeToLive") }
  );

  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTimeToLive") }
  );

  return res.send({ accessToken, refreshToken });
};
