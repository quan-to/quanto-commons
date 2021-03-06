"use strict";
/**
 * Created by Lucas Teske on 28/09/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.SupportedOperations = {
    // region Read Operations
    getUserBoletos: {
        value: 'getUserBoletos',
        description: 'Read boletos created for the user (DDA)',
    },
    getAccountBalance: {
        value: 'getAccountBalance',
        description: 'Operation to check the Account Balance',
    },
    getAccountStatement: {
        value: 'getAccountStatement',
        description: 'Operation to check the Account Statement',
    },
    getBankSystemStatus: {
        value: 'getBankSystemStatus',
        description: 'Operation to check banking system status',
    },
    getPaymentStatus: {
        value: 'getPaymentStatus',
        description: 'Operation to check payment (boleto) status',
        deprecationReason: 'Use requestStatus',
    },
    getRequestStatus: {
        value: 'getRequestStatus',
        description: 'Operation to check a request status',
    },
    // endregion
    // region Write Operations
    createEscrow: {
        value: 'createEscrow',
        description: 'Operation to create an escrow smart contract',
    },
    createContract: {
        value: 'createContract',
        description: 'Operation to create an smart contract',
    },
    triggerContract: {
        value: 'triggerContract',
        description: 'Operation to trigger an smart contract action',
    },
    createAccount: {
        value: 'createAccount',
        description: 'Operation to create an account',
    },
    createBoleto: {
        value: 'createBoleto',
        description: 'Operation to create boletos',
    },
    // @deprecated
    doPayment: {
        value: 'doPayment',
        description: 'Operation to make payments',
    },
    // @deprecated
    transferMoneyInternal: {
        value: 'transferMoneyInternal',
        description: 'Operation to transfer money for the same bank',
        deprecationReason: 'Use transferFunds',
    },
    // @deprecated
    transferMoneyExternal: {
        value: 'transferMoneyExternal',
        description: 'Operation to transfer money to other banks',
        deprecationReason: 'Use transferFunds',
    },
    transferFunds: {
        value: 'transferFunds',
        description: 'Operation to transfer funds between accounts',
    },
    payBill: {
        value: 'payBill',
        description: 'Operation to pay bills',
    },
};
exports.SupportedOperationsGraphQL = new graphql_1.GraphQLEnumType({
    name: 'SupportedOperations',
    description: 'Supported Bank Operations',
    values: exports.SupportedOperations,
});
//# sourceMappingURL=SupportedOperations.js.map