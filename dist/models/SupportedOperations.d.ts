/**
 * Created by Lucas Teske on 28/09/18.
 */
import { GraphQLEnumType } from 'graphql';
export declare const SupportedOperations: {
    getUserBoletos: {
        value: string;
        description: string;
    };
    getAccountBalance: {
        value: string;
        description: string;
    };
    getAccountStatement: {
        value: string;
        description: string;
    };
    getBankSystemStatus: {
        value: string;
        description: string;
    };
    getPaymentStatus: {
        value: string;
        description: string;
        deprecationReason: string;
    };
    getRequestStatus: {
        value: string;
        description: string;
    };
    createEscrow: {
        value: string;
        description: string;
    };
    createContract: {
        value: string;
        description: string;
    };
    triggerContract: {
        value: string;
        description: string;
    };
    createAccount: {
        value: string;
        description: string;
    };
    createBoleto: {
        value: string;
        description: string;
    };
    doPayment: {
        value: string;
        description: string;
    };
    transferMoneyInternal: {
        value: string;
        description: string;
        deprecationReason: string;
    };
    transferMoneyExternal: {
        value: string;
        description: string;
        deprecationReason: string;
    };
    transferFunds: {
        value: string;
        description: string;
    };
    payBill: {
        value: string;
        description: string;
    };
};
export declare const SupportedOperationsGraphQL: GraphQLEnumType;
