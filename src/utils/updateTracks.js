import { Track } from "../models/Track.js";
import { fetchPrice } from "./priceTracker.js";
import { sendMailToUser } from "./mailer.js";

export const updateTracks = async () => {
  const updatedPrices = [];
  const urlArray = await Track.find({}, "id url");

  if (!urlArray) {
    console.log("Nothing to be tracked");
    return;
  }

  for (let i = 0; i < urlArray.length; i++) {
    const { id, url } = urlArray[i];
    const price = await fetchPrice(url);
    updatedPrices.push({ id, price });
  }

  const updateCurrentPrices = await Track.bulkWrite(
    updatedPrices.map(({ id, price }) => ({
      updateOne: {
        filter: { id: id },
        update: { $set: { currentPrice: price } },
      },
    }))
  );

  const detailsOfUsersToBeDeleted = await Track.aggregate([
    {
      $addFields: {
        matchingUsers: {
          $filter: {
            input: "$users",
            as: "user",
            cond: { $gte: ["$$user.expectedPrice", "$currentPrice"] },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$name",
        email: "$matchingUsers.email",
        url: "$url",
      },
    },
    {
      $unwind: "$email",
    },
    {
      $group: {
        _id: null,
        emails: { $addToSet: { email: "$email", url: "$url", name: "$name" } },
      },
    },
    {
      $project: {
        _id: 0,
        emails: 1,
      },
    },
  ]);

  const updateUsers = await Track.updateMany([
    {
      $set: {
        users: {
          $filter: {
            input: "$users",
            as: "user",
            cond: { $lt: ["$$user.expectedPrice", "$currentPrice"] },
          },
        },
      },
    },
  ]);

  const recipients = detailsOfUsersToBeDeleted[0]?.emails;
  if (!recipients) {
    console.log("0 recipients");
    return;
  }

  for (let i = 0; i < recipients.length; i++) {
    sendMailToUser(recipients[i], "Alert");
  }

  console.log("updated tracks");
};
