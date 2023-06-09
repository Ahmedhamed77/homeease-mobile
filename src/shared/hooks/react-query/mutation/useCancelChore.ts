import { useMutation } from '@tanstack/react-query';
import { cancelChore } from '../../../../services/ApiService/chores/cancelChore';
import { MutationKeys } from '../../../../services/react-query';

export const useCancelChore = () => {
  //   const queryClient = useQueryClient();
  return useMutation(cancelChore, {
    mutationKey: MutationKeys.cancelChore,
    onMutate: async () => {
      console.log("payment cancelled", '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
