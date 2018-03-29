/**
 * Created by Lucas Teske on 29/03/18.
 * @flow
 */
import {
  GraphQLEnumType,
} from 'graphql';

import {
  StatementHistoryCodeEnum,
} from './StatementHistoryCode';

const StatementHistoryCategoryEnum = {
  Other: {
    value: 0,
    description: 'Others (see statement description)',
  },
  InternalTransfer: {
    value: 1,
    description: 'Account Balance Transfers in same bank',
  },
  ExternalTransfer: {
    value: 2,
    description: 'Account Balance Transfers in different banks',
  },
  PaymentAndBilling: {
    value: 3,
    description: 'Payment / Billing Transactions',
  },
  ATM: {
    value: 4,
    description: 'ATM Transactions',
  },
  Escrow: {
    value: 5,
    description: 'Escrow Transactions',
  },
  Fee: {
    value: 6,
    description: 'Fee Transactions',
  }
};

const StatementHistoryCategoryEnumGraphQL = new GraphQLEnumType({
  name: 'StatementHistoryCategoryEnum',
  description: 'Statement History Category Enum',
  values: StatementHistoryCategoryEnum,
});

const StatementHistoryCategoryGroup = {};

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [
  StatementHistoryCodeEnum.Other.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.InternalTransfer.value] = [
  StatementHistoryCodeEnum.LocalIn.value,
  StatementHistoryCodeEnum.LocalOut.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ExternalTransfer.value] = [
  StatementHistoryCodeEnum.ExternalIn.value,
  StatementHistoryCodeEnum.ExternalOut.value,
  StatementHistoryCodeEnum.ExternalRefund.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.PaymentAndBilling.value] = [
  StatementHistoryCodeEnum.PaymentOut.value,
  StatementHistoryCodeEnum.PaymentRefund.value,
  StatementHistoryCodeEnum.BoletoIn.value,
  StatementHistoryCodeEnum.CronOut.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Escrow.value] = [
  StatementHistoryCodeEnum.EscrowLock.value,
  StatementHistoryCodeEnum.EscrowUnlock.value,
  StatementHistoryCodeEnum.EscrowIn.value,
  StatementHistoryCodeEnum.EscrowOut.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Fee.value] = [
  StatementHistoryCodeEnum.OtherFees.value,
  StatementHistoryCodeEnum.FeeRefund.value,
];

export {
  StatementHistoryCategoryGroup,
  StatementHistoryCategoryEnum,
  StatementHistoryCategoryEnumGraphQL,
};
