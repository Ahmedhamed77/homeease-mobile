import {useQuery} from '@tanstack/react-query';
import {getUserSession} from '../../../../services/ApiService/auth';
import {QueryKeys} from '../../../../services/react-query';

export const useGetUserSession = () => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: QueryKeys.getUserSession,
    queryFn: getUserSession,
    onSuccess: () => {},
  });
};
