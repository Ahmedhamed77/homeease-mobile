import { useMutation } from '@tanstack/react-query';
import { assignChore } from '../../../../services/ApiService/chores';
import { MutationKeys } from '../../../../services/react-query';

export const useAssignChore = () => {
  //   const queryClient = useQueryClient();
  return useMutation(assignChore, {
    mutationKey: MutationKeys.assignChore,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
