import { Track } from "../models/Track.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import { sendMailToUser } from "../utils/mailer.js";

export const trackProduct = async (req, res) => {
  const {
    name,
    url,
    email,
    currentPrice,
    expectedPrice,
    id: productId,
  } = req.body;

  const alreadyTracking = await Track.findOne({
    id: productId,
    users: {
      $elemMatch: { email },
    },
  });

  if (alreadyTracking) {
    throw new BadRequestError(
      `Product with id ${productId} is already being tracked by user ${email}`
    );
  }

  const alreadyPresent = await Track.findOne({ id: productId });

  if (!alreadyPresent) {
    await Track.create({
      name,
      url,
      currentPrice,
      productId,
      id: productId,
    });
  }

  await Track.findOneAndUpdate(
    { id: productId },
    {
      $push: {
        users: { email, expectedPrice },
      },
    }
  );

  const details = { name, email, url };
  sendMailToUser(details, "Welcome");

  res.status(StatusCodes.OK).json({ msg: `You started tracking ${productId}` });
};
