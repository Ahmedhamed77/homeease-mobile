import {axios} from '../axios';
import {endpoints} from '../endpoints';
import {AssignChorePayload, ChoreAssignment} from './types';

interface AssignChoreParams {
  houseId: string;
  payload: AssignChorePayload;
}

export const assignChore = async (params: AssignChoreParams) => {
  const payload = {
    houseId: params.houseId,

    userId: params.payload.userId,
    choreId: params.payload.choreId,
    dueDate: new Date(params.payload.dueDate),
  };
  const res = await axios.post<{choreAssignment: ChoreAssignment}>(
    `${endpoints.houses}/${params.houseId}/chores/assignment`,
    payload,
  );

  return res.data.choreAssignment;
};
