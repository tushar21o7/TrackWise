import schedule from "node-schedule";
import { updateTracks } from "./updateTracks.js";

export const scheduleJob = () => {
  return schedule.scheduleJob("0 * * * *", () => {
    try {
      updateTracks();
    } catch (error) {
      console.log(error.message);
    }
  });
};
