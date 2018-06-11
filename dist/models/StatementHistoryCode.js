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
  },
  BoletoFee: {
    value: 18,
    description: 'Fee for creating boletos'
  },
  BankCredit: {
    value: 19,
    description: 'Bank Credit'
  },
  BankDebit: {
    value: 20,
    description: 'Bank Debit'
  },
  BankInvestment: {
    value: 21,
    description: 'Bank Investment'
  },
  BankInvestmentReturn: {
    value: 22,
    description: 'Bank Investment Return'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNvZGUuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtIiwiT3RoZXIiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQXRtT3V0IiwiUHJlc2VudERlcG9zaXQiLCJFc2Nyb3dMb2NrIiwiRXNjcm93VW5sb2NrIiwiRXNjcm93T3V0IiwiRXNjcm93SW4iLCJPdGhlckZlZXMiLCJGZWVSZWZ1bmQiLCJDcm9uT3V0IiwiQm9sZXRvRmVlIiwiQmFua0NyZWRpdCIsIkJhbmtEZWJpdCIsIkJhbmtJbnZlc3RtZW50IiwiQmFua0ludmVzdG1lbnRSZXR1cm4iLCJTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW1HcmFwaFFMIiwiR3JhcGhRTEVudW1UeXBlIiwibmFtZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUlPLElBQU1BLDhEQUEyQjtBQUN0Q0MsU0FBTztBQUNMQyxXQUFPLENBREY7QUFFTEMsaUJBQWE7QUFGUixHQUQrQjtBQUt0Q0MsV0FBUztBQUNQRixXQUFPLENBREE7QUFFUEMsaUJBQWE7QUFGTixHQUw2QjtBQVN0Q0UsWUFBVTtBQUNSSCxXQUFPLENBREM7QUFFUkMsaUJBQWE7QUFGTCxHQVQ0QjtBQWF0Q0csY0FBWTtBQUNWSixXQUFPLENBREc7QUFFVkMsaUJBQWE7QUFGSCxHQWIwQjtBQWlCdENJLGVBQWE7QUFDWEwsV0FBTyxDQURJO0FBRVhDLGlCQUFhO0FBRkYsR0FqQnlCO0FBcUJ0Q0ssa0JBQWdCO0FBQ2ROLFdBQU8sQ0FETztBQUVkQyxpQkFBYTtBQUZDLEdBckJzQjtBQXlCdENNLGNBQVk7QUFDVlAsV0FBTyxDQURHO0FBRVZDLGlCQUFhO0FBRkgsR0F6QjBCO0FBNkJ0Q08saUJBQWU7QUFDYlIsV0FBTyxDQURNO0FBRWJDLGlCQUFhO0FBRkEsR0E3QnVCO0FBaUN0Q1EsWUFBVTtBQUNSVCxXQUFPLENBREM7QUFFUkMsaUJBQWE7QUFGTCxHQWpDNEI7QUFxQ3RDUyxVQUFRO0FBQ05WLFdBQU8sQ0FERDtBQUVOQyxpQkFBYTtBQUZQLEdBckM4QjtBQXlDdENVLGtCQUFnQjtBQUNkWCxXQUFPLEVBRE87QUFFZEMsaUJBQWE7QUFGQyxHQXpDc0I7QUE2Q3RDVyxjQUFZO0FBQ1ZaLFdBQU8sRUFERztBQUVWQyxpQkFBYTtBQUZILEdBN0MwQjtBQWlEdENZLGdCQUFjO0FBQ1piLFdBQU8sRUFESztBQUVaQyxpQkFBYTtBQUZELEdBakR3QjtBQXFEdENhLGFBQVc7QUFDVGQsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRkosR0FyRDJCO0FBeUR0Q2MsWUFBVTtBQUNSZixXQUFPLEVBREM7QUFFUkMsaUJBQWE7QUFGTCxHQXpENEI7QUE2RHRDZSxhQUFXO0FBQ1RoQixXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQTdEMkI7QUFpRXRDZ0IsYUFBVztBQUNUakIsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRkosR0FqRTJCO0FBcUV0Q2lCLFdBQVM7QUFDUGxCLFdBQU8sRUFEQTtBQUVQQyxpQkFBYTtBQUZOLEdBckU2QjtBQXlFdENrQixhQUFXO0FBQ1RuQixXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQXpFMkI7QUE2RXRDbUIsY0FBWTtBQUNWcEIsV0FBTyxFQURHO0FBRVZDLGlCQUFhO0FBRkgsR0E3RTBCO0FBaUZ0Q29CLGFBQVc7QUFDVHJCLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBakYyQjtBQXFGdENxQixrQkFBZ0I7QUFDZHRCLFdBQU8sRUFETztBQUVkQyxpQkFBYTtBQUZDLEdBckZzQjtBQXlGdENzQix3QkFBc0I7QUFDcEJ2QixXQUFPLEVBRGE7QUFFcEJDLGlCQUFhO0FBRk87QUF6RmdCLENBQWpDLEMsQ0FUUDs7Ozs7QUF3R08sSUFBTXVCLDRFQUFrQyxJQUFJQyx3QkFBSixDQUFvQjtBQUNqRUMsUUFBTSx5QkFEMkQ7QUFFakV6QixlQUFhLDZCQUZvRDtBQUdqRTBCLFVBQVE3QjtBQUh5RCxDQUFwQixDQUF4QyIsImZpbGUiOiJTdGF0ZW1lbnRIaXN0b3J5Q29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyOS8wMy8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTEVudW1UeXBlLFxufSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bSA9IHtcbiAgT3RoZXI6IHtcbiAgICB2YWx1ZTogMCxcbiAgICBkZXNjcmlwdGlvbjogJ090aGVycyAoc2VlIHN0YXRlbWVudCBkZXNjcmlwdGlvbiknLFxuICB9LFxuICBMb2NhbEluOiB7XG4gICAgdmFsdWU6IDEsXG4gICAgZGVzY3JpcHRpb246ICdTYW1lIGJhbmsgdHJhbnNmZXIgcmVjZWl2ZScsXG4gIH0sXG4gIExvY2FsT3V0OiB7XG4gICAgdmFsdWU6IDIsXG4gICAgZGVzY3JpcHRpb246ICdTYW1lIGJhbmsgdHJhbnNmZXIgc2VudCcsXG4gIH0sXG4gIEV4dGVybmFsSW46IHtcbiAgICB2YWx1ZTogMyxcbiAgICBkZXNjcmlwdGlvbjogJ0RpZmZlcmVudCBiYW5rIHRyYW5zZmVyIHJlY2VpdmUnLFxuICB9LFxuICBFeHRlcm5hbE91dDoge1xuICAgIHZhbHVlOiA0LFxuICAgIGRlc2NyaXB0aW9uOiAnRGlmZmVyZW50IGJhbmsgdHJhbnNmZXIgc2VudCcsXG4gIH0sXG4gIEV4dGVybmFsUmVmdW5kOiB7XG4gICAgdmFsdWU6IDUsXG4gICAgZGVzY3JpcHRpb246ICdSZWZ1bmQgZnJvbSBkaWZmZXJlbnQgYmFuayB0cmFuc2ZlcicsXG4gIH0sXG4gIFBheW1lbnRPdXQ6IHtcbiAgICB2YWx1ZTogNixcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIGZvciBhIHBheW1lbnQnLFxuICB9LFxuICBQYXltZW50UmVmdW5kOiB7XG4gICAgdmFsdWU6IDcsXG4gICAgZGVzY3JpcHRpb246ICdSZWZ1bmQgZm9yIGEgcGF5bWVudCcsXG4gIH0sXG4gIEJvbGV0b0luOiB7XG4gICAgdmFsdWU6IDgsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZpbmdzIGZyb20gQm9sZXRvcycsXG4gIH0sXG4gIEF0bU91dDoge1xuICAgIHZhbHVlOiA5LFxuICAgIGRlc2NyaXB0aW9uOiAnQVRNIENhc2ggT3V0JyxcbiAgfSxcbiAgUHJlc2VudERlcG9zaXQ6IHtcbiAgICB2YWx1ZTogMTAsXG4gICAgZGVzY3JpcHRpb246ICdEZXBvc2l0IGluIHBlcnNvbiBhdCB0aGUgYmFuaycsXG4gIH0sXG4gIEVzY3Jvd0xvY2s6IHtcbiAgICB2YWx1ZTogMTEsXG4gICAgZGVzY3JpcHRpb246ICdMb2NrZWQgYW1vdW50IGZvciBhbiBFc2Nyb3cnLFxuICB9LFxuICBFc2Nyb3dVbmxvY2s6IHtcbiAgICB2YWx1ZTogMTIsXG4gICAgZGVzY3JpcHRpb246ICdVbmxvY2tlZCBhbW91bnQgZm9yIGFuIEVzY3JvdycsXG4gIH0sXG4gIEVzY3Jvd091dDoge1xuICAgIHZhbHVlOiAxMyxcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIG91dCBmb3IgYW4gRXNjcm93JyxcbiAgfSxcbiAgRXNjcm93SW46IHtcbiAgICB2YWx1ZTogMTQsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZlIGZyb20gYW4gRXNjcm93JyxcbiAgfSxcbiAgT3RoZXJGZWVzOiB7XG4gICAgdmFsdWU6IDE1LFxuICAgIGRlc2NyaXB0aW9uOiAnR2VuZXJpYyBGZWUgQ2hhcmdlJyxcbiAgfSxcbiAgRmVlUmVmdW5kOiB7XG4gICAgdmFsdWU6IDE2LFxuICAgIGRlc2NyaXB0aW9uOiAnRmVlIENoYXJnZSBSZWZ1bmQnLFxuICB9LFxuICBDcm9uT3V0OiB7XG4gICAgdmFsdWU6IDE3LFxuICAgIGRlc2NyaXB0aW9uOiAnU2NoZWR1bGVkIGF1dG9tYXRpYyBkZWJpdCcsXG4gIH0sXG4gIEJvbGV0b0ZlZToge1xuICAgIHZhbHVlOiAxOCxcbiAgICBkZXNjcmlwdGlvbjogJ0ZlZSBmb3IgY3JlYXRpbmcgYm9sZXRvcycsXG4gIH0sXG4gIEJhbmtDcmVkaXQ6IHtcbiAgICB2YWx1ZTogMTksXG4gICAgZGVzY3JpcHRpb246ICdCYW5rIENyZWRpdCcsXG4gIH0sXG4gIEJhbmtEZWJpdDoge1xuICAgIHZhbHVlOiAyMCxcbiAgICBkZXNjcmlwdGlvbjogJ0JhbmsgRGViaXQnLFxuICB9LFxuICBCYW5rSW52ZXN0bWVudDoge1xuICAgIHZhbHVlOiAyMSxcbiAgICBkZXNjcmlwdGlvbjogJ0JhbmsgSW52ZXN0bWVudCcsXG4gIH0sXG4gIEJhbmtJbnZlc3RtZW50UmV0dXJuOiB7XG4gICAgdmFsdWU6IDIyLFxuICAgIGRlc2NyaXB0aW9uOiAnQmFuayBJbnZlc3RtZW50IFJldHVybicsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtR3JhcGhRTCA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICBuYW1lOiAndGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0nLFxuICBkZXNjcmlwdGlvbjogJ1N0YXRlbWVudCBIaXN0b3J5IENvZGUgRW51bScsXG4gIHZhbHVlczogU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLFxufSk7XG4iXX0=