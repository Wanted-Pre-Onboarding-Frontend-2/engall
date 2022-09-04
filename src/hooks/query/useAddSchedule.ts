import { createSchedule } from '../../api/httpRequest';
import { useMutation } from 'react-query';
import { ScheduleTypes } from '../../types/schedule';
import { queryClient } from '../../queries/queryClient';
import { queryKeys } from '../../queries/queryKeys';

export const useAddSchedule = () => {
  const { mutate } = useMutation(
    (newSchedule: ScheduleTypes) => {
      createSchedule(newSchedule);
    },
    {
      onSuccess: () => queryClient.invalidateQueries([queryKeys.addSchedule]),
    }
  );
  return mutate;
};
