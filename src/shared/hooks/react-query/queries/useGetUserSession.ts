import {useQuery} from '@tanstack/react-query';
import {getUserSession} from '../../../../services/ApiService/auth';
import {QueryKeys} from '../../../../services/react-query';
import {usePersistedStore} from '../../../../services/Store/store';

export const useGetUserSession = () => {
  //   const queryClient = useQueryClient();
  const {setUserSession} = usePersistedStore(state => state);
  return useQuery({
    queryKey: QueryKeys.getUserSession,
    queryFn: getUserSession,
    onSuccess: data => {
      setUserSession(data);
    },
  });
};
