'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatementHistoryCodeEnumGraphQL = exports.StatementHistoryCodeEnum = undefined;

var _graphql = require('graphql');

var StatementHistoryCodeEnum = exports.StatementHistoryCodeEnum = {
  Other: {
    value: 0,
    description: 'Others (see statement description)'
  },
  LocalIn: {
    value: 1,
    description: 'Same bank transfer receive'
  },
  LocalOut: {
    value: 2,
    description: 'Same bank transfer sent'
  },
  ExternalIn: {
    value: 3,
    description: 'Different bank transfer receive'
  },
  ExternalOut: {
    value: 4,
    description: 'Different bank transfer sent'
  },
  ExternalRefund: {
    value: 5,
    description: 'Refund from different bank transfer'
  },
  PaymentOut: {
    value: 6,
    description: 'Transfer for a payment'
  },
  PaymentRefund: {
    value: 7,
    description: 'Refund for a payment'
  },
  BoletoIn: {
    value: 8,
    description: 'Receivings from Boletos'
  },
  AtmOut: {
    value: 9,
    description: 'ATM Cash Out'
  },
  PresentDeposit: {
    value: 10,
    description: 'Deposit in person at the bank'
  },
  EscrowLock: {
    value: 11,
    description: 'Locked amount for an Escrow'
  },
  EscrowUnlock: {
    value: 12,
    description: 'Unlocked amount for an Escrow'
  },
  EscrowOut: {
    value: 13,
    description: 'Transfer out for an Escrow'
  },
  EscrowIn: {
    value: 14,
    description: 'Receive from an Escrow'
  },
  OtherFees: {
    value: 15,
    description: 'Generic Fee Charge'
  },
  FeeRefund: {
    value: 16,
    description: 'Fee Charge Refund'
  },
  CronOut: {
    value: 17,
    description: 'Scheduled automatic debit'
  }
}; /**
    * Created by Lucas Teske on 29/03/18.
    * 
    */

