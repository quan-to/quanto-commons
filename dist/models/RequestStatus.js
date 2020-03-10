"use strict";
/**
 * Created by Lucas Teske on 10/12/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.RequestStatusValues = {
    requested: {
        value: 'requested',
        description: 'Request started',
    },
    processing: {
        value: 'processing',
        description: 'Request is processing',
    },
    waiting_data: {
        value: 'waiting_data',
        description: 'Request is waiting for data',
    },
    approved: {
        value: 'approved',
        description: 'Request is approved',
    },
    rejected: {
        value: 'rejected',
        description: 'Request is rejected',
    },
    revoked: {
        value: 'revoked',
        description: 'Request is revoked',
    },
    failed: {
        value: 'failed',
        description: 'Request failed',
    },
    done: {
        value: 'done',
        description: 'Request is finished',
    },
    created: {
        value: 'created',
        description: 'Request was created',
    },
    sending: {
        value: 'sending',
        description: 'Request is being sent',
    },
    sendingRemote: {
        value: 'sendingRemote',
        description: 'Request is being sent (Internal Status)',
    },
    sent: {
        value: 'sent',
        description: 'Request is sent',
    },
    sentRemote: {
        value: 'sentRemote',
        description: 'Request is sent (Internal Status)',
    },
    error: {
        value: 'error',
        description: 'There was an error with the request',
    },
    processed: {
        value: 'processed',
        description: 'The request has been processed',
    },
    executed: {
        value: 'executed',
        description: 'The request has been executed',
    },
    signed: {
        value: 'signed',
        description: 'The request has been signed',
    },
};
const RS = {};
Object.keys(exports.RequestStatusValues)
    .map(r => exports.RequestStatusValues[r].value)
    .forEach((r) => {
    RS[r] = r;
});
exports.RequestStatus = RS;
exports.RequestStatusEnum = new graphql_1.GraphQLEnumType({
    name: 'RequestStatusEnum',
    description: 'Request Status Enum',
    values: exports.RequestStatusValues,
});
//# sourceMappingURL=RequestStatus.js.map