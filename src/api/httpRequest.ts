import { axiosInstance } from './../axiosInstance/index';
import { Schedule, ScheduleTypes } from '../types/schedule';

export const getSchedule = async (): Promise<Schedule[]> => {
  const { data } = await axiosInstance.get('/schedule');
  return data;
};

export const createSchedule = async (data: ScheduleTypes): Promise<void> => {
  const { data: response } = await axiosInstance.post('/schedule', data);
  return response.data;
};

export const deleteSchedule = async (id: number) => {
  const response = await axiosInstance.delete(`/schedule/${id}`);
  return response.data;
};
