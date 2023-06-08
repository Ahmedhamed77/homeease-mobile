import {useMutation} from '@tanstack/react-query';
import {createHouse} from '../../../../services/ApiService/house';
import {
  MutationKeys,
  QueryKeys,
  queryClient,
} from '../../../../services/react-query';
import {usePersistedStore} from '../../../../services/Store/store';
import {useNavigation} from '@react-navigation/native';

export const useCreateHouse = () => {
  const {userSession} = usePersistedStore(state => state);
  const navigation = useNavigation();

  return useMutation(createHouse, {
    mutationKey: MutationKeys.createHouse,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueryKeys.getHouse,
        userSession.user.houseId,
      ]);

      navigation.goBack();
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => {},
  });
};
