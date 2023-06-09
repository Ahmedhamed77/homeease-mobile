import { useMutation } from '@tanstack/react-query';
import { updateHouse } from '../../../../services/ApiService/house';
import { MutationKeys } from '../../../../services/react-query';

export const useUpdateHouse = () => {
  //   const queryClient = useQueryClient();
  return useMutation(updateHouse, {
    mutationKey: MutationKeys.updateHouse,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
}
