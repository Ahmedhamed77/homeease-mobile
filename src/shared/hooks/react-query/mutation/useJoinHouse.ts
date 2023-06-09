import {useMutation} from '@tanstack/react-query';
import {joinHouse} from '../../../../services/ApiService/house/joinHouse';
import {
  MutationKeys,
  QueryKeys,
  queryClient,
} from '../../../../services/react-query';
import {usePersistedStore} from '../../../../services/Store/store';
import {useNavigation} from '@react-navigation/native';

export const useJoinHouse = () => {
  const {userSession} = usePersistedStore(state => state);
  const navigation = useNavigation();
  return useMutation(joinHouse, {
    mutationKey: MutationKeys.joinHouse,
    onMutate: async ({invitationCode}) => {
      queryClient.invalidateQueries([
        QueryKeys.getHouse,
        userSession.user.houseId,
      ]);

      navigation.goBack();

      console.log(invitationCode, '---createDynamicScanCheck payload');
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => {},
  });
};
