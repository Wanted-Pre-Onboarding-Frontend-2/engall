import { atom } from "recoil";
import { ScheduleTypes } from "../types/schedule";

export const loadedStatus = atom({
  key: "loadedStatus",
  default: false,
});

export const activeStatus = atom({
  key: "activeStatus",
  default: false,
});

export const openStatus = atom({
  key: "openStatus",
  default: false,
});

export const TimeTableData = atom<ScheduleTypes[]>({
  key: "TimeTableData",
  default: [],
});
