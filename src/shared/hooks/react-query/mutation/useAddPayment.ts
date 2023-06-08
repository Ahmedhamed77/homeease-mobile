import {useMutation} from '@tanstack/react-query';
import {addPayment} from '../../../../services/ApiService/payment';
import {
  MutationKeys,
  QueryKeys,
  queryClient,
} from '../../../../services/react-query';
import {useNavigation} from '@react-navigation/native';

export const useAddPayment = () => {
  const navigation = useNavigation();
  return useMutation(addPayment, {
    mutationKey: MutationKeys.addPayment,
    onSuccess: (_data, params) => {
      queryClient.invalidateQueries([QueryKeys.getPayments, params.houseId]);
      navigation.goBack();
    },
    onError: err => {
      console.log(err, '------error------');
    },
    onSettled: () => {},
  });
};
