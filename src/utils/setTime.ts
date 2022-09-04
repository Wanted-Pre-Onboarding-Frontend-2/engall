import { add, format } from 'date-fns';

export const setTime = (time: Date, meridiem: string) => {
  const setStartTime = add(time, {
    hours: meridiem === 'pm' ? 12 : 0,
  });

  const setEndTime = add(time, {
    hours: meridiem === 'pm' ? 12 : 0,
    minutes: 40,
  });

  const startTime = format(setStartTime, 'HH:mm');
  const endTime = format(setEndTime, 'HH:mm');

  return { startTime, endTime };
};
