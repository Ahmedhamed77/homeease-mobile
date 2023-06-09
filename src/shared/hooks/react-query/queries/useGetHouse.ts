import {useQuery} from '@tanstack/react-query';
import {getHouse} from '../../../../services/ApiService/house';
import {QueryKeys} from '../../../../services/react-query';
import {usePersistedStore} from '../../../../services/Store/store';

export const useGetHouse = (houseId: string) => {
  //   const queryClient = useQueryClient();
  const {setUserHouse} = usePersistedStore(state => state);
  return useQuery({
    queryKey: [QueryKeys.getHouse, houseId],
    queryFn: () => getHouse({houseId}),
    onSuccess: data => {
      setUserHouse(data);
    },
  });
};
