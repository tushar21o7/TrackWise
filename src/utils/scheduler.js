import schedule from "node-schedule";
import { updateTracks } from "./updateTracks.js";
import { updateCart } from "./updateCart.js";

export const scheduleJob = () => {
  return schedule.scheduleJob("0 17 * * *", () => {
    try {
      updateTracks();
      updateCart();
    } catch (error) {
      console.log(error.message);
    }
  });
};
