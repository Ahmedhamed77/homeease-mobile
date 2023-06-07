import { useMutation } from '@tanstack/react-query';
import { addPayment } from '../../../../services/ApiService/payment';
import { MutationKeys } from '../../../../services/react-query';

export const useAddPayment = () => {
  //   const queryClient = useQueryClient();
  return useMutation(addPayment, {
    mutationKey: MutationKeys.addPayment,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
