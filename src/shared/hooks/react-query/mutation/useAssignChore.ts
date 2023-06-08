import {useMutation} from '@tanstack/react-query';
import {assignChore} from '../../../../services/ApiService/chores';
import {
  MutationKeys,
  QueryKeys,
  queryClient,
} from '../../../../services/react-query';
import {useNavigation} from '@react-navigation/native';

import {Alert} from 'react-native';

export const useAssignChore = () => {
  const navigation = useNavigation();

  return useMutation(assignChore, {
    mutationKey: MutationKeys.assignChore,
    onMutate: async ({payload}) => {},
    onSuccess: (_data, params) => {
      queryClient.invalidateQueries([QueryKeys.getUserChores, params.houseId]);
      navigation.goBack();
    },
    onError: (err: any) => {
      Alert.alert('Error', err);
    },
    onSettled: () => {},
  });
};
