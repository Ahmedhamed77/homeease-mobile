import { useMutation } from '@tanstack/react-query';
import { joinHouse } from '../../../../services/ApiService/house/joinHouse';
import { MutationKeys } from '../../../../services/react-query';

export const useJoinHouse = () => {
  //   const queryClient = useQueryClient();
  return useMutation(joinHouse, {
    mutationKey: MutationKeys.joinHouse,
    onMutate: async ({ invitationCode }) => {
      console.log(invitationCode, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => { },
  });
};
