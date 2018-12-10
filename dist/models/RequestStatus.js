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

var RequestStatus = exports.RequestStatus = Object.keys(RequestStatusValues).map(function (r) {
  return RequestStatusValues[r].value;
});

var RequestStatusEnum = exports.RequestStatusEnum = new _graphql.GraphQLEnumType({
  name: 'RequestStatusEnum',
  description: 'Request Status Enum',
  values: RequestStatusValues
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVxdWVzdFN0YXR1cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0U3RhdHVzVmFsdWVzIiwicmVxdWVzdGVkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJ3YWl0aW5nX2RhdGEiLCJhcHByb3ZlZCIsInJlamVjdGVkIiwiZmFpbGVkIiwiZG9uZSIsImNyZWF0ZWQiLCJzZW5kaW5nIiwic2VuZGluZ1JlbW90ZSIsInNlbnQiLCJzZW50UmVtb3RlIiwiZXJyb3IiLCJwcm9jZXNzZWQiLCJSZXF1ZXN0U3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInIiLCJSZXF1ZXN0U3RhdHVzRW51bSIsIkdyYXBoUUxFbnVtVHlwZSIsIm5hbWUiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFTyxJQUFNQSxvREFBc0I7QUFDakNDLGFBQVc7QUFDVEMsV0FBTyxXQURFO0FBRVRDLGlCQUFhO0FBRkosR0FEc0I7QUFLakNDLGNBQVk7QUFDVkYsV0FBTyxZQURHO0FBRVZDLGlCQUFhO0FBRkgsR0FMcUI7QUFTakNFLGdCQUFjO0FBQ1pILFdBQU8sY0FESztBQUVaQyxpQkFBYTtBQUZELEdBVG1CO0FBYWpDRyxZQUFVO0FBQ1JKLFdBQU8sVUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBYnVCO0FBaUJqQ0ksWUFBVTtBQUNSTCxXQUFPLFVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQWpCdUI7QUFxQmpDSyxVQUFRO0FBQ05OLFdBQU8sUUFERDtBQUVOQyxpQkFBYTtBQUZQLEdBckJ5QjtBQXlCakNNLFFBQU07QUFDSlAsV0FBTyxNQURIO0FBRUpDLGlCQUFhO0FBRlQsR0F6QjJCO0FBNkJqQ08sV0FBUztBQUNQUixXQUFPLFNBREE7QUFFUEMsaUJBQWE7QUFGTixHQTdCd0I7QUFpQ2pDUSxXQUFTO0FBQ1BULFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBakN3QjtBQXFDakNTLGlCQUFlO0FBQ2JWLFdBQU8sZUFETTtBQUViQyxpQkFBYTtBQUZBLEdBckNrQjtBQXlDakNVLFFBQU07QUFDSlgsV0FBTyxNQURIO0FBRUpDLGlCQUFhO0FBRlQsR0F6QzJCO0FBNkNqQ1csY0FBWTtBQUNWWixXQUFPLFlBREc7QUFFVkMsaUJBQWE7QUFGSCxHQTdDcUI7QUFpRGpDWSxTQUFPO0FBQ0xiLFdBQU8sT0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBakQwQjtBQXFEakNhLGFBQVc7QUFDVGQsV0FBTyxXQURFO0FBRVRDLGlCQUFhO0FBRko7QUFyRHNCLENBQTVCLEMsQ0FQUDs7Ozs7QUFrRU8sSUFBTWMsd0NBQWdCQyxPQUFPQyxJQUFQLENBQVluQixtQkFBWixFQUFpQ29CLEdBQWpDLENBQXFDO0FBQUEsU0FBS3BCLG9CQUFvQnFCLENBQXBCLEVBQXVCbkIsS0FBNUI7QUFBQSxDQUFyQyxDQUF0Qjs7QUFFQSxJQUFNb0IsZ0RBQW9CLElBQUlDLHdCQUFKLENBQW9CO0FBQ25EQyxRQUFNLG1CQUQ2QztBQUVuRHJCLGVBQWEscUJBRnNDO0FBR25Ec0IsVUFBUXpCO0FBSDJDLENBQXBCLENBQTFCIiwiZmlsZSI6IlJlcXVlc3RTdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMTAvMTIvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c1ZhbHVlcyA9IHtcbiAgcmVxdWVzdGVkOiB7XG4gICAgdmFsdWU6ICdyZXF1ZXN0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBzdGFydGVkJyxcbiAgfSxcbiAgcHJvY2Vzc2luZzoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2luZycsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHByb2Nlc3NpbmcnLFxuICB9LFxuICB3YWl0aW5nX2RhdGE6IHtcbiAgICB2YWx1ZTogJ3dhaXRpbmdfZGF0YScsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHdhaXRpbmcgZm9yIGRhdGEnLFxuICB9LFxuICBhcHByb3ZlZDoge1xuICAgIHZhbHVlOiAnYXBwcm92ZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBhcHByb3ZlZCcsXG4gIH0sXG4gIHJlamVjdGVkOiB7XG4gICAgdmFsdWU6ICdyZWplY3RlZCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHJlamVjdGVkJyxcbiAgfSxcbiAgZmFpbGVkOiB7XG4gICAgdmFsdWU6ICdmYWlsZWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBmYWlsZWQnLFxuICB9LFxuICBkb25lOiB7XG4gICAgdmFsdWU6ICdkb25lJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgZmluaXNoZWQnLFxuICB9LFxuICBjcmVhdGVkOiB7XG4gICAgdmFsdWU6ICdjcmVhdGVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3Qgd2FzIGNyZWF0ZWQnLFxuICB9LFxuICBzZW5kaW5nOiB7XG4gICAgdmFsdWU6ICdzZW5kaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgYmVpbmcgc2VudCcsXG4gIH0sXG4gIHNlbmRpbmdSZW1vdGU6IHtcbiAgICB2YWx1ZTogJ3NlbmRpbmdSZW1vdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWVzdCBpcyBiZWluZyBzZW50IChJbnRlcm5hbCBTdGF0dXMpJyxcbiAgfSxcbiAgc2VudDoge1xuICAgIHZhbHVlOiAnc2VudCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IGlzIHNlbnQnLFxuICB9LFxuICBzZW50UmVtb3RlOiB7XG4gICAgdmFsdWU6ICdzZW50UmVtb3RlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcXVlc3QgaXMgc2VudCAoSW50ZXJuYWwgU3RhdHVzKScsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgdmFsdWU6ICdlcnJvcicsXG4gICAgZGVzY3JpcHRpb246ICdUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB0aGUgcmVxdWVzdCcsXG4gIH0sXG4gIHByb2Nlc3NlZDoge1xuICAgIHZhbHVlOiAncHJvY2Vzc2VkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIHByb2Nlc3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1cyA9IE9iamVjdC5rZXlzKFJlcXVlc3RTdGF0dXNWYWx1ZXMpLm1hcChyID0+IFJlcXVlc3RTdGF0dXNWYWx1ZXNbcl0udmFsdWUpO1xuXG5leHBvcnQgY29uc3QgUmVxdWVzdFN0YXR1c0VudW0gPSBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgbmFtZTogJ1JlcXVlc3RTdGF0dXNFbnVtJyxcbiAgZGVzY3JpcHRpb246ICdSZXF1ZXN0IFN0YXR1cyBFbnVtJyxcbiAgdmFsdWVzOiBSZXF1ZXN0U3RhdHVzVmFsdWVzLFxufSk7XG4iXX0=