import { useState } from "react";
import { apiRequest } from "../instance/instance";
import { ScheduleList, ScheduleProps } from "../../types/schedule";

export const useScheduleModel = () => {
  const addSchedule = async (data: ScheduleProps) => {
    const response: void | any = await apiRequest.post("/schedule", data);
    return response;
  };
  const getSchedule = async () =>
    await apiRequest.get<ScheduleList>("/schedule");

  return {
    addSchedule,
    getSchedule,
  };
};
