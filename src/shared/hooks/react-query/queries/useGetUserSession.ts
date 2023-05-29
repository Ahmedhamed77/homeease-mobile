import {useMutation, useQuery} from '@tanstack/react-query';
import {
  LoginPayload,
  getUserSession,
  loginUser,
} from '../../../../services/ApiService/auth';
import {MutationKeys, QueryKeys} from '../../../../services/react-query';

export const useGetUserSession = () => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: QueryKeys.getUserSession,
    queryFn: getUserSession,
  });
};
