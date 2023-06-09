import {useMutation} from '@tanstack/react-query';
import {createUser} from '../../../../services/ApiService/auth';
import {MutationKeys} from '../../../../services/react-query';

export const useCreateUser = () => {
  //   const queryClient = useQueryClient();
  return useMutation(createUser, {
    mutationKey: MutationKeys.createUser,

    onError: err => {
      console.log(err, '----error ------');
    },
    onSettled: () => {},
  });
};
