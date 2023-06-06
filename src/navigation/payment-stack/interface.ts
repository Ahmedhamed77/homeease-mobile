import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum PaymentParams {
  Payment = 'Payment',
  NewPayment = 'NewPayment',
}

export type PaymentParamsList = {
  [PaymentParams.Payment]: NO_PARAMS;
  [PaymentParams.NewPayment]: NO_PARAMS;
};

export type PaymentNavigation = StackNavigationProp<
  PaymentParamsList,
  PaymentParams
>;
