import { ScheduleTypes } from '../types/schedule';
import { CLASSTIME } from './getDate';

// string인 시간 받아서 Number로 바꾸고, pm, am에 맞게 리턴?
const timeStrToNum = (timeStr: string, meridiem: string) => {
  const timeNumber = Number(timeStr.split(' ')[0].replace(':', ''));
  const result = meridiem === 'pm' ? Math.floor(timeNumber + 1200) : timeNumber;
  return result;
};

// pm 또는 am을 반환하는 함수
const getMeridian = (timeStr: any) => {
  console.log(timeStr);
  const meridian = timeStr.split(' ')[1];
  console.log(meridian);

  return meridian;
};

export const checkDuplication = (
  input: ScheduleTypes,
  times: ScheduleTypes[]
) => {
  let isDuplicate = true;

  const inputMeridian = getMeridian(input.startTime);
  const inputStartTime = timeStrToNum(input.startTime, inputMeridian);
  const inputEndTime = timeStrToNum(input.endTime, inputMeridian);

  times &&
    Object.values(times).map((time: ScheduleTypes) => {
      const timeMeridian = getMeridian(time.startTime);
      const setStartTime = timeStrToNum(time.startTime, timeMeridian);
      const setEndTime = timeStrToNum(time.endTime, timeMeridian);

      if (
        inputMeridian === timeMeridian &&
        inputStartTime > Math.floor(setStartTime - CLASSTIME) &&
        inputEndTime < Math.floor(setEndTime + CLASSTIME)
      ) {
        isDuplicate = false;
      }
    });

  return isDuplicate;
};

// function timeStrToNum(time: string, mridiem: string) {
//   const str = Number(time.split(' ')[0].replace(':', ''));
//   const result = mridiem === 'pm' ? Math.floor(str + 1200) : str;

//   return result;
// }

// function getMeridian(time: string) {
//   const str = time.split(' ')[1];

//   return str;
// }
