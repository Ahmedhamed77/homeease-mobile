import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { ChoreAssignment } from './types';
interface GetChoreParams {
  houseId: string; assignmentId: string;
}
export const getChore = async ({ houseId, assignmentId }: GetChoreParams) => {
  const { data } = await axios.get<{ choreAssignment: ChoreAssignment }>(
    `${endpoints.houses}/${houseId}/chores/assignment/${assignmentId}`,
  );

  return data.choreAssignment;
}
