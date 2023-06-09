import { useMutation } from '@tanstack/react-query';
import { cancelPayment } from '../../../../services/ApiService/payment';
import { MutationKeys } from '../../../../services/react-query';

export const useCancelPayment = () => {
  //   const queryClient = useQueryClient();
  return useMutation(cancelPayment, {
    mutationKey: MutationKeys.cancelPayment,
    onMutate: async () => {
      console.log("payment cancelled", '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
