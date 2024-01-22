import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { UnauthenticatedError } from "../errors/index.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new UnauthenticatedError("Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new UnauthenticatedError("Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError(error?.message || "Invalid access token");
  }
};
