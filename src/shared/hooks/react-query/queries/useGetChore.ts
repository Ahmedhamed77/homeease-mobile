import { useQuery } from '@tanstack/react-query';
import { getChore } from '../../../../services/ApiService/chores/getChore';
import { QueryKeys } from '../../../../services/react-query';

export const useGetChore = (houseId: string, assignmentId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getChore, houseId, assignmentId],
    queryFn: () => getChore({ houseId, assignmentId }),
    onSuccess: () => { },
  });
};
