import { useMutation } from '@tanstack/react-query';
import { updateChore } from '../../../../services/ApiService/chores';
import { MutationKeys } from '../../../../services/react-query';

export const useUpdateChore = () => {
  //   const queryClient = useQueryClient();
  return useMutation(updateChore, {
    mutationKey: MutationKeys.updateChore,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
