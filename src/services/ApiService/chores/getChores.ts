import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { UserChoresAssignment } from './types';

export const getUserChores = async ({ houseId }: { houseId: string }) => {
  console.log('here', houseId);
  const { data } = await axios.get<UserChoresAssignment>(
    `${endpoints.houses}/${houseId}/chores/assignment`,
  );

  return data.choreAssignments;
};
