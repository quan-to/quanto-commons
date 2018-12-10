'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestStatusEnum = exports.RequestStatus = exports.RequestStatusValues = undefined;

var _graphql = require('graphql');

var RequestStatusValues = exports.RequestStatusValues = {
  requested: {
    value: 'requested',
    description: 'Request started'
  },
  processing: {
    value: 'processing',
    description: 'Request is processing'
  },
  waiting_data: {
    value: 'waiting_data',
    description: 'Request is waiting for data'
  },
  approved: {
    value: 'approved',
    description: 'Request is approved'
  },
  rejected: {
    value: 'rejected',
    description: 'Request is rejected'
  },
  revoked: {
    value: 'revoked',
    description: 'Request is revoked'
  },
  failed: {
    value: 'failed',
    description: 'Request failed'
  },
  done: {
    value: 'done',
    description: 'Request is finished'
  },
  created: {
    value: 'created',
    description: 'Request was created'
  },
  sending: {
    value: 'sending',
    description: 'Request is being sent'
  },
  sendingRemote: {
    value: 'sendingRemote',
    description: 'Request is being sent (Internal Status)'
  },
  sent: {
    value: 'sent',
    description: 'Request is sent'
  },
  sentRemote: {
    value: 'sentRemote',
    description: 'Request is sent (Internal Status)'
  },
  error: {
    value: 'error',
    description: 'There was an error with the request'
  },
  processed: {
    value: 'processed',
    description: 'The request has been processed'
  },
  executed: {
    value: 'executed',
    description: 'The request has been executed'
  },
  signed: {
    value: 'signed',
    description: 'The request has been signed'
  }
}; /**
    * Created by Lucas Teske on 10/12/18.
    * 
    */

var RS = {};

Object.keys(RequestStatusValues).map(function (r) {
  return RequestStatusValues[r].value;
}).forEach(function (r) {
  RS[r] = r;
});

var RequestStatus = exports.RequestStatus = RS;

