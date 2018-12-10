'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestStatusEnum = exports.RequestStatusValues = undefined;

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

var RequestStatus = {};

Object.keys(RequestStatusValues).map(function (r) {
  return RequestStatusValues[r].value;
}).forEach(function (r) {
  RequestStatus[r] = r;
});

var RequestStatusEnum = exports.RequestStatusEnum = new _graphql.GraphQLEnumType({
  name: 'RequestStatusEnum',
  description: 'Request Status Enum',
  values: RequestStatusValues
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVxdWVzdFN0YXR1cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0U3RhdHVzVmFsdWVzIiwicmVxdWVzdGVkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJ3YWl0aW5nX2RhdGEiLCJhcHByb3ZlZCIsInJlamVjdGVkIiwicmV2b2tlZCIsImZhaWxlZCIsImRvbmUiLCJjcmVhdGVkIiwic2VuZGluZyIsInNlbmRpbmdSZW1vdGUiLCJzZW50Iiwic2VudFJlbW90ZSIsImVycm9yIiwicHJvY2Vzc2VkIiwiUmVxdWVzdFN0YXR1cyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyIiwiZm9yRWFjaCIsIlJlcXVlc3RTdGF0dXNFbnVtIiwiR3JhcGhRTEVudW1UeXBlIiwibmFtZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUVPLElBQU1BLG9EQUFzQjtBQUNqQ0MsYUFBVztBQUNUQyxXQUFPLFdBREU7QUFFVEMsaUJBQWE7QUFGSixHQURzQjtBQUtqQ0MsY0FBWTtBQUNWRixXQUFPLFlBREc7QUFFVkMsaUJBQWE7QUFGSCxHQUxxQjtBQVNqQ0UsZ0JBQWM7QUFDWkgsV0FBTyxjQURLO0FBRVpDLGlCQUFhO0FBRkQsR0FUbUI7QUFhakNHLFlBQVU7QUFDUkosV0FBTyxVQURDO0FBRVJDLGlCQUFhO0FBRkwsR0FidUI7QUFpQmpDSSxZQUFVO0FBQ1JMLFdBQU8sVUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBakJ1QjtBQXFCakNLLFdBQVM7QUFDUE4sV0FBTyxTQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FyQndCO0FBeUJqQ00sVUFBUTtBQUNOUCxXQUFPLFFBREQ7QUFFTkMsaUJBQWE7QUFGUCxHQXpCeUI7QUE2QmpDTyxRQUFNO0FBQ0pSLFdBQU8sTUFESDtBQUVKQyxpQkFBYTtBQUZULEdBN0IyQjtBQWlDakNRLFdBQVM7QUFDUFQsV0FBTyxTQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FqQ3dCO0FBcUNqQ1MsV0FBUztBQUNQVixXQUFPLFNBREE7QUFFUEMsaUJBQWE7QUFGTixHQXJDd0I7QUF5Q2pDVSxpQkFBZTtBQUNiWCxXQUFPLGVBRE07QUFFYkMsaUJBQWE7QUFGQSxHQXpDa0I7QUE2Q2pDVyxRQUFNO0FBQ0paLFdBQU8sTUFESDtBQUVKQyxpQkFBYTtBQUZULEdBN0MyQjtBQWlEakNZLGNBQVk7QUFDVmIsV0FBTyxZQURHO0FBRVZDLGlCQUFhO0FBRkgsR0FqRHFCO0FBcURqQ2EsU0FBTztBQUNMZCxXQUFPLE9BREY7QUFFTEMsaUJBQWE7QUFGUixHQXJEMEI7QUF5RGpDYyxhQUFXO0FBQ1RmLFdBQU8sV0FERTtBQUVUQyxpQkFBYTtBQUZKO0FBekRzQixDQUE1QixDLENBUFA7Ozs7O0FBc0VBLElBQU1lLGdCQUFnQixFQUF0Qjs7QUFFQUMsT0FBT0MsSUFBUCxDQUFZcEIsbUJBQVosRUFDR3FCLEdBREgsQ0FDTztBQUFBLFNBQUtyQixvQkFBb0JzQixDQUFwQixFQUF1QnBCLEtBQTVCO0FBQUEsQ0FEUCxFQUVHcUIsT0FGSCxDQUVXLFVBQUNELENBQUQsRUFBTztBQUFFSixnQkFBY0ksQ0FBZCxJQUFtQkEsQ0FBbkI7QUFBdUIsQ0FGM0M7O0FBSU8sSUFBTUUsZ0RBQW9CLElBQUlDLHdCQUFKLENBQW9CO0FBQ25EQyxRQUFNLG1CQUQ2QztBQUVuRHZCLGVBQWEscUJBRnNDO0FBR25Ed0IsVUFBUTNCO0FBSDJDLENBQXBCLENBQTFCIiwiZmlsZSI6IlJlcXVlc3RTdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMTAvMTIvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c1ZhbHVlcyA9IHtcbiAgcmVxdWVzdGVkOiB7XG4gICAgdmFsdWU6ICdyZXF1ZXN0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBzdGFydGVkJyxcbiAgfSxcbiAgcHJvY2Vzc2luZzoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2luZycsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHByb2Nlc3NpbmcnLFxuICB9LFxuICB3YWl0aW5nX2RhdGE6IHtcbiAgICB2YWx1ZTogJ3dhaXRpbmdfZGF0YScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHdhaXRpbmcgZm9yIGRhdGEnLFxuICB9LFxuICBhcHByb3ZlZDoge1xuICAgIHZhbHVlOiAnYXBwcm92ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBhcHByb3ZlZCcsXG4gIH0sXG4gIHJlamVjdGVkOiB7XG4gICAgdmFsdWU6ICdyZWplY3RlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJlamVjdGVkJyxcbiAgfSxcbiAgcmV2b2tlZDoge1xuICAgIHZhbHVlOiAncmV2b2tlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJldm9rZWQnLFxuICB9LFxuICBmYWlsZWQ6IHtcbiAgICB2YWx1ZTogJ2ZhaWxlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGZhaWxlZCcsXG4gIH0sXG4gIGRvbmU6IHtcbiAgICB2YWx1ZTogJ2RvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBmaW5pc2hlZCcsXG4gIH0sXG4gIGNyZWF0ZWQ6IHtcbiAgICB2YWx1ZTogJ2NyZWF0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCB3YXMgY3JlYXRlZCcsXG4gIH0sXG4gIHNlbmRpbmc6IHtcbiAgICB2YWx1ZTogJ3NlbmRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBiZWluZyBzZW50JyxcbiAgfSxcbiAgc2VuZGluZ1JlbW90ZToge1xuICAgIHZhbHVlOiAnc2VuZGluZ1JlbW90ZScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIGJlaW5nIHNlbnQgKEludGVybmFsIFN0YXR1cyknLFxuICB9LFxuICBzZW50OiB7XG4gICAgdmFsdWU6ICdzZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgc2VudCcsXG4gIH0sXG4gIHNlbnRSZW1vdGU6IHtcbiAgICB2YWx1ZTogJ3NlbnRSZW1vdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBzZW50IChJbnRlcm5hbCBTdGF0dXMpJyxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB2YWx1ZTogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSByZXF1ZXN0JyxcbiAgfSxcbiAgcHJvY2Vzc2VkOiB7XG4gICAgdmFsdWU6ICdwcm9jZXNzZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJlcXVlc3QgaGFzIGJlZW4gcHJvY2Vzc2VkJyxcbiAgfSxcbn07XG5cbmNvbnN0IFJlcXVlc3RTdGF0dXMgPSB7fTtcblxuT2JqZWN0LmtleXMoUmVxdWVzdFN0YXR1c1ZhbHVlcylcbiAgLm1hcChyID0+IFJlcXVlc3RTdGF0dXNWYWx1ZXNbcl0udmFsdWUpXG4gIC5mb3JFYWNoKChyKSA9PiB7IFJlcXVlc3RTdGF0dXNbcl0gPSByOyB9KTtcblxuZXhwb3J0IGNvbnN0IFJlcXVlc3RTdGF0dXNFbnVtID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICdSZXF1ZXN0U3RhdHVzRW51bScsXG4gIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBTdGF0dXMgRW51bScsXG4gIHZhbHVlczogUmVxdWVzdFN0YXR1c1ZhbHVlcyxcbn0pO1xuIl19