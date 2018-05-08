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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNvZGUuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtIiwiT3RoZXIiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQXRtT3V0IiwiUHJlc2VudERlcG9zaXQiLCJFc2Nyb3dMb2NrIiwiRXNjcm93VW5sb2NrIiwiRXNjcm93T3V0IiwiRXNjcm93SW4iLCJPdGhlckZlZXMiLCJGZWVSZWZ1bmQiLCJDcm9uT3V0IiwiQm9sZXRvRmVlIiwiQmFua0NyZWRpdCIsIkJhbmtEZWJpdCIsIlN0YXRlbWVudEhpc3RvcnlDb2RlRW51bUdyYXBoUUwiLCJuYW1lIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBSU8sSUFBTUEsOERBQTJCO0FBQ3RDQyxTQUFPO0FBQ0xDLFdBQU8sQ0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBRCtCO0FBS3RDQyxXQUFTO0FBQ1BGLFdBQU8sQ0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBTDZCO0FBU3RDRSxZQUFVO0FBQ1JILFdBQU8sQ0FEQztBQUVSQyxpQkFBYTtBQUZMLEdBVDRCO0FBYXRDRyxjQUFZO0FBQ1ZKLFdBQU8sQ0FERztBQUVWQyxpQkFBYTtBQUZILEdBYjBCO0FBaUJ0Q0ksZUFBYTtBQUNYTCxXQUFPLENBREk7QUFFWEMsaUJBQWE7QUFGRixHQWpCeUI7QUFxQnRDSyxrQkFBZ0I7QUFDZE4sV0FBTyxDQURPO0FBRWRDLGlCQUFhO0FBRkMsR0FyQnNCO0FBeUJ0Q00sY0FBWTtBQUNWUCxXQUFPLENBREc7QUFFVkMsaUJBQWE7QUFGSCxHQXpCMEI7QUE2QnRDTyxpQkFBZTtBQUNiUixXQUFPLENBRE07QUFFYkMsaUJBQWE7QUFGQSxHQTdCdUI7QUFpQ3RDUSxZQUFVO0FBQ1JULFdBQU8sQ0FEQztBQUVSQyxpQkFBYTtBQUZMLEdBakM0QjtBQXFDdENTLFVBQVE7QUFDTlYsV0FBTyxDQUREO0FBRU5DLGlCQUFhO0FBRlAsR0FyQzhCO0FBeUN0Q1Usa0JBQWdCO0FBQ2RYLFdBQU8sRUFETztBQUVkQyxpQkFBYTtBQUZDLEdBekNzQjtBQTZDdENXLGNBQVk7QUFDVlosV0FBTyxFQURHO0FBRVZDLGlCQUFhO0FBRkgsR0E3QzBCO0FBaUR0Q1ksZ0JBQWM7QUFDWmIsV0FBTyxFQURLO0FBRVpDLGlCQUFhO0FBRkQsR0FqRHdCO0FBcUR0Q2EsYUFBVztBQUNUZCxXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQXJEMkI7QUF5RHRDYyxZQUFVO0FBQ1JmLFdBQU8sRUFEQztBQUVSQyxpQkFBYTtBQUZMLEdBekQ0QjtBQTZEdENlLGFBQVc7QUFDVGhCLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBN0QyQjtBQWlFdENnQixhQUFXO0FBQ1RqQixXQUFPLEVBREU7QUFFVEMsaUJBQWE7QUFGSixHQWpFMkI7QUFxRXRDaUIsV0FBUztBQUNQbEIsV0FBTyxFQURBO0FBRVBDLGlCQUFhO0FBRk4sR0FyRTZCO0FBeUV0Q2tCLGFBQVc7QUFDVG5CLFdBQU8sRUFERTtBQUVUQyxpQkFBYTtBQUZKLEdBekUyQjtBQTZFdENtQixjQUFZO0FBQ1ZwQixXQUFPLEVBREc7QUFFVkMsaUJBQWE7QUFGSCxHQTdFMEI7QUFpRnRDb0IsYUFBVztBQUNUckIsV0FBTyxFQURFO0FBRVRDLGlCQUFhO0FBRko7QUFqRjJCLENBQWpDLEMsQ0FUUDs7Ozs7QUFnR08sSUFBTXFCLDRFQUFrQyw2QkFBb0I7QUFDakVDLFFBQU0seUJBRDJEO0FBRWpFdEIsZUFBYSw2QkFGb0Q7QUFHakV1QixVQUFRMUI7QUFIeUQsQ0FBcEIsQ0FBeEMiLCJmaWxlIjoiU3RhdGVtZW50SGlzdG9yeUNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjkvMDMvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7XG4gIEdyYXBoUUxFbnVtVHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0gPSB7XG4gIE90aGVyOiB7XG4gICAgdmFsdWU6IDAsXG4gICAgZGVzY3JpcHRpb246ICdPdGhlcnMgKHNlZSBzdGF0ZW1lbnQgZGVzY3JpcHRpb24pJyxcbiAgfSxcbiAgTG9jYWxJbjoge1xuICAgIHZhbHVlOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnU2FtZSBiYW5rIHRyYW5zZmVyIHJlY2VpdmUnLFxuICB9LFxuICBMb2NhbE91dDoge1xuICAgIHZhbHVlOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnU2FtZSBiYW5rIHRyYW5zZmVyIHNlbnQnLFxuICB9LFxuICBFeHRlcm5hbEluOiB7XG4gICAgdmFsdWU6IDMsXG4gICAgZGVzY3JpcHRpb246ICdEaWZmZXJlbnQgYmFuayB0cmFuc2ZlciByZWNlaXZlJyxcbiAgfSxcbiAgRXh0ZXJuYWxPdXQ6IHtcbiAgICB2YWx1ZTogNCxcbiAgICBkZXNjcmlwdGlvbjogJ0RpZmZlcmVudCBiYW5rIHRyYW5zZmVyIHNlbnQnLFxuICB9LFxuICBFeHRlcm5hbFJlZnVuZDoge1xuICAgIHZhbHVlOiA1LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVmdW5kIGZyb20gZGlmZmVyZW50IGJhbmsgdHJhbnNmZXInLFxuICB9LFxuICBQYXltZW50T3V0OiB7XG4gICAgdmFsdWU6IDYsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2ZlciBmb3IgYSBwYXltZW50JyxcbiAgfSxcbiAgUGF5bWVudFJlZnVuZDoge1xuICAgIHZhbHVlOiA3LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVmdW5kIGZvciBhIHBheW1lbnQnLFxuICB9LFxuICBCb2xldG9Jbjoge1xuICAgIHZhbHVlOiA4LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVjZWl2aW5ncyBmcm9tIEJvbGV0b3MnLFxuICB9LFxuICBBdG1PdXQ6IHtcbiAgICB2YWx1ZTogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0FUTSBDYXNoIE91dCcsXG4gIH0sXG4gIFByZXNlbnREZXBvc2l0OiB7XG4gICAgdmFsdWU6IDEwLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVwb3NpdCBpbiBwZXJzb24gYXQgdGhlIGJhbmsnLFxuICB9LFxuICBFc2Nyb3dMb2NrOiB7XG4gICAgdmFsdWU6IDExLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9ja2VkIGFtb3VudCBmb3IgYW4gRXNjcm93JyxcbiAgfSxcbiAgRXNjcm93VW5sb2NrOiB7XG4gICAgdmFsdWU6IDEyLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5sb2NrZWQgYW1vdW50IGZvciBhbiBFc2Nyb3cnLFxuICB9LFxuICBFc2Nyb3dPdXQ6IHtcbiAgICB2YWx1ZTogMTMsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2ZlciBvdXQgZm9yIGFuIEVzY3JvdycsXG4gIH0sXG4gIEVzY3Jvd0luOiB7XG4gICAgdmFsdWU6IDE0LFxuICAgIGRlc2NyaXB0aW9uOiAnUmVjZWl2ZSBmcm9tIGFuIEVzY3JvdycsXG4gIH0sXG4gIE90aGVyRmVlczoge1xuICAgIHZhbHVlOiAxNSxcbiAgICBkZXNjcmlwdGlvbjogJ0dlbmVyaWMgRmVlIENoYXJnZScsXG4gIH0sXG4gIEZlZVJlZnVuZDoge1xuICAgIHZhbHVlOiAxNixcbiAgICBkZXNjcmlwdGlvbjogJ0ZlZSBDaGFyZ2UgUmVmdW5kJyxcbiAgfSxcbiAgQ3Jvbk91dDoge1xuICAgIHZhbHVlOiAxNyxcbiAgICBkZXNjcmlwdGlvbjogJ1NjaGVkdWxlZCBhdXRvbWF0aWMgZGViaXQnLFxuICB9LFxuICBCb2xldG9GZWU6IHtcbiAgICB2YWx1ZTogMTgsXG4gICAgZGVzY3JpcHRpb246ICdGZWUgZm9yIGNyZWF0aW5nIGJvbGV0b3MnLFxuICB9LFxuICBCYW5rQ3JlZGl0OiB7XG4gICAgdmFsdWU6IDE5LFxuICAgIGRlc2NyaXB0aW9uOiAnQmFuayBDcmVkaXQnLFxuICB9LFxuICBCYW5rRGViaXQ6IHtcbiAgICB2YWx1ZTogMjAsXG4gICAgZGVzY3JpcHRpb246ICdCYW5rIERlYml0JyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW1HcmFwaFFMID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICd0YXRlbWVudEhpc3RvcnlDb2RlRW51bScsXG4gIGRlc2NyaXB0aW9uOiAnU3RhdGVtZW50IEhpc3RvcnkgQ29kZSBFbnVtJyxcbiAgdmFsdWVzOiBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0sXG59KTtcbiJdfQ==