import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Schedule, NewClass } from '../types/schedule';

const BASE_URL = 'http://localhost:8000';

export const getSchedule = () =>
  axios
    .get<Schedule[]>(`${BASE_URL}/schedule`)
    .then((response) => response.data);
