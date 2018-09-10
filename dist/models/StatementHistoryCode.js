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
  CashIn: {
    value: 10,
    description: 'Deposit in person at the bank'
  },
  EscrowRollback: {
    value: 12,
    description: 'Rollback amount for an Escrow'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNvZGUuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtIiwiT3RoZXIiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQXRtT3V0IiwiQ2FzaEluIiwiRXNjcm93Um9sbGJhY2siLCJFc2Nyb3dPdXQiLCJFc2Nyb3dJbiIsIk90aGVyRmVlcyIsIkZlZVJlZnVuZCIsIkNyb25PdXQiLCJCb2xldG9GZWUiLCJCYW5rQ3JlZGl0IiwiQmFua0RlYml0IiwiQmFua0ludmVzdG1lbnQiLCJCYW5rSW52ZXN0bWVudFJldHVybiIsIlN0YXRlbWVudEhpc3RvcnlDb2RlRW51bUdyYXBoUUwiLCJHcmFwaFFMRW51bVR5cGUiLCJuYW1lIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRU8sSUFBTUEsOERBQTJCO0FBQ3RDQyxTQUFPO0FBQ0xDLFdBQU8sQ0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBRCtCO0FBS3RDQyxXQUFTO0FBQ1BGLFdBQU8sQ0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBTDZCO0FBU3RDRSxZQUFVO0FBQ1JILFdBQU8sQ0FEQztBQUVSQyxpQkFBYTtBQUZMLEdBVDRCO0FBYXRDRyxjQUFZO0FBQ1ZKLFdBQU8sQ0FERztBQUVWQyxpQkFBYTtBQUZILEdBYjBCO0FBaUJ0Q0ksZUFBYTtBQUNYTCxXQUFPLENBREk7QUFFWEMsaUJBQWE7QUFGRixHQWpCeUI7QUFxQnRDSyxrQkFBZ0I7QUFDZE4sV0FBTyxDQURPO0FBRWRDLGlCQUFhO0FBRkMsR0FyQnNCO0FBeUJ0Q00sY0FBWTtBQUNWUCxXQUFPLENBREc7QUFFVkMsaUJBQWE7QUFGSCxHQXpCMEI7QUE2QnRDTyxpQkFBZTtBQUNiUixXQUFPLENBRE07QUFFYkMsaUJBQWE7QUFGQSxHQTdCdUI7QUFpQ3RDUSxZQUFVO0FBQ1JULFdBQU8sQ0FEQztBQUVSQyxpQkFBYTtBQUZMLEdBakM0QjtBQXFDdENTLFVBQVE7QUFDTlYsV0FBTyxDQUREO0FBRU5DLGlCQUFhO0FBRlAsR0FyQzhCO0FBeUN0Q1UsVUFBUTtBQUNOWCxXQUFPLEVBREQ7QUFFTkMsaUJBQWE7QUFGUCxHQXpDOEI7QUE2Q3RDVyxrQkFBZ0I7QUFDZFosV0FBTyxFQURPO0FBRWRDLGlCQUFhO0FBRkMsR0E3Q3NCO0FBaUR0Q1ksYUFBVztBQUNUYixXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQWpEMkI7QUFxRHRDYSxZQUFVO0FBQ1JkLFdBQU8sRUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBckQ0QjtBQXlEdENjLGFBQVc7QUFDVGYsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRkosR0F6RDJCO0FBNkR0Q2UsYUFBVztBQUNUaEIsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRkosR0E3RDJCO0FBaUV0Q2dCLFdBQVM7QUFDUGpCLFdBQU8sRUFEQTtBQUVQQyxpQkFBYTtBQUZOLEdBakU2QjtBQXFFdENpQixhQUFXO0FBQ1RsQixXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQXJFMkI7QUF5RXRDa0IsY0FBWTtBQUNWbkIsV0FBTyxFQURHO0FBRVZDLGlCQUFhO0FBRkgsR0F6RTBCO0FBNkV0Q21CLGFBQVc7QUFDVHBCLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBN0UyQjtBQWlGdENvQixrQkFBZ0I7QUFDZHJCLFdBQU8sRUFETztBQUVkQyxpQkFBYTtBQUZDLEdBakZzQjtBQXFGdENxQix3QkFBc0I7QUFDcEJ0QixXQUFPLEVBRGE7QUFFcEJDLGlCQUFhO0FBRk87QUFyRmdCLENBQWpDLEMsQ0FQUDs7Ozs7QUFrR08sSUFBTXNCLDRFQUFrQyxJQUFJQyx3QkFBSixDQUFvQjtBQUNqRUMsUUFBTSx5QkFEMkQ7QUFFakV4QixlQUFhLDZCQUZvRDtBQUdqRXlCLFVBQVE1QjtBQUh5RCxDQUFwQixDQUF4QyIsImZpbGUiOiJTdGF0ZW1lbnRIaXN0b3J5Q29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyOS8wMy8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHsgR3JhcGhRTEVudW1UeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0gPSB7XG4gIE90aGVyOiB7XG4gICAgdmFsdWU6IDAsXG4gICAgZGVzY3JpcHRpb246ICdPdGhlcnMgKHNlZSBzdGF0ZW1lbnQgZGVzY3JpcHRpb24pJyxcbiAgfSxcbiAgTG9jYWxJbjoge1xuICAgIHZhbHVlOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnU2FtZSBiYW5rIHRyYW5zZmVyIHJlY2VpdmUnLFxuICB9LFxuICBMb2NhbE91dDoge1xuICAgIHZhbHVlOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnU2FtZSBiYW5rIHRyYW5zZmVyIHNlbnQnLFxuICB9LFxuICBFeHRlcm5hbEluOiB7XG4gICAgdmFsdWU6IDMsXG4gICAgZGVzY3JpcHRpb246ICdEaWZmZXJlbnQgYmFuayB0cmFuc2ZlciByZWNlaXZlJyxcbiAgfSxcbiAgRXh0ZXJuYWxPdXQ6IHtcbiAgICB2YWx1ZTogNCxcbiAgICBkZXNjcmlwdGlvbjogJ0RpZmZlcmVudCBiYW5rIHRyYW5zZmVyIHNlbnQnLFxuICB9LFxuICBFeHRlcm5hbFJlZnVuZDoge1xuICAgIHZhbHVlOiA1LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVmdW5kIGZyb20gZGlmZmVyZW50IGJhbmsgdHJhbnNmZXInLFxuICB9LFxuICBQYXltZW50T3V0OiB7XG4gICAgdmFsdWU6IDYsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2ZlciBmb3IgYSBwYXltZW50JyxcbiAgfSxcbiAgUGF5bWVudFJlZnVuZDoge1xuICAgIHZhbHVlOiA3LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVmdW5kIGZvciBhIHBheW1lbnQnLFxuICB9LFxuICBCb2xldG9Jbjoge1xuICAgIHZhbHVlOiA4LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVjZWl2aW5ncyBmcm9tIEJvbGV0b3MnLFxuICB9LFxuICBBdG1PdXQ6IHtcbiAgICB2YWx1ZTogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0FUTSBDYXNoIE91dCcsXG4gIH0sXG4gIENhc2hJbjoge1xuICAgIHZhbHVlOiAxMCxcbiAgICBkZXNjcmlwdGlvbjogJ0RlcG9zaXQgaW4gcGVyc29uIGF0IHRoZSBiYW5rJyxcbiAgfSxcbiAgRXNjcm93Um9sbGJhY2s6IHtcbiAgICB2YWx1ZTogMTIsXG4gICAgZGVzY3JpcHRpb246ICdSb2xsYmFjayBhbW91bnQgZm9yIGFuIEVzY3JvdycsXG4gIH0sXG4gIEVzY3Jvd091dDoge1xuICAgIHZhbHVlOiAxMyxcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIG91dCBmb3IgYW4gRXNjcm93JyxcbiAgfSxcbiAgRXNjcm93SW46IHtcbiAgICB2YWx1ZTogMTQsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZlIGZyb20gYW4gRXNjcm93JyxcbiAgfSxcbiAgT3RoZXJGZWVzOiB7XG4gICAgdmFsdWU6IDE1LFxuICAgIGRlc2NyaXB0aW9uOiAnR2VuZXJpYyBGZWUgQ2hhcmdlJyxcbiAgfSxcbiAgRmVlUmVmdW5kOiB7XG4gICAgdmFsdWU6IDE2LFxuICAgIGRlc2NyaXB0aW9uOiAnRmVlIENoYXJnZSBSZWZ1bmQnLFxuICB9LFxuICBDcm9uT3V0OiB7XG4gICAgdmFsdWU6IDE3LFxuICAgIGRlc2NyaXB0aW9uOiAnU2NoZWR1bGVkIGF1dG9tYXRpYyBkZWJpdCcsXG4gIH0sXG4gIEJvbGV0b0ZlZToge1xuICAgIHZhbHVlOiAxOCxcbiAgICBkZXNjcmlwdGlvbjogJ0ZlZSBmb3IgY3JlYXRpbmcgYm9sZXRvcycsXG4gIH0sXG4gIEJhbmtDcmVkaXQ6IHtcbiAgICB2YWx1ZTogMTksXG4gICAgZGVzY3JpcHRpb246ICdCYW5rIENyZWRpdCcsXG4gIH0sXG4gIEJhbmtEZWJpdDoge1xuICAgIHZhbHVlOiAyMCxcbiAgICBkZXNjcmlwdGlvbjogJ0JhbmsgRGViaXQnLFxuICB9LFxuICBCYW5rSW52ZXN0bWVudDoge1xuICAgIHZhbHVlOiAyMSxcbiAgICBkZXNjcmlwdGlvbjogJ0JhbmsgSW52ZXN0bWVudCcsXG4gIH0sXG4gIEJhbmtJbnZlc3RtZW50UmV0dXJuOiB7XG4gICAgdmFsdWU6IDIyLFxuICAgIGRlc2NyaXB0aW9uOiAnQmFuayBJbnZlc3RtZW50IFJldHVybicsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtR3JhcGhRTCA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICBuYW1lOiAndGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0nLFxuICBkZXNjcmlwdGlvbjogJ1N0YXRlbWVudCBIaXN0b3J5IENvZGUgRW51bScsXG4gIHZhbHVlczogU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLFxufSk7XG4iXX0=