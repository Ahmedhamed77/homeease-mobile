import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../../services/react-query';
import {getPayments} from '../../../../services/ApiService/payment';

export const useGetPayments = (houseId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getPayments, houseId],
    queryFn: () => getPayments({houseId}),
    onSuccess: () => {},
  });
};
