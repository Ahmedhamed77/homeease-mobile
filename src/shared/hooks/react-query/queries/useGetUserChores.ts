import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../../services/react-query';
import {getUserChores} from '../../../../services/ApiService/chores';

export const useGetUserChores = (houseId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getUserChores, houseId],
    queryFn: () => getUserChores({houseId}),
    onSuccess: () => {},
  });
};
