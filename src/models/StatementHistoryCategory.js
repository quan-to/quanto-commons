/**
 * Created by Lucas Teske on 29/03/18.
 * @flow
 */
import {
  GraphQLEnumType,
} from 'graphql';

import {
  undefinedOrNull,
} from '../tools';

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
  },
  Invest: {
    value: 7,
    description: 'Investment Transactions',
  },
};

const StatementHistoryCategoryEnumGraphQL = new GraphQLEnumType({
  name: 'StatementHistoryCategoryEnum',
  description: 'Statement History Category Enum',
  values: StatementHistoryCategoryEnum,
});

const StatementHistoryCategoryGroup = {};

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [
  StatementHistoryCodeEnum.Other.value,
  StatementHistoryCodeEnum.BankCredit.value,
  StatementHistoryCodeEnum.BankDebit.value,
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

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ATM.value] = [
  StatementHistoryCodeEnum.AtmOut.value,
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
  StatementHistoryCodeEnum.BoletoFee.value,
];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Invest.value] = [
  StatementHistoryCodeEnum.BankInvestment.value,
  StatementHistoryCodeEnum.BankInvestmentReturn.value,
];

const codeToCategory = (code: number) => {
  let category = StatementHistoryCategoryEnum.Other.value;

  Object.keys(StatementHistoryCategoryEnum).forEach((catName) => {
    const cat = StatementHistoryCategoryEnum[catName];
    if (!undefinedOrNull(StatementHistoryCategoryGroup[cat.value]) && StatementHistoryCategoryGroup[cat.value].indexOf(code) !== -1) {
      category = cat.value;
    }
  });

  return category;
};

export {
  StatementHistoryCategoryGroup,
  StatementHistoryCategoryEnum,
  StatementHistoryCategoryEnumGraphQL,
  codeToCategory,
};
