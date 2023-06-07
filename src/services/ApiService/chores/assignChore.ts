import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { AssignChorePayload, ChoreAssignment } from './types';

interface AssignChoreParams {
  houseId: string;
  payload: AssignChorePayload;
}

export const assignChore = async ({ houseId, payload }: AssignChoreParams) => {
  const { data } = await axios.post<{ choreAssignment: ChoreAssignment }>(
    `${endpoints.houses}/${houseId}/chores/assignment`,
    payload
  );
  console.log(data)

  return data.choreAssignment;
}
