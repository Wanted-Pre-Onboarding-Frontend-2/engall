import axios from 'axios';
import { Schedule, NewSchedule } from '../types/schedule';

const BASE_URL = 'http://localhost:8000';

export const getSchedule = () =>
  axios
    .get<Schedule[]>(`${BASE_URL}/schedule`)
    .then((response) => response.data);

export const createSchedule = async (data: NewSchedule) => {
  const { data: response } = await axios.post(`${BASE_URL}/schedule`, data);
  return response.data;
};

export const deleteSchedule = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/schedule/${id}`);
  return response.data;
};
