"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Lucas Teske on 29/03/18.
 */
const graphql_1 = require("graphql");
const tools_1 = require("../tools");
const StatementHistoryCode_1 = require("./StatementHistoryCode");
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
exports.StatementHistoryCategoryEnum = StatementHistoryCategoryEnum;
const StatementHistoryCategoryEnumGraphQL = new graphql_1.GraphQLEnumType({
    name: 'StatementHistoryCategoryEnum',
    description: 'Statement History Category Enum',
    values: StatementHistoryCategoryEnum,
});
exports.StatementHistoryCategoryEnumGraphQL = StatementHistoryCategoryEnumGraphQL;
const StatementHistoryCategoryGroup = {};
exports.StatementHistoryCategoryGroup = StatementHistoryCategoryGroup;
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.Other.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.BankCredit.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.BankDebit.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.InternalTransfer.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.LocalIn.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.LocalOut.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ExternalTransfer.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.ExternalIn.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.ExternalOut.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.ExternalRefund.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.PaymentAndBilling.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.PaymentOut.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.PaymentRefund.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.BoletoIn.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.CronOut.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ATM.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.AtmOut.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Escrow.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.EscrowRollback.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.EscrowIn.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.EscrowOut.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Fee.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.OtherFees.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.FeeRefund.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.BoletoFee.value,
];
StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Invest.value] = [
    StatementHistoryCode_1.StatementHistoryCodeEnum.BankInvestment.value,
    StatementHistoryCode_1.StatementHistoryCodeEnum.BankInvestmentReturn.value,
];
const codeToCategory = (code) => {
    let category = StatementHistoryCategoryEnum.Other.value;
    Object.keys(StatementHistoryCategoryEnum).forEach((catName) => {
        const cat = StatementHistoryCategoryEnum[catName];
        if (!tools_1.undefinedOrNull(StatementHistoryCategoryGroup[cat.value]) && StatementHistoryCategoryGroup[cat.value].indexOf(code) !== -1) {
            category = cat.value;
        }
    });
    return category;
};
exports.codeToCategory = codeToCategory;
//# sourceMappingURL=StatementHistoryCategory.js.map