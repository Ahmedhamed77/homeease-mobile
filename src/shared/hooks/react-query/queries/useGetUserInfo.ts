import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../../services/react-query';
import {getUserInfo} from '../../../../services/ApiService/user';

export const useGetUserInfo = (userId: string) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QueryKeys.getUserInfo, userId],
    queryFn: () =>
      getUserInfo({
        userId,
      }),
    onError: (err: any) => {
      console.log('err', err?.response);
    },
    onSuccess: () => {},
  });
};
