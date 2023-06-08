import {endpoints} from '../../ApiService/endpoints';

export const MutationKeys = {
  verifyEmail: [endpoints.email],
  createUser: [endpoints.register],
  userLogin: [endpoints.login],
  assignChore: [endpoints.houses],
  updateChore: [endpoints.houses],
  updateUser: [endpoints.users],
  cancelChore: [endpoints.houses],
  updatePayment: [endpoints.houses],
  addPayment: [endpoints.houses],
  cancelPayment: [endpoints.houses],
  createHouse: [endpoints.houses, 'createHouse'],
  updateHouse: [endpoints.houses],
  deleteHouse: [endpoints.houses],
  joinHouse: [endpoints.joinHouse, 'joinHouse'],
};

export const QueryKeys = {
  getUserSession: [endpoints.session],
  getUserChores: [endpoints.houses, 'userChores'],
  getPayments: [endpoints.houses, 'payments'],
  getChore: [endpoints.houses, 'chores'],
  getHouse: [endpoints.houses, 'userHouse'],
  getUserInfo: [endpoints.users],
};
