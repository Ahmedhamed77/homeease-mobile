import {useMutation} from '@tanstack/react-query';
import {LoginPayload, loginUser} from '../../../../services/ApiService/auth';
import {MutationKeys} from '../../../../services/react-query';

export const useLoginUser = () => {
  //   const queryClient = useQueryClient();
  return useMutation(loginUser, {
    mutationKey: MutationKeys.userLogin,
    onMutate: async (data: LoginPayload) => {
      console.log(data, '---createDynamicScanCheck data');
    },
    onError: err => {
      console.log(err, '----error ------');
    },
    onSettled: () => {},
  });
};
