import {useQuery} from '@tanstack/react-query';
import {getPayment} from '../../../../services/ApiService/payment';
import {QueryKeys} from '../../../../services/react-query';

export const useGetPayment = (houseId: string, paymentId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getPayments, houseId],
    queryFn: () => getPayment({houseId, paymentId}),
    onSuccess: () => {},
  });
};
