import { useMutation } from '@tanstack/react-query';
import { createHouse } from '../../../../services/ApiService/house';
import { MutationKeys } from '../../../../services/react-query';

export const useCreateHouse = () => {
  //   const queryClient = useQueryClient();
  return useMutation(createHouse, {
    mutationKey: MutationKeys.createHouse,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
}
