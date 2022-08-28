import { useQuery } from 'react-query';
import { getSchedule } from '../../api/httpRequest';
import { Schedule } from '../../types/schedule';
import { queryKeys } from './queryKeys';

export const useGetSchedule = (): Schedule[] => {
  const { data = [] } = useQuery(queryKeys.schedule, getSchedule);
  return data;
};
