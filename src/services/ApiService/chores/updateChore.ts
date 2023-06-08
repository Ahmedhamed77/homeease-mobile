import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {ChoreAssignment, UpdateChorePayload} from './types';

interface UpdateChoreParams {
  houseId: string;
  assignmentId: string;
  payload: UpdateChorePayload;
}

export const updateChore = async ({
  houseId,
  assignmentId,
  payload,
}: UpdateChoreParams) => {
  const {data} = await axios.put<{choreAssignment: ChoreAssignment}>(
    `${endpoints.houses}/${houseId}/chores/assignment/${assignmentId}`,
    payload,
  );
  console.log(data);

  return data.choreAssignment;
};
