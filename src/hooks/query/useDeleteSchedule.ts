import { deleteSchedule } from '../../api/ScheduleAPI';
import { useMutation } from 'react-query';
import { queryClient } from '../../queries/queryClient';
import { queryKeys } from '../../queries/queryKeys';

export const useDeleteSchedule = () => {
  const { mutate } = useMutation(
    (id: number) => {
      deleteSchedule(id);
    },
    {
      onSuccess: () =>
        queryClient.invalidateQueries([queryKeys.deleteSchedule]),
    }
  );
  return mutate;
};
