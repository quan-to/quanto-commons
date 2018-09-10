/**
 * Created by Lucas Teske on 29/03/18.
 * @flow
 */

import { GraphQLEnumType } from 'graphql';

export const StatementHistoryCodeEnum = {
  Other: {
    value: 0,
    description: 'Others (see statement description)',
  },
  LocalIn: {
    value: 1,
    description: 'Same bank transfer receive',
  },
  LocalOut: {
    value: 2,
    description: 'Same bank transfer sent',
  },
  ExternalIn: {
    value: 3,
    description: 'Different bank transfer receive',
  },
  ExternalOut: {
    value: 4,
    description: 'Different bank transfer sent',
  },
  ExternalRefund: {
    value: 5,
    description: 'Refund from different bank transfer',
  },
  PaymentOut: {
    value: 6,
    description: 'Transfer for a payment',
  },
  PaymentRefund: {
    value: 7,
    description: 'Refund for a payment',
  },
  BoletoIn: {
    value: 8,
    description: 'Receivings from Boletos',
  },
  AtmOut: {
    value: 9,
    description: 'ATM Cash Out',
  },
  CashIn: {
    value: 10,
    description: 'Deposit in person at the bank',
  },
  EscrowRollback: {
    value: 12,
    description: 'Rollback amount for an Escrow',
  },
  EscrowOut: {
    value: 13,
    description: 'Transfer out for an Escrow',
  },
  EscrowIn: {
    value: 14,
    description: 'Receive from an Escrow',
  },
  OtherFees: {
    value: 15,
    description: 'Generic Fee Charge',
  },
  FeeRefund: {
    value: 16,
    description: 'Fee Charge Refund',
  },
  CronOut: {
    value: 17,
    description: 'Scheduled automatic debit',
  },
  BoletoFee: {
    value: 18,
    description: 'Fee for creating boletos',
  },
  BankCredit: {
    value: 19,
    description: 'Bank Credit',
  },
  BankDebit: {
    value: 20,
    description: 'Bank Debit',
  },
  BankInvestment: {
    value: 21,
    description: 'Bank Investment',
  },
  BankInvestmentReturn: {
    value: 22,
    description: 'Bank Investment Return',
  },
};

export const StatementHistoryCodeEnumGraphQL = new GraphQLEnumType({
  name: 'tatementHistoryCodeEnum',
  description: 'Statement History Code Enum',
  values: StatementHistoryCodeEnum,
});
