import { axios } from '../axios';
import { endpoints } from '../endpoints';

interface CancelChoreParams {
  houseId: string;
  assignmentId: string;
}

export const cancelChore = async ({ houseId, assignmentId }: CancelChoreParams) => {
  const { data } = await axios.delete(
    `${endpoints.houses}/${houseId}/chores/assignment/${assignmentId}`,
  );
  console.log(data)

  return data.choreAssignment;
}
