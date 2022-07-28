import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const scheduleInfo = axios.create({
  baseURL: `${BASE_URL}/schedule`,
});