var StatementHistoryCodeEnumGraphQL = exports.StatementHistoryCodeEnumGraphQL = new _graphql.GraphQLEnumType({
  name: 'tatementHistoryCodeEnum',
  description: 'Statement History Code Enum',
  values: StatementHistoryCodeEnum
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNvZGUuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtIiwiT3RoZXIiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQXRtT3V0IiwiUHJlc2VudERlcG9zaXQiLCJFc2Nyb3dMb2NrIiwiRXNjcm93VW5sb2NrIiwiRXNjcm93T3V0IiwiRXNjcm93SW4iLCJPdGhlckZlZXMiLCJGZWVSZWZ1bmQiLCJDcm9uT3V0IiwiU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtR3JhcGhRTCIsIm5hbWUiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFJTyxJQUFNQSw4REFBMkI7QUFDdENDLFNBQU87QUFDTEMsV0FBTyxDQURGO0FBRUxDLGlCQUFhO0FBRlIsR0FEK0I7QUFLdENDLFdBQVM7QUFDUEYsV0FBTyxDQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FMNkI7QUFTdENFLFlBQVU7QUFDUkgsV0FBTyxDQURDO0FBRVJDLGlCQUFhO0FBRkwsR0FUNEI7QUFhdENHLGNBQVk7QUFDVkosV0FBTyxDQURHO0FBRVZDLGlCQUFhO0FBRkgsR0FiMEI7QUFpQnRDSSxlQUFhO0FBQ1hMLFdBQU8sQ0FESTtBQUVYQyxpQkFBYTtBQUZGLEdBakJ5QjtBQXFCdENLLGtCQUFnQjtBQUNkTixXQUFPLENBRE87QUFFZEMsaUJBQWE7QUFGQyxHQXJCc0I7QUF5QnRDTSxjQUFZO0FBQ1ZQLFdBQU8sQ0FERztBQUVWQyxpQkFBYTtBQUZILEdBekIwQjtBQTZCdENPLGlCQUFlO0FBQ2JSLFdBQU8sQ0FETTtBQUViQyxpQkFBYTtBQUZBLEdBN0J1QjtBQWlDdENRLFlBQVU7QUFDUlQsV0FBTyxDQURDO0FBRVJDLGlCQUFhO0FBRkwsR0FqQzRCO0FBcUN0Q1MsVUFBUTtBQUNOVixXQUFPLENBREQ7QUFFTkMsaUJBQWE7QUFGUCxHQXJDOEI7QUF5Q3RDVSxrQkFBZ0I7QUFDZFgsV0FBTyxFQURPO0FBRWRDLGlCQUFhO0FBRkMsR0F6Q3NCO0FBNkN0Q1csY0FBWTtBQUNWWixXQUFPLEVBREc7QUFFVkMsaUJBQWE7QUFGSCxHQTdDMEI7QUFpRHRDWSxnQkFBYztBQUNaYixXQUFPLEVBREs7QUFFWkMsaUJBQWE7QUFGRCxHQWpEd0I7QUFxRHRDYSxhQUFXO0FBQ1RkLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBckQyQjtBQXlEdENjLFlBQVU7QUFDUmYsV0FBTyxFQURDO0FBRVJDLGlCQUFhO0FBRkwsR0F6RDRCO0FBNkR0Q2UsYUFBVztBQUNUaEIsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRkosR0E3RDJCO0FBaUV0Q2dCLGFBQVc7QUFDVGpCLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBakUyQjtBQXFFdENpQixXQUFTO0FBQ1BsQixXQUFPLEVBREE7QUFFUEMsaUJBQWE7QUFGTjtBQXJFNkIsQ0FBakMsQyxDQVRQOzs7OztBQW9GTyxJQUFNa0IsNEVBQWtDLDZCQUFvQjtBQUNqRUMsUUFBTSx5QkFEMkQ7QUFFakVuQixlQUFhLDZCQUZvRDtBQUdqRW9CLFVBQVF2QjtBQUh5RCxDQUFwQixDQUF4QyIsImZpbGUiOiJTdGF0ZW1lbnRIaXN0b3J5Q29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyOS8wMy8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTEVudW1UeXBlLFxufSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bSA9IHtcbiAgT3RoZXI6IHtcbiAgICB2YWx1ZTogMCxcbiAgICBkZXNjcmlwdGlvbjogJ090aGVycyAoc2VlIHN0YXRlbWVudCBkZXNjcmlwdGlvbiknLFxuICB9LFxuICBMb2NhbEluOiB7XG4gICAgdmFsdWU6IDEsXG4gICAgZGVzY3JpcHRpb246ICdTYW1lIGJhbmsgdHJhbnNmZXIgcmVjZWl2ZScsXG4gIH0sXG4gIExvY2FsT3V0OiB7XG4gICAgdmFsdWU6IDIsXG4gICAgZGVzY3JpcHRpb246ICdTYW1lIGJhbmsgdHJhbnNmZXIgc2VudCcsXG4gIH0sXG4gIEV4dGVybmFsSW46IHtcbiAgICB2YWx1ZTogMyxcbiAgICBkZXNjcmlwdGlvbjogJ0RpZmZlcmVudCBiYW5rIHRyYW5zZmVyIHJlY2VpdmUnLFxuICB9LFxuICBFeHRlcm5hbE91dDoge1xuICAgIHZhbHVlOiA0LFxuICAgIGRlc2NyaXB0aW9uOiAnRGlmZmVyZW50IGJhbmsgdHJhbnNmZXIgc2VudCcsXG4gIH0sXG4gIEV4dGVybmFsUmVmdW5kOiB7XG4gICAgdmFsdWU6IDUsXG4gICAgZGVzY3JpcHRpb246ICdSZWZ1bmQgZnJvbSBkaWZmZXJlbnQgYmFuayB0cmFuc2ZlcicsXG4gIH0sXG4gIFBheW1lbnRPdXQ6IHtcbiAgICB2YWx1ZTogNixcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIGZvciBhIHBheW1lbnQnLFxuICB9LFxuICBQYXltZW50UmVmdW5kOiB7XG4gICAgdmFsdWU6IDcsXG4gICAgZGVzY3JpcHRpb246ICdSZWZ1bmQgZm9yIGEgcGF5bWVudCcsXG4gIH0sXG4gIEJvbGV0b0luOiB7XG4gICAgdmFsdWU6IDgsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZpbmdzIGZyb20gQm9sZXRvcycsXG4gIH0sXG4gIEF0bU91dDoge1xuICAgIHZhbHVlOiA5LFxuICAgIGRlc2NyaXB0aW9uOiAnQVRNIENhc2ggT3V0JyxcbiAgfSxcbiAgUHJlc2VudERlcG9zaXQ6IHtcbiAgICB2YWx1ZTogMTAsXG4gICAgZGVzY3JpcHRpb246ICdEZXBvc2l0IGluIHBlcnNvbiBhdCB0aGUgYmFuaycsXG4gIH0sXG4gIEVzY3Jvd0xvY2s6IHtcbiAgICB2YWx1ZTogMTEsXG4gICAgZGVzY3JpcHRpb246ICdMb2NrZWQgYW1vdW50IGZvciBhbiBFc2Nyb3cnLFxuICB9LFxuICBFc2Nyb3dVbmxvY2s6IHtcbiAgICB2YWx1ZTogMTIsXG4gICAgZGVzY3JpcHRpb246ICdVbmxvY2tlZCBhbW91bnQgZm9yIGFuIEVzY3JvdycsXG4gIH0sXG4gIEVzY3Jvd091dDoge1xuICAgIHZhbHVlOiAxMyxcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIG91dCBmb3IgYW4gRXNjcm93JyxcbiAgfSxcbiAgRXNjcm93SW46IHtcbiAgICB2YWx1ZTogMTQsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZlIGZyb20gYW4gRXNjcm93JyxcbiAgfSxcbiAgT3RoZXJGZWVzOiB7XG4gICAgdmFsdWU6IDE1LFxuICAgIGRlc2NyaXB0aW9uOiAnR2VuZXJpYyBGZWUgQ2hhcmdlJyxcbiAgfSxcbiAgRmVlUmVmdW5kOiB7XG4gICAgdmFsdWU6IDE2LFxuICAgIGRlc2NyaXB0aW9uOiAnRmVlIENoYXJnZSBSZWZ1bmQnLFxuICB9LFxuICBDcm9uT3V0OiB7XG4gICAgdmFsdWU6IDE3LFxuICAgIGRlc2NyaXB0aW9uOiAnU2NoZWR1bGVkIGF1dG9tYXRpYyBkZWJpdCcsXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW1HcmFwaFFMID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICd0YXRlbWVudEhpc3RvcnlDb2RlRW51bScsXG4gIGRlc2NyaXB0aW9uOiAnU3RhdGVtZW50IEhpc3RvcnkgQ29kZSBFbnVtJyxcbiAgdmFsdWVzOiBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0sXG59KTsiXX0=