'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Lucas Teske on 02/05/17.
 * 
 */

exports.default = {
  // region Public Use
  InternalServerError: 'INTERNAL_SERVER_ERROR',
  NotFound: 'NOT_FOUND',
  EmailAlreadyInUse: 'EMAIL_ALREADY_IN_USE',
  NoDataAvailable: 'NO_DATA_AVAILABLE',
  InvalidLoginInformation: 'INVALID_LOGIN_INFORMATION',
  NotLogged: 'NOT_LOGGED',
  AlreadyExists: 'ALREADY_EXISTS',
  PermissionDenied: 'PERMISSION_DENIED',
  InvalidTokenType: 'INVALID_TOKEN_TYPE',
  InvalidFieldData: 'INVALID_FIELD_DATA',
  AlreadyClient: 'ALREADY_CLIENT',
  AlreadyPaid: 'ALREADY_PAID',
  PaymentError: 'PAYMENT_ERROR',
  InsufficientFunds: 'INSUFFICIENT_FUNDS',
  ServerIsBusy: 'SERVER_IS_BUSY',
  Revoked: 'REVOKED',
  AlreadySigned: 'ALREADY_SIGNED',
  Rejected: 'REJECTED',
  OperationNotSupported: 'OPERATION_NOT_SUPPORTED',
  GraphQLError: 'GRAPHQL_ERROR',
  OperationLimitExceeded: 'OPERATION_LIMIT_EXCEEDED',
  InvalidTransactionDate: 'INVALID_TRANSACTION_DATE',
  // endregion

  _valueToKey: function _valueToKey(value) {
    if (!(typeof value === 'string')) {
      throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(value));
    }

    var keys = Object.keys(this);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (this[k] === value) {
        return k;
      }
    }

    return null;
  }
};

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : _typeof(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      if (depth > maxDepth) return '[...]';

      var first = _inspect(input[0], depth);

      if (input.every(function (item) {
        return _inspect(item, depth) === first;
      })) {
        return first.trim() + '[]';
      } else {
        return '[' + input.slice(0, maxKeys).map(function (item) {
          return _inspect(item, depth);
        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
      }
    } else {
      return 'Array';
    }
  } else {
    var keys = Object.keys(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiU2VydmVySXNCdXN5IiwiUmV2b2tlZCIsIkFscmVhZHlTaWduZWQiLCJSZWplY3RlZCIsIk9wZXJhdGlvbk5vdFN1cHBvcnRlZCIsIkdyYXBoUUxFcnJvciIsIk9wZXJhdGlvbkxpbWl0RXhjZWVkZWQiLCJJbnZhbGlkVHJhbnNhY3Rpb25EYXRlIiwiX3ZhbHVlVG9LZXkiLCJ2YWx1ZSIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7a0JBS2U7QUFDYjtBQUNBQSx1QkFBcUIsdUJBRlI7QUFHYkMsWUFBVSxXQUhHO0FBSWJDLHFCQUFtQixzQkFKTjtBQUtiQyxtQkFBaUIsbUJBTEo7QUFNYkMsMkJBQXlCLDJCQU5aO0FBT2JDLGFBQVcsWUFQRTtBQVFiQyxpQkFBZSxnQkFSRjtBQVNiQyxvQkFBa0IsbUJBVEw7QUFVYkMsb0JBQWtCLG9CQVZMO0FBV2JDLG9CQUFrQixvQkFYTDtBQVliQyxpQkFBZSxnQkFaRjtBQWFiQyxlQUFhLGNBYkE7QUFjYkMsZ0JBQWMsZUFkRDtBQWViQyxxQkFBbUIsb0JBZk47QUFnQmJDLGdCQUFjLGdCQWhCRDtBQWlCYkMsV0FBUyxTQWpCSTtBQWtCYkMsaUJBQWUsZ0JBbEJGO0FBbUJiQyxZQUFVLFVBbkJHO0FBb0JiQyx5QkFBdUIseUJBcEJWO0FBcUJiQyxnQkFBYyxlQXJCRDtBQXNCYkMsMEJBQXdCLDBCQXRCWDtBQXVCYkMsMEJBQXdCLDBCQXZCWDtBQXdCYjs7QUFFQUMsYUExQmEsdUJBMEJEQyxLQTFCQyxFQTBCYztBQUFBLGlCQUFmQSxLQUFlO0FBQUEsbUhBQWZBLEtBQWU7QUFBQTs7QUFDekIsUUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZLElBQVosQ0FBYjtBQUNBLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixLQUFLRyxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDcEMsVUFBTUUsSUFBSUosS0FBS0UsQ0FBTCxDQUFWO0FBQ0EsVUFBSSxLQUFLRSxDQUFMLE1BQVlMLEtBQWhCLEVBQXVCO0FBQ3JCLGVBQU9LLENBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBUDtBQUNEO0FBcENZLEMiLCJmaWxlIjoiRXJyb3JDb2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAwMi8wNS8xNy5cbiAqIEBmbG93XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyByZWdpb24gUHVibGljIFVzZVxuICBJbnRlcm5hbFNlcnZlckVycm9yOiAnSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgTm90Rm91bmQ6ICdOT1RfRk9VTkQnLFxuICBFbWFpbEFscmVhZHlJblVzZTogJ0VNQUlMX0FMUkVBRFlfSU5fVVNFJyxcbiAgTm9EYXRhQXZhaWxhYmxlOiAnTk9fREFUQV9BVkFJTEFCTEUnLFxuICBJbnZhbGlkTG9naW5JbmZvcm1hdGlvbjogJ0lOVkFMSURfTE9HSU5fSU5GT1JNQVRJT04nLFxuICBOb3RMb2dnZWQ6ICdOT1RfTE9HR0VEJyxcbiAgQWxyZWFkeUV4aXN0czogJ0FMUkVBRFlfRVhJU1RTJyxcbiAgUGVybWlzc2lvbkRlbmllZDogJ1BFUk1JU1NJT05fREVOSUVEJyxcbiAgSW52YWxpZFRva2VuVHlwZTogJ0lOVkFMSURfVE9LRU5fVFlQRScsXG4gIEludmFsaWRGaWVsZERhdGE6ICdJTlZBTElEX0ZJRUxEX0RBVEEnLFxuICBBbHJlYWR5Q2xpZW50OiAnQUxSRUFEWV9DTElFTlQnLFxuICBBbHJlYWR5UGFpZDogJ0FMUkVBRFlfUEFJRCcsXG4gIFBheW1lbnRFcnJvcjogJ1BBWU1FTlRfRVJST1InLFxuICBJbnN1ZmZpY2llbnRGdW5kczogJ0lOU1VGRklDSUVOVF9GVU5EUycsXG4gIFNlcnZlcklzQnVzeTogJ1NFUlZFUl9JU19CVVNZJyxcbiAgUmV2b2tlZDogJ1JFVk9LRUQnLFxuICBBbHJlYWR5U2lnbmVkOiAnQUxSRUFEWV9TSUdORUQnLFxuICBSZWplY3RlZDogJ1JFSkVDVEVEJyxcbiAgT3BlcmF0aW9uTm90U3VwcG9ydGVkOiAnT1BFUkFUSU9OX05PVF9TVVBQT1JURUQnLFxuICBHcmFwaFFMRXJyb3I6ICdHUkFQSFFMX0VSUk9SJyxcbiAgT3BlcmF0aW9uTGltaXRFeGNlZWRlZDogJ09QRVJBVElPTl9MSU1JVF9FWENFRURFRCcsXG4gIEludmFsaWRUcmFuc2FjdGlvbkRhdGU6ICdJTlZBTElEX1RSQU5TQUNUSU9OX0RBVEUnLFxuICAvLyBlbmRyZWdpb25cblxuICBfdmFsdWVUb0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgICBpZiAodGhpc1trXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIl19