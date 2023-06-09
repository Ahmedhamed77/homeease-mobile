import { useMutation } from '@tanstack/react-query';
import { updatePayment } from '../../../../services/ApiService/payment';
import { MutationKeys } from '../../../../services/react-query';

export const useUpdatePayment = () => {
  //   const queryClient = useQueryClient();
  return useMutation(updatePayment, {
    mutationKey: MutationKeys.updatePayment,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
