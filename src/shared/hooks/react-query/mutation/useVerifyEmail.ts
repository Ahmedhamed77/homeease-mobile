import { useMutation } from '@tanstack/react-query';
import { emailVerification } from '../../../../services/ApiService/auth';
import { MutationKeys } from '../../../../services/react-query';

export const useVerifyEmail = () => {
  //   const queryClient = useQueryClient();
  return useMutation(emailVerification, {
    mutationKey: MutationKeys.verifyEmail,
    onMutate: async ({ email }) => {
      console.log(email, '---createDynamicScanCheck data');
    },
    onError: err => {
      console.log(err, '----error ------');
    },
    onSettled: () => { },
  });
};
