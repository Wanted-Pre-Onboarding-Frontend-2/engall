import { add, format } from "date-fns";

export const submitTime = (time: Date, meridiem: string) => {
  const startAddTime = add(time, {
    hours: meridiem === "pm" ? 12 : 0,
  });

  const endAddTime = add(time, {
    hours: meridiem === "pm" ? 12 : 0,
    minutes: 40,
  });

  const startTime = format(startAddTime, "HH:mm");
  const endTime = format(endAddTime, "HH:mm");

  return { startTime, endTime };
};
