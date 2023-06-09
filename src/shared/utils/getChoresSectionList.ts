import moment from 'moment';
import { ChoreAssignment } from '../../services/ApiService/chores/types';
import _ from 'lodash';

export const getSectionList = (data: ChoreAssignment[]) =>
  _(data)
    .map(item => {
      return {
        ...item,
      };
    })
    .groupBy(x => moment(x.dueDate).format('YYYY-MM-DD'))
    .toPairs()
    .sortBy(value => value[0])
    .map(value => ({ title: value[0], data: value[1] }))
    .value();
