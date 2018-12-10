/**
 * Created by Lucas Teske on 10/12/18.
 * @flow
 */

import { GraphQLEnumType } from 'graphql';

export const RequestStatusValues = {
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
};

export const RequestStatus = Object.keys(RequestStatusValues).map(r => RequestStatusValues[r].value);

export const RequestStatusEnum = new GraphQLEnumType({
  name: 'RequestStatusEnum',
  description: 'Request Status Enum',
  values: RequestStatusValues,
});
