import { ScheduleTypes } from "../types/schedule";
import { CLASSTIME } from "../utils/getDate";

export const duplicateTime = (input: ScheduleTypes, times: ScheduleTypes[]) => {
  let isDuplicate = true;

  const inputMridiem = getMridiem(input.start);
  const inputStartTime = timeToNumber(input.start, inputMridiem);
  const inputEndTime = timeToNumber(input.end, inputMridiem);

  times &&
    Object.values(times).map((time: ScheduleTypes) => {
      const timeMridiem = getMridiem(time.start);
      const startTime = timeToNumber(time.start, timeMridiem);
      const endTime = timeToNumber(time.end, timeMridiem);

      if (
        inputMridiem === timeMridiem &&
        inputStartTime > Math.floor(startTime - CLASSTIME) &&
        inputEndTime < Math.floor(endTime + CLASSTIME)
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