var RequestStatusEnum = exports.RequestStatusEnum = new _graphql.GraphQLEnumType({
  name: 'RequestStatusEnum',
  description: 'Request Status Enum',
  values: RequestStatusValues
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVxdWVzdFN0YXR1cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0U3RhdHVzVmFsdWVzIiwicmVxdWVzdGVkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJ3YWl0aW5nX2RhdGEiLCJhcHByb3ZlZCIsInJlamVjdGVkIiwicmV2b2tlZCIsImZhaWxlZCIsImRvbmUiLCJjcmVhdGVkIiwic2VuZGluZyIsInNlbmRpbmdSZW1vdGUiLCJzZW50Iiwic2VudFJlbW90ZSIsImVycm9yIiwicHJvY2Vzc2VkIiwiZXhlY3V0ZWQiLCJzaWduZWQiLCJSUyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyIiwiZm9yRWFjaCIsIlJlcXVlc3RTdGF0dXMiLCJSZXF1ZXN0U3RhdHVzRW51bSIsIkdyYXBoUUxFbnVtVHlwZSIsIm5hbWUiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFTyxJQUFNQSxvREFBc0I7QUFDakNDLGFBQVc7QUFDVEMsV0FBTyxXQURFO0FBRVRDLGlCQUFhO0FBRkosR0FEc0I7QUFLakNDLGNBQVk7QUFDVkYsV0FBTyxZQURHO0FBRVZDLGlCQUFhO0FBRkgsR0FMcUI7QUFTakNFLGdCQUFjO0FBQ1pILFdBQU8sY0FESztBQUVaQyxpQkFBYTtBQUZELEdBVG1CO0FBYWpDRyxZQUFVO0FBQ1JKLFdBQU8sVUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBYnVCO0FBaUJqQ0ksWUFBVTtBQUNSTCxXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQWpCdUI7QUFxQmpDSyxXQUFTO0FBQ1BOLFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBckJ3QjtBQXlCakNNLFVBQVE7QUFDTlAsV0FBTyxRQUREO0FBRU5DLGlCQUFhO0FBRlAsR0F6QnlCO0FBNkJqQ08sUUFBTTtBQUNKUixXQUFPLE1BREg7QUFFSkMsaUJBQWE7QUFGVCxHQTdCMkI7QUFpQ2pDUSxXQUFTO0FBQ1BULFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBakN3QjtBQXFDakNTLFdBQVM7QUFDUFYsV0FBTyxTQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FyQ3dCO0FBeUNqQ1UsaUJBQWU7QUFDYlgsV0FBTyxlQURNO0FBRWJDLGlCQUFhO0FBRkEsR0F6Q2tCO0FBNkNqQ1csUUFBTTtBQUNKWixXQUFPLE1BREg7QUFFSkMsaUJBQWE7QUFGVCxHQTdDMkI7QUFpRGpDWSxjQUFZO0FBQ1ZiLFdBQU8sWUFERztBQUVWQyxpQkFBYTtBQUZILEdBakRxQjtBQXFEakNhLFNBQU87QUFDTGQsV0FBTyxPQURGO0FBRUxDLGlCQUFhO0FBRlIsR0FyRDBCO0FBeURqQ2MsYUFBVztBQUNUZixXQUFPLFdBREU7QUFFVEMsaUJBQWE7QUFGSixHQXpEc0I7QUE2RGpDZSxZQUFVO0FBQ1JoQixXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQTdEdUI7QUFpRWpDZ0IsVUFBUTtBQUNOakIsV0FBTyxRQUREO0FBRU5DLGlCQUFhO0FBRlA7QUFqRXlCLENBQTVCLEMsQ0FQUDs7Ozs7QUE4RUEsSUFBTWlCLEtBQUssRUFBWDs7QUFFQUMsT0FBT0MsSUFBUCxDQUFZdEIsbUJBQVosRUFDR3VCLEdBREgsQ0FDTztBQUFBLFNBQUt2QixvQkFBb0J3QixDQUFwQixFQUF1QnRCLEtBQTVCO0FBQUEsQ0FEUCxFQUVHdUIsT0FGSCxDQUVXLFVBQUNELENBQUQsRUFBTztBQUFFSixLQUFHSSxDQUFILElBQVFBLENBQVI7QUFBWSxDQUZoQzs7QUFJTyxJQUFNRSx3Q0FBZ0JOLEVBQXRCOztBQUVBLElBQU1PLGdEQUFvQixJQUFJQyx3QkFBSixDQUFvQjtBQUNuREMsUUFBTSxtQkFENkM7QUFFbkQxQixlQUFhLHFCQUZzQztBQUduRDJCLFVBQVE5QjtBQUgyQyxDQUFwQixDQUExQiIsImZpbGUiOiJSZXF1ZXN0U3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDEwLzEyLzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgeyBHcmFwaFFMRW51bVR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFJlcXVlc3RTdGF0dXNWYWx1ZXMgPSB7XG4gIHJlcXVlc3RlZDoge1xuICAgIHZhbHVlOiAncmVxdWVzdGVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3Qgc3RhcnRlZCcsXG4gIH0sXG4gIHByb2Nlc3Npbmc6IHtcbiAgICB2YWx1ZTogJ3Byb2Nlc3NpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBwcm9jZXNzaW5nJyxcbiAgfSxcbiAgd2FpdGluZ19kYXRhOiB7XG4gICAgdmFsdWU6ICd3YWl0aW5nX2RhdGEnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyB3YWl0aW5nIGZvciBkYXRhJyxcbiAgfSxcbiAgYXBwcm92ZWQ6IHtcbiAgICB2YWx1ZTogJ2FwcHJvdmVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgYXBwcm92ZWQnLFxuICB9LFxuICByZWplY3RlZDoge1xuICAgIHZhbHVlOiAncmVqZWN0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyByZWplY3RlZCcsXG4gIH0sXG4gIHJldm9rZWQ6IHtcbiAgICB2YWx1ZTogJ3Jldm9rZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyByZXZva2VkJyxcbiAgfSxcbiAgZmFpbGVkOiB7XG4gICAgdmFsdWU6ICdmYWlsZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBmYWlsZWQnLFxuICB9LFxuICBkb25lOiB7XG4gICAgdmFsdWU6ICdkb25lJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgZmluaXNoZWQnLFxuICB9LFxuICBjcmVhdGVkOiB7XG4gICAgdmFsdWU6ICdjcmVhdGVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3Qgd2FzIGNyZWF0ZWQnLFxuICB9LFxuICBzZW5kaW5nOiB7XG4gICAgdmFsdWU6ICdzZW5kaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgYmVpbmcgc2VudCcsXG4gIH0sXG4gIHNlbmRpbmdSZW1vdGU6IHtcbiAgICB2YWx1ZTogJ3NlbmRpbmdSZW1vdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBiZWluZyBzZW50IChJbnRlcm5hbCBTdGF0dXMpJyxcbiAgfSxcbiAgc2VudDoge1xuICAgIHZhbHVlOiAnc2VudCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHNlbnQnLFxuICB9LFxuICBzZW50UmVtb3RlOiB7XG4gICAgdmFsdWU6ICdzZW50UmVtb3RlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgc2VudCAoSW50ZXJuYWwgU3RhdHVzKScsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgdmFsdWU6ICdlcnJvcicsXG4gICAgZGVzY3JpcHRpb246ICdUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB0aGUgcmVxdWVzdCcsXG4gIH0sXG4gIHByb2Nlc3NlZDoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2VkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIHByb2Nlc3NlZCcsXG4gIH0sXG4gIGV4ZWN1dGVkOiB7XG4gICAgdmFsdWU6ICdleGVjdXRlZCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcmVxdWVzdCBoYXMgYmVlbiBleGVjdXRlZCcsXG4gIH0sXG4gIHNpZ25lZDoge1xuICAgIHZhbHVlOiAnc2lnbmVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIHNpZ25lZCcsXG4gIH0sXG59O1xuXG5jb25zdCBSUyA9IHt9O1xuXG5PYmplY3Qua2V5cyhSZXF1ZXN0U3RhdHVzVmFsdWVzKVxuICAubWFwKHIgPT4gUmVxdWVzdFN0YXR1c1ZhbHVlc1tyXS52YWx1ZSlcbiAgLmZvckVhY2goKHIpID0+IHsgUlNbcl0gPSByOyB9KTtcblxuZXhwb3J0IGNvbnN0IFJlcXVlc3RTdGF0dXMgPSBSUztcblxuZXhwb3J0IGNvbnN0IFJlcXVlc3RTdGF0dXNFbnVtID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICdSZXF1ZXN0U3RhdHVzRW51bScsXG4gIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBTdGF0dXMgRW51bScsXG4gIHZhbHVlczogUmVxdWVzdFN0YXR1c1ZhbHVlcyxcbn0pO1xuIl19