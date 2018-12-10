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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVxdWVzdFN0YXR1cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0U3RhdHVzVmFsdWVzIiwicmVxdWVzdGVkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJ3YWl0aW5nX2RhdGEiLCJhcHByb3ZlZCIsInJlamVjdGVkIiwicmV2b2tlZCIsImZhaWxlZCIsImRvbmUiLCJjcmVhdGVkIiwic2VuZGluZyIsInNlbmRpbmdSZW1vdGUiLCJzZW50Iiwic2VudFJlbW90ZSIsImVycm9yIiwicHJvY2Vzc2VkIiwiZXhlY3V0ZWQiLCJSUyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyIiwiZm9yRWFjaCIsIlJlcXVlc3RTdGF0dXMiLCJSZXF1ZXN0U3RhdHVzRW51bSIsIkdyYXBoUUxFbnVtVHlwZSIsIm5hbWUiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFTyxJQUFNQSxvREFBc0I7QUFDakNDLGFBQVc7QUFDVEMsV0FBTyxXQURFO0FBRVRDLGlCQUFhO0FBRkosR0FEc0I7QUFLakNDLGNBQVk7QUFDVkYsV0FBTyxZQURHO0FBRVZDLGlCQUFhO0FBRkgsR0FMcUI7QUFTakNFLGdCQUFjO0FBQ1pILFdBQU8sY0FESztBQUVaQyxpQkFBYTtBQUZELEdBVG1CO0FBYWpDRyxZQUFVO0FBQ1JKLFdBQU8sVUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBYnVCO0FBaUJqQ0ksWUFBVTtBQUNSTCxXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQWpCdUI7QUFxQmpDSyxXQUFTO0FBQ1BOLFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBckJ3QjtBQXlCakNNLFVBQVE7QUFDTlAsV0FBTyxRQUREO0FBRU5DLGlCQUFhO0FBRlAsR0F6QnlCO0FBNkJqQ08sUUFBTTtBQUNKUixXQUFPLE1BREg7QUFFSkMsaUJBQWE7QUFGVCxHQTdCMkI7QUFpQ2pDUSxXQUFTO0FBQ1BULFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBakN3QjtBQXFDakNTLFdBQVM7QUFDUFYsV0FBTyxTQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FyQ3dCO0FBeUNqQ1UsaUJBQWU7QUFDYlgsV0FBTyxlQURNO0FBRWJDLGlCQUFhO0FBRkEsR0F6Q2tCO0FBNkNqQ1csUUFBTTtBQUNKWixXQUFPLE1BREg7QUFFSkMsaUJBQWE7QUFGVCxHQTdDMkI7QUFpRGpDWSxjQUFZO0FBQ1ZiLFdBQU8sWUFERztBQUVWQyxpQkFBYTtBQUZILEdBakRxQjtBQXFEakNhLFNBQU87QUFDTGQsV0FBTyxPQURGO0FBRUxDLGlCQUFhO0FBRlIsR0FyRDBCO0FBeURqQ2MsYUFBVztBQUNUZixXQUFPLFdBREU7QUFFVEMsaUJBQWE7QUFGSixHQXpEc0I7QUE2RGpDZSxZQUFVO0FBQ1JoQixXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTDtBQTdEdUIsQ0FBNUIsQyxDQVBQOzs7OztBQTBFQSxJQUFNZ0IsS0FBSyxFQUFYOztBQUVBQyxPQUFPQyxJQUFQLENBQVlyQixtQkFBWixFQUNHc0IsR0FESCxDQUNPO0FBQUEsU0FBS3RCLG9CQUFvQnVCLENBQXBCLEVBQXVCckIsS0FBNUI7QUFBQSxDQURQLEVBRUdzQixPQUZILENBRVcsVUFBQ0QsQ0FBRCxFQUFPO0FBQUVKLEtBQUdJLENBQUgsSUFBUUEsQ0FBUjtBQUFZLENBRmhDOztBQUlPLElBQU1FLHdDQUFnQk4sRUFBdEI7O0FBRUEsSUFBTU8sZ0RBQW9CLElBQUlDLHdCQUFKLENBQW9CO0FBQ25EQyxRQUFNLG1CQUQ2QztBQUVuRHpCLGVBQWEscUJBRnNDO0FBR25EMEIsVUFBUTdCO0FBSDJDLENBQXBCLENBQTFCIiwiZmlsZSI6IlJlcXVlc3RTdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMTAvMTIvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c1ZhbHVlcyA9IHtcbiAgcmVxdWVzdGVkOiB7XG4gICAgdmFsdWU6ICdyZXF1ZXN0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBzdGFydGVkJyxcbiAgfSxcbiAgcHJvY2Vzc2luZzoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2luZycsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHByb2Nlc3NpbmcnLFxuICB9LFxuICB3YWl0aW5nX2RhdGE6IHtcbiAgICB2YWx1ZTogJ3dhaXRpbmdfZGF0YScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHdhaXRpbmcgZm9yIGRhdGEnLFxuICB9LFxuICBhcHByb3ZlZDoge1xuICAgIHZhbHVlOiAnYXBwcm92ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBhcHByb3ZlZCcsXG4gIH0sXG4gIHJlamVjdGVkOiB7XG4gICAgdmFsdWU6ICdyZWplY3RlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJlamVjdGVkJyxcbiAgfSxcbiAgcmV2b2tlZDoge1xuICAgIHZhbHVlOiAncmV2b2tlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJldm9rZWQnLFxuICB9LFxuICBmYWlsZWQ6IHtcbiAgICB2YWx1ZTogJ2ZhaWxlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGZhaWxlZCcsXG4gIH0sXG4gIGRvbmU6IHtcbiAgICB2YWx1ZTogJ2RvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBmaW5pc2hlZCcsXG4gIH0sXG4gIGNyZWF0ZWQ6IHtcbiAgICB2YWx1ZTogJ2NyZWF0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCB3YXMgY3JlYXRlZCcsXG4gIH0sXG4gIHNlbmRpbmc6IHtcbiAgICB2YWx1ZTogJ3NlbmRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBiZWluZyBzZW50JyxcbiAgfSxcbiAgc2VuZGluZ1JlbW90ZToge1xuICAgIHZhbHVlOiAnc2VuZGluZ1JlbW90ZScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIGJlaW5nIHNlbnQgKEludGVybmFsIFN0YXR1cyknLFxuICB9LFxuICBzZW50OiB7XG4gICAgdmFsdWU6ICdzZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgc2VudCcsXG4gIH0sXG4gIHNlbnRSZW1vdGU6IHtcbiAgICB2YWx1ZTogJ3NlbnRSZW1vdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBzZW50IChJbnRlcm5hbCBTdGF0dXMpJyxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB2YWx1ZTogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSByZXF1ZXN0JyxcbiAgfSxcbiAgcHJvY2Vzc2VkOiB7XG4gICAgdmFsdWU6ICdwcm9jZXNzZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJlcXVlc3QgaGFzIGJlZW4gcHJvY2Vzc2VkJyxcbiAgfSxcbiAgZXhlY3V0ZWQ6IHtcbiAgICB2YWx1ZTogJ2V4ZWN1dGVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIGV4ZWN1dGVkJyxcbiAgfSxcbn07XG5cbmNvbnN0IFJTID0ge307XG5cbk9iamVjdC5rZXlzKFJlcXVlc3RTdGF0dXNWYWx1ZXMpXG4gIC5tYXAociA9PiBSZXF1ZXN0U3RhdHVzVmFsdWVzW3JdLnZhbHVlKVxuICAuZm9yRWFjaCgocikgPT4geyBSU1tyXSA9IHI7IH0pO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1cyA9IFJTO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c0VudW0gPSBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgbmFtZTogJ1JlcXVlc3RTdGF0dXNFbnVtJyxcbiAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IFN0YXR1cyBFbnVtJyxcbiAgdmFsdWVzOiBSZXF1ZXN0U3RhdHVzVmFsdWVzLFxufSk7XG4iXX0=