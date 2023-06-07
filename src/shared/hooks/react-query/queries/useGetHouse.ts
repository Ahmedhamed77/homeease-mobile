import { useQuery } from '@tanstack/react-query';
import { getHouse } from '../../../../services/ApiService/house';
import { QueryKeys } from '../../../../services/react-query';

export const useGetHouse = (houseId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getHouse, houseId],
    queryFn: () => getHouse({ houseId }),
    onSuccess: () => { },
  });
};
