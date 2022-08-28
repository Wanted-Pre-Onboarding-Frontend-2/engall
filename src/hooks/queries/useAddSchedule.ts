import { createSchedule } from './../../api/httpRequest';
import { useMutation, useQueryClient } from 'react-query';
import { ScheduleTypes } from '../../types/schedule';
import { queryClient } from './queryClient';
import { queryKeys } from './queryKeys';

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
