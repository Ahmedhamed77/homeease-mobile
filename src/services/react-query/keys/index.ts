import { endpoints } from '../../ApiService/endpoints';

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
  createHouse: [endpoints.houses],
  updateHouse: [endpoints.houses],
  deleteHouse: [endpoints.houses],
  joinHouse: [endpoints.joinHouse]
};

export const QueryKeys = {
  getUserSession: [endpoints.session],
  getUserChores: [endpoints.houses],
  getPayments: [endpoints.houses],
  getChore: [endpoints.houses],
  getHouse: [endpoints.houses],
};
