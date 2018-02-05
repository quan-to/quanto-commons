'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Last update: 02/02/2018
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
  BankingSystemOffline: 'BANKING_SYSTEM_OFFLINE',
  OutdatedAPI: 'OUTDATED_API',
  BankNotSupported: 'BANK_NOT_SUPPORTED',
  VaultSystemOffline: 'VAULT_SYSTEM_OFFLINE',
  ServerIsBusy: 'SERVER_IS_BUSY',
  Revoked: 'REVOKED',
  AlreadySigned: 'ALREADY_SIGNED',
  Rejected: 'REJECTED',
  OperationNotSupported: 'OPERATION_NOT_SUPPORTED',
  GraphQLError: 'GRAPHQL_ERROR',
  OperationLimitExceeded: 'OPERATION_LIMIT_EXCEEDED',
  InvalidTransactionDate: 'INVALID_TRANSACTION_DATE',
  // endregion

  // region Internal Use - Don't worry about these if you're a partner.
  EverythingIsTerrible: 'EVERYTHING_IS_TERRIBLE',
  QuantoInternalError: 'QUANTO_INTERNAL_ERROR',
  RoutingSystemOffline: 'ROUTING_SYSTEM_OFFLINE',
  QITSystemOffline: 'QIT_SYSTEM_OFFLINE',
  TargetConnectionError: 'CONNECTION_ERROR',
  VaulterIsDead: 'VAULTER_IS_DEAD',
  SynchronizationError: 'SYNCHRONIZATION_ERROR',
  RoutingError: 'ROUTING_ERROR',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiQmFua2luZ1N5c3RlbU9mZmxpbmUiLCJPdXRkYXRlZEFQSSIsIkJhbmtOb3RTdXBwb3J0ZWQiLCJWYXVsdFN5c3RlbU9mZmxpbmUiLCJTZXJ2ZXJJc0J1c3kiLCJSZXZva2VkIiwiQWxyZWFkeVNpZ25lZCIsIlJlamVjdGVkIiwiT3BlcmF0aW9uTm90U3VwcG9ydGVkIiwiR3JhcGhRTEVycm9yIiwiT3BlcmF0aW9uTGltaXRFeGNlZWRlZCIsIkludmFsaWRUcmFuc2FjdGlvbkRhdGUiLCJFdmVyeXRoaW5nSXNUZXJyaWJsZSIsIlF1YW50b0ludGVybmFsRXJyb3IiLCJSb3V0aW5nU3lzdGVtT2ZmbGluZSIsIlFJVFN5c3RlbU9mZmxpbmUiLCJUYXJnZXRDb25uZWN0aW9uRXJyb3IiLCJWYXVsdGVySXNEZWFkIiwiU3luY2hyb25pemF0aW9uRXJyb3IiLCJSb3V0aW5nRXJyb3IiLCJfdmFsdWVUb0tleSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztrQkFLZTtBQUNiO0FBQ0FBLHVCQUFxQix1QkFGUjtBQUdiQyxZQUFVLFdBSEc7QUFJYkMscUJBQW1CLHNCQUpOO0FBS2JDLG1CQUFpQixtQkFMSjtBQU1iQywyQkFBeUIsMkJBTlo7QUFPYkMsYUFBVyxZQVBFO0FBUWJDLGlCQUFlLGdCQVJGO0FBU2JDLG9CQUFrQixtQkFUTDtBQVViQyxvQkFBa0Isb0JBVkw7QUFXYkMsb0JBQWtCLG9CQVhMO0FBWWJDLGlCQUFlLGdCQVpGO0FBYWJDLGVBQWEsY0FiQTtBQWNiQyxnQkFBYyxlQWREO0FBZWJDLHFCQUFtQixvQkFmTjtBQWdCYkMsd0JBQXNCLHdCQWhCVDtBQWlCYkMsZUFBYSxjQWpCQTtBQWtCYkMsb0JBQWtCLG9CQWxCTDtBQW1CYkMsc0JBQW9CLHNCQW5CUDtBQW9CYkMsZ0JBQWMsZ0JBcEJEO0FBcUJiQyxXQUFTLFNBckJJO0FBc0JiQyxpQkFBZSxnQkF0QkY7QUF1QmJDLFlBQVUsVUF2Qkc7QUF3QmJDLHlCQUF1Qix5QkF4QlY7QUF5QmJDLGdCQUFjLGVBekJEO0FBMEJiQywwQkFBd0IsMEJBMUJYO0FBMkJiQywwQkFBd0IsMEJBM0JYO0FBNEJiOztBQUVBO0FBQ0FDLHdCQUFzQix3QkEvQlQ7QUFnQ2JDLHVCQUFxQix1QkFoQ1I7QUFpQ2JDLHdCQUFzQix3QkFqQ1Q7QUFrQ2JDLG9CQUFrQixvQkFsQ0w7QUFtQ2JDLHlCQUF1QixrQkFuQ1Y7QUFvQ2JDLGlCQUFlLGlCQXBDRjtBQXFDYkMsd0JBQXNCLHVCQXJDVDtBQXNDYkMsZ0JBQWMsZUF0Q0Q7QUF1Q2I7O0FBRUFDLGFBekNhLHVCQXlDREMsS0F6Q0MsRUF5Q2M7QUFBQSxpQkFBZkEsS0FBZTtBQUFBLG1IQUFmQSxLQUFlO0FBQUE7O0FBQ3pCLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWSxJQUFaLENBQWI7QUFDQSxTQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLFVBQU1FLElBQUlKLEtBQUtFLENBQUwsQ0FBVjtBQUNBLFVBQUksS0FBS0UsQ0FBTCxNQUFZTCxLQUFoQixFQUF1QjtBQUNyQixlQUFPSyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRDtBQW5EWSxDIiwiZmlsZSI6IkVycm9yQ29kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExhc3QgdXBkYXRlOiAwMi8wMi8yMDE4XG4gKiBAZmxvd1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gcmVnaW9uIFB1YmxpYyBVc2VcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogJ0lOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gIE5vdEZvdW5kOiAnTk9UX0ZPVU5EJyxcbiAgRW1haWxBbHJlYWR5SW5Vc2U6ICdFTUFJTF9BTFJFQURZX0lOX1VTRScsXG4gIE5vRGF0YUF2YWlsYWJsZTogJ05PX0RBVEFfQVZBSUxBQkxFJyxcbiAgSW52YWxpZExvZ2luSW5mb3JtYXRpb246ICdJTlZBTElEX0xPR0lOX0lORk9STUFUSU9OJyxcbiAgTm90TG9nZ2VkOiAnTk9UX0xPR0dFRCcsXG4gIEFscmVhZHlFeGlzdHM6ICdBTFJFQURZX0VYSVNUUycsXG4gIFBlcm1pc3Npb25EZW5pZWQ6ICdQRVJNSVNTSU9OX0RFTklFRCcsXG4gIEludmFsaWRUb2tlblR5cGU6ICdJTlZBTElEX1RPS0VOX1RZUEUnLFxuICBJbnZhbGlkRmllbGREYXRhOiAnSU5WQUxJRF9GSUVMRF9EQVRBJyxcbiAgQWxyZWFkeUNsaWVudDogJ0FMUkVBRFlfQ0xJRU5UJyxcbiAgQWxyZWFkeVBhaWQ6ICdBTFJFQURZX1BBSUQnLFxuICBQYXltZW50RXJyb3I6ICdQQVlNRU5UX0VSUk9SJyxcbiAgSW5zdWZmaWNpZW50RnVuZHM6ICdJTlNVRkZJQ0lFTlRfRlVORFMnLFxuICBCYW5raW5nU3lzdGVtT2ZmbGluZTogJ0JBTktJTkdfU1lTVEVNX09GRkxJTkUnLFxuICBPdXRkYXRlZEFQSTogJ09VVERBVEVEX0FQSScsXG4gIEJhbmtOb3RTdXBwb3J0ZWQ6ICdCQU5LX05PVF9TVVBQT1JURUQnLFxuICBWYXVsdFN5c3RlbU9mZmxpbmU6ICdWQVVMVF9TWVNURU1fT0ZGTElORScsXG4gIFNlcnZlcklzQnVzeTogJ1NFUlZFUl9JU19CVVNZJyxcbiAgUmV2b2tlZDogJ1JFVk9LRUQnLFxuICBBbHJlYWR5U2lnbmVkOiAnQUxSRUFEWV9TSUdORUQnLFxuICBSZWplY3RlZDogJ1JFSkVDVEVEJyxcbiAgT3BlcmF0aW9uTm90U3VwcG9ydGVkOiAnT1BFUkFUSU9OX05PVF9TVVBQT1JURUQnLFxuICBHcmFwaFFMRXJyb3I6ICdHUkFQSFFMX0VSUk9SJyxcbiAgT3BlcmF0aW9uTGltaXRFeGNlZWRlZDogJ09QRVJBVElPTl9MSU1JVF9FWENFRURFRCcsXG4gIEludmFsaWRUcmFuc2FjdGlvbkRhdGU6ICdJTlZBTElEX1RSQU5TQUNUSU9OX0RBVEUnLFxuICAvLyBlbmRyZWdpb25cbiAgXG4gIC8vIHJlZ2lvbiBJbnRlcm5hbCBVc2UgLSBEb24ndCB3b3JyeSBhYm91dCB0aGVzZSBpZiB5b3UncmUgYSBwYXJ0bmVyLlxuICBFdmVyeXRoaW5nSXNUZXJyaWJsZTogJ0VWRVJZVEhJTkdfSVNfVEVSUklCTEUnLFxuICBRdWFudG9JbnRlcm5hbEVycm9yOiAnUVVBTlRPX0lOVEVSTkFMX0VSUk9SJyxcbiAgUm91dGluZ1N5c3RlbU9mZmxpbmU6ICdST1VUSU5HX1NZU1RFTV9PRkZMSU5FJyxcbiAgUUlUU3lzdGVtT2ZmbGluZTogJ1FJVF9TWVNURU1fT0ZGTElORScsXG4gIFRhcmdldENvbm5lY3Rpb25FcnJvcjogJ0NPTk5FQ1RJT05fRVJST1InLFxuICBWYXVsdGVySXNEZWFkOiAnVkFVTFRFUl9JU19ERUFEJyxcbiAgU3luY2hyb25pemF0aW9uRXJyb3I6ICdTWU5DSFJPTklaQVRJT05fRVJST1InLFxuICBSb3V0aW5nRXJyb3I6ICdST1VUSU5HX0VSUk9SJyxcbiAgLy8gZW5kcmVnaW9uXG4gIFxuICBfdmFsdWVUb0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgICBpZiAodGhpc1trXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIl19