/**
 * Created by Lucas Teske on 10/12/18.
 */

import {GraphQLEnumType} from 'graphql';
import {StringEnumTypeFields} from "./GQLTypes/EnumFieldTypes";


export const RequestStatusValues: { [id: string]: StringEnumTypeFields } = {
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

const RS: { [id: string]: string } = {};

Object.keys(RequestStatusValues)
  .map(r => RequestStatusValues[r].value)
  .forEach((r) => {
    RS[r] = r;
  });

export const RequestStatus = RS;

export const RequestStatusEnum = new GraphQLEnumType({
  name: 'RequestStatusEnum',
  description: 'Request Status Enum',
  values: RequestStatusValues,
});
