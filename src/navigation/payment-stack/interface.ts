import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum PaymentParams {
  Payment = 'Chores',
  NewPayment = 'NewChore',
}

export type PaymentParamsList = {
  [PaymentParams.Payment]: NO_PARAMS;
  [PaymentParams.NewPayment]: NO_PARAMS;
};

export type PaymentNavigation = StackNavigationProp<
  PaymentParamsList,
  PaymentParams
>;
