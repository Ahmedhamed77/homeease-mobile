import { useMutation } from '@tanstack/react-query';
import { deleteHouse } from '../../../../services/ApiService/house';
import { MutationKeys } from '../../../../services/react-query';

export const useDeleteHouse = () => {
  //   const queryClient = useQueryClient();
  return useMutation(deleteHouse, {
    mutationKey: MutationKeys.deleteHouse,
    onMutate: async () => {
      console.log("house deleted", '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
