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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVxdWVzdFN0YXR1cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0U3RhdHVzVmFsdWVzIiwicmVxdWVzdGVkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJ3YWl0aW5nX2RhdGEiLCJhcHByb3ZlZCIsInJlamVjdGVkIiwicmV2b2tlZCIsImZhaWxlZCIsImRvbmUiLCJjcmVhdGVkIiwic2VuZGluZyIsInNlbmRpbmdSZW1vdGUiLCJzZW50Iiwic2VudFJlbW90ZSIsImVycm9yIiwicHJvY2Vzc2VkIiwiUlMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiciIsImZvckVhY2giLCJSZXF1ZXN0U3RhdHVzIiwiUmVxdWVzdFN0YXR1c0VudW0iLCJHcmFwaFFMRW51bVR5cGUiLCJuYW1lIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRU8sSUFBTUEsb0RBQXNCO0FBQ2pDQyxhQUFXO0FBQ1RDLFdBQU8sV0FERTtBQUVUQyxpQkFBYTtBQUZKLEdBRHNCO0FBS2pDQyxjQUFZO0FBQ1ZGLFdBQU8sWUFERztBQUVWQyxpQkFBYTtBQUZILEdBTHFCO0FBU2pDRSxnQkFBYztBQUNaSCxXQUFPLGNBREs7QUFFWkMsaUJBQWE7QUFGRCxHQVRtQjtBQWFqQ0csWUFBVTtBQUNSSixXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQWJ1QjtBQWlCakNJLFlBQVU7QUFDUkwsV0FBTyxVQURDO0FBRVJDLGlCQUFhO0FBRkwsR0FqQnVCO0FBcUJqQ0ssV0FBUztBQUNQTixXQUFPLFNBREE7QUFFUEMsaUJBQWE7QUFGTixHQXJCd0I7QUF5QmpDTSxVQUFRO0FBQ05QLFdBQU8sUUFERDtBQUVOQyxpQkFBYTtBQUZQLEdBekJ5QjtBQTZCakNPLFFBQU07QUFDSlIsV0FBTyxNQURIO0FBRUpDLGlCQUFhO0FBRlQsR0E3QjJCO0FBaUNqQ1EsV0FBUztBQUNQVCxXQUFPLFNBREE7QUFFUEMsaUJBQWE7QUFGTixHQWpDd0I7QUFxQ2pDUyxXQUFTO0FBQ1BWLFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBckN3QjtBQXlDakNVLGlCQUFlO0FBQ2JYLFdBQU8sZUFETTtBQUViQyxpQkFBYTtBQUZBLEdBekNrQjtBQTZDakNXLFFBQU07QUFDSlosV0FBTyxNQURIO0FBRUpDLGlCQUFhO0FBRlQsR0E3QzJCO0FBaURqQ1ksY0FBWTtBQUNWYixXQUFPLFlBREc7QUFFVkMsaUJBQWE7QUFGSCxHQWpEcUI7QUFxRGpDYSxTQUFPO0FBQ0xkLFdBQU8sT0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBckQwQjtBQXlEakNjLGFBQVc7QUFDVGYsV0FBTyxXQURFO0FBRVRDLGlCQUFhO0FBRko7QUF6RHNCLENBQTVCLEMsQ0FQUDs7Ozs7QUFzRUEsSUFBTWUsS0FBSyxFQUFYOztBQUVBQyxPQUFPQyxJQUFQLENBQVlwQixtQkFBWixFQUNHcUIsR0FESCxDQUNPO0FBQUEsU0FBS3JCLG9CQUFvQnNCLENBQXBCLEVBQXVCcEIsS0FBNUI7QUFBQSxDQURQLEVBRUdxQixPQUZILENBRVcsVUFBQ0QsQ0FBRCxFQUFPO0FBQUVKLEtBQUdJLENBQUgsSUFBUUEsQ0FBUjtBQUFZLENBRmhDOztBQUlPLElBQU1FLHdDQUFnQk4sRUFBdEI7O0FBRUEsSUFBTU8sZ0RBQW9CLElBQUlDLHdCQUFKLENBQW9CO0FBQ25EQyxRQUFNLG1CQUQ2QztBQUVuRHhCLGVBQWEscUJBRnNDO0FBR25EeUIsVUFBUTVCO0FBSDJDLENBQXBCLENBQTFCIiwiZmlsZSI6IlJlcXVlc3RTdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMTAvMTIvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c1ZhbHVlcyA9IHtcbiAgcmVxdWVzdGVkOiB7XG4gICAgdmFsdWU6ICdyZXF1ZXN0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBzdGFydGVkJyxcbiAgfSxcbiAgcHJvY2Vzc2luZzoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2luZycsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHByb2Nlc3NpbmcnLFxuICB9LFxuICB3YWl0aW5nX2RhdGE6IHtcbiAgICB2YWx1ZTogJ3dhaXRpbmdfZGF0YScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHdhaXRpbmcgZm9yIGRhdGEnLFxuICB9LFxuICBhcHByb3ZlZDoge1xuICAgIHZhbHVlOiAnYXBwcm92ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBhcHByb3ZlZCcsXG4gIH0sXG4gIHJlamVjdGVkOiB7XG4gICAgdmFsdWU6ICdyZWplY3RlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJlamVjdGVkJyxcbiAgfSxcbiAgcmV2b2tlZDoge1xuICAgIHZhbHVlOiAncmV2b2tlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJldm9rZWQnLFxuICB9LFxuICBmYWlsZWQ6IHtcbiAgICB2YWx1ZTogJ2ZhaWxlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGZhaWxlZCcsXG4gIH0sXG4gIGRvbmU6IHtcbiAgICB2YWx1ZTogJ2RvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBmaW5pc2hlZCcsXG4gIH0sXG4gIGNyZWF0ZWQ6IHtcbiAgICB2YWx1ZTogJ2NyZWF0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCB3YXMgY3JlYXRlZCcsXG4gIH0sXG4gIHNlbmRpbmc6IHtcbiAgICB2YWx1ZTogJ3NlbmRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBiZWluZyBzZW50JyxcbiAgfSxcbiAgc2VuZGluZ1JlbW90ZToge1xuICAgIHZhbHVlOiAnc2VuZGluZ1JlbW90ZScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIGJlaW5nIHNlbnQgKEludGVybmFsIFN0YXR1cyknLFxuICB9LFxuICBzZW50OiB7XG4gICAgdmFsdWU6ICdzZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgc2VudCcsXG4gIH0sXG4gIHNlbnRSZW1vdGU6IHtcbiAgICB2YWx1ZTogJ3NlbnRSZW1vdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBzZW50IChJbnRlcm5hbCBTdGF0dXMpJyxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB2YWx1ZTogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSByZXF1ZXN0JyxcbiAgfSxcbiAgcHJvY2Vzc2VkOiB7XG4gICAgdmFsdWU6ICdwcm9jZXNzZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJlcXVlc3QgaGFzIGJlZW4gcHJvY2Vzc2VkJyxcbiAgfSxcbn07XG5cbmNvbnN0IFJTID0ge307XG5cbk9iamVjdC5rZXlzKFJlcXVlc3RTdGF0dXNWYWx1ZXMpXG4gIC5tYXAociA9PiBSZXF1ZXN0U3RhdHVzVmFsdWVzW3JdLnZhbHVlKVxuICAuZm9yRWFjaCgocikgPT4geyBSU1tyXSA9IHI7IH0pO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1cyA9IFJTO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c0VudW0gPSBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgbmFtZTogJ1JlcXVlc3RTdGF0dXNFbnVtJyxcbiAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IFN0YXR1cyBFbnVtJyxcbiAgdmFsdWVzOiBSZXF1ZXN0U3RhdHVzVmFsdWVzLFxufSk7XG4iXX0=