import { Product } from "../models/Product.js";
import { fetchPrice } from "./priceTracker.js";

export const updateCart = async () => {
  const updatedPrices = [];
  const urlArray = await Product.find({}, "id url");

  if (!urlArray) {
    console.log("Nothing to be tracked");
    return;
  }

  const idToPriceMapping = new Map();

  for (let i = 0; i < urlArray.length; i++) {
    const { id, url } = urlArray[i];

    let price = idToPriceMapping.get(id);
    if (!price) {
      price = await fetchPrice(url);
      idToPriceMapping.set(id, price);
    }

    updatedPrices.push({ id, price });
  }

  await Product.deleteMany({ current: { $lte: "$expectedPrice" } });

  await Product.bulkWrite(
    updatedPrices.map(({ id, price }) => ({
      updateOne: {
        filter: { id: id, currentPrice: { $ne: price } },
        update: {
          $push: { priceArray: { price, time: new Date().getTime() } },
          $set: { currentPrice: price },
          $min: { lowestPrice: price },
          $max: { highestPrice: price },
        },
      },
    }))
  );

  await Product.updateMany(
    {
      $expr: {
        $gt: [
          {
            $subtract: [
              { $arrayElemAt: ["$priceArray.time", -1] },
              { $arrayElemAt: ["$priceArray.time", 0] },
            ],
          },
          7 * 24 * 60 * 60 * 1000,
        ],
      },
    },
    {
      $pop: { priceArray: -1 },
    },
    { new: true }
  );

  console.log("updated cart");
};
