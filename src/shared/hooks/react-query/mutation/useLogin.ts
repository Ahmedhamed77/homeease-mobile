import {useMutation} from '@tanstack/react-query';
import {loginUser} from '../../../../services/ApiService/auth';
import {MutationKeys} from '../../../../services/react-query';

export const useLoginUser = () => {
  //   const queryClient = useQueryClient();
  return useMutation(loginUser, {
    mutationKey: MutationKeys.userLogin,
    onMutate: async ({payload}) => {
      console.log(payload, '---createDynamicScanCheck data');
    },
    onError: err => {
      console.log(err, '----error ------');
    },
    onSettled: () => {},
  });
};
