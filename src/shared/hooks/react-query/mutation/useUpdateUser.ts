import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../../../services/ApiService/auth/updateUser';
import { MutationKeys } from '../../../../services/react-query';

export const useUpdateUser = () => {
  //   const queryClient = useQueryClient();
  return useMutation(updateUser, {
    mutationKey: MutationKeys.updateUser,
    onMutate: async ({ payload }) => {
      console.log(payload, '---createDynamicScanCheck data');
    },
    onError: err => {
      console.log(err, '----error ------');
    },
    onSettled: () => { },
  });
};
