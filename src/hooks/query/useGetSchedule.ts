import { useQuery } from 'react-query';
import { getSchedule } from '../../api/ScheduleAPI';
import { queryKeys } from '../../queries/queryKeys';
import { Schedule } from '../../types/schedule';

export const useGetSchedule = (): Schedule[] => {
  const { data } = useQuery(queryKeys.schedule, getSchedule);
  return data;
};
