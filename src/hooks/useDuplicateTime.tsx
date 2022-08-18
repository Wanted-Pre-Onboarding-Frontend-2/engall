import { ScheduleTypes } from "../types/schedule";
import { CLASSTIME } from "../utils/getDate";

export const duplicateTime = (
  current: ScheduleTypes,
  times: ScheduleTypes[]
) => {
  let isDuplicate = true;

  const currentMridiem = getMridiem(current.start);
  const currentStartTime = timeToNumber(current.start, currentMridiem);
  const currentEndTime = timeToNumber(current.end, currentMridiem);

  times &&
    Object.values(times).map((time: ScheduleTypes) => {
      const timeMridiem = getMridiem(time.start);
      const startTime = timeToNumber(time.start, timeMridiem);
      const endTime = timeToNumber(time.end, timeMridiem);

      if (
        currentMridiem === timeMridiem &&
        currentStartTime > Math.floor(startTime - CLASSTIME) &&
        currentEndTime < Math.floor(endTime + CLASSTIME)
      ) {
        isDuplicate = false;
      }
    });

  return isDuplicate;
};

function timeToNumber(time: string, mridiem: string) {
  const str = Number(time.split(" ")[0].replace(":", ""));
  const result = mridiem === "pm" ? Math.floor(str + 1200) : str;

  return result;
}

function getMridiem(time: string) {
  const str = time.split(" ")[1];

  return str;
}
