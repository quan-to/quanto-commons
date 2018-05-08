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
  BoletoCreationNotEnabled: 'BOLETO_CREATION_NOT_ENABLED',
  BoletoOurNumberExausted: 'BOLETO_OUR_NUMBER_EXAUSTED',
  NotImplemented: 'NOT_IMPLEMENTED',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiQmFua2luZ1N5c3RlbU9mZmxpbmUiLCJPdXRkYXRlZEFQSSIsIkJhbmtOb3RTdXBwb3J0ZWQiLCJWYXVsdFN5c3RlbU9mZmxpbmUiLCJTZXJ2ZXJJc0J1c3kiLCJSZXZva2VkIiwiQWxyZWFkeVNpZ25lZCIsIlJlamVjdGVkIiwiT3BlcmF0aW9uTm90U3VwcG9ydGVkIiwiR3JhcGhRTEVycm9yIiwiT3BlcmF0aW9uTGltaXRFeGNlZWRlZCIsIkludmFsaWRUcmFuc2FjdGlvbkRhdGUiLCJCb2xldG9DcmVhdGlvbk5vdEVuYWJsZWQiLCJCb2xldG9PdXJOdW1iZXJFeGF1c3RlZCIsIk5vdEltcGxlbWVudGVkIiwiRXZlcnl0aGluZ0lzVGVycmlibGUiLCJRdWFudG9JbnRlcm5hbEVycm9yIiwiUm91dGluZ1N5c3RlbU9mZmxpbmUiLCJRSVRTeXN0ZW1PZmZsaW5lIiwiVGFyZ2V0Q29ubmVjdGlvbkVycm9yIiwiVmF1bHRlcklzRGVhZCIsIlN5bmNocm9uaXphdGlvbkVycm9yIiwiUm91dGluZ0Vycm9yIiwiX3ZhbHVlVG9LZXkiLCJ2YWx1ZSIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7a0JBS2U7QUFDYjtBQUNBQSx1QkFBcUIsdUJBRlI7QUFHYkMsWUFBVSxXQUhHO0FBSWJDLHFCQUFtQixzQkFKTjtBQUtiQyxtQkFBaUIsbUJBTEo7QUFNYkMsMkJBQXlCLDJCQU5aO0FBT2JDLGFBQVcsWUFQRTtBQVFiQyxpQkFBZSxnQkFSRjtBQVNiQyxvQkFBa0IsbUJBVEw7QUFVYkMsb0JBQWtCLG9CQVZMO0FBV2JDLG9CQUFrQixvQkFYTDtBQVliQyxpQkFBZSxnQkFaRjtBQWFiQyxlQUFhLGNBYkE7QUFjYkMsZ0JBQWMsZUFkRDtBQWViQyxxQkFBbUIsb0JBZk47QUFnQmJDLHdCQUFzQix3QkFoQlQ7QUFpQmJDLGVBQWEsY0FqQkE7QUFrQmJDLG9CQUFrQixvQkFsQkw7QUFtQmJDLHNCQUFvQixzQkFuQlA7QUFvQmJDLGdCQUFjLGdCQXBCRDtBQXFCYkMsV0FBUyxTQXJCSTtBQXNCYkMsaUJBQWUsZ0JBdEJGO0FBdUJiQyxZQUFVLFVBdkJHO0FBd0JiQyx5QkFBdUIseUJBeEJWO0FBeUJiQyxnQkFBYyxlQXpCRDtBQTBCYkMsMEJBQXdCLDBCQTFCWDtBQTJCYkMsMEJBQXdCLDBCQTNCWDtBQTRCYkMsNEJBQTBCLDZCQTVCYjtBQTZCYkMsMkJBQXlCLDRCQTdCWjtBQThCYkMsa0JBQWdCLGlCQTlCSDtBQStCYjs7QUFFQTtBQUNBQyx3QkFBc0Isd0JBbENUO0FBbUNiQyx1QkFBcUIsdUJBbkNSO0FBb0NiQyx3QkFBc0Isd0JBcENUO0FBcUNiQyxvQkFBa0Isb0JBckNMO0FBc0NiQyx5QkFBdUIsa0JBdENWO0FBdUNiQyxpQkFBZSxpQkF2Q0Y7QUF3Q2JDLHdCQUFzQix1QkF4Q1Q7QUF5Q2JDLGdCQUFjLGVBekNEO0FBMENiOztBQUVBQyxhQTVDYSx1QkE0Q0RDLEtBNUNDLEVBNENjO0FBQUEsaUJBQWZBLEtBQWU7QUFBQSxtSEFBZkEsS0FBZTtBQUFBOztBQUN6QixRQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVksSUFBWixDQUFiO0FBQ0EsU0FBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLEtBQUtHLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNwQyxVQUFNRSxJQUFJSixLQUFLRSxDQUFMLENBQVY7QUFDQSxVQUFJLEtBQUtFLENBQUwsTUFBWUwsS0FBaEIsRUFBdUI7QUFDckIsZUFBT0ssQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7QUF0RFksQyIsImZpbGUiOiJFcnJvckNvZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICogQGZsb3dcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIHJlZ2lvbiBQdWJsaWMgVXNlXG4gIEludGVybmFsU2VydmVyRXJyb3I6ICdJTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICBOb3RGb3VuZDogJ05PVF9GT1VORCcsXG4gIEVtYWlsQWxyZWFkeUluVXNlOiAnRU1BSUxfQUxSRUFEWV9JTl9VU0UnLFxuICBOb0RhdGFBdmFpbGFibGU6ICdOT19EQVRBX0FWQUlMQUJMRScsXG4gIEludmFsaWRMb2dpbkluZm9ybWF0aW9uOiAnSU5WQUxJRF9MT0dJTl9JTkZPUk1BVElPTicsXG4gIE5vdExvZ2dlZDogJ05PVF9MT0dHRUQnLFxuICBBbHJlYWR5RXhpc3RzOiAnQUxSRUFEWV9FWElTVFMnLFxuICBQZXJtaXNzaW9uRGVuaWVkOiAnUEVSTUlTU0lPTl9ERU5JRUQnLFxuICBJbnZhbGlkVG9rZW5UeXBlOiAnSU5WQUxJRF9UT0tFTl9UWVBFJyxcbiAgSW52YWxpZEZpZWxkRGF0YTogJ0lOVkFMSURfRklFTERfREFUQScsXG4gIEFscmVhZHlDbGllbnQ6ICdBTFJFQURZX0NMSUVOVCcsXG4gIEFscmVhZHlQYWlkOiAnQUxSRUFEWV9QQUlEJyxcbiAgUGF5bWVudEVycm9yOiAnUEFZTUVOVF9FUlJPUicsXG4gIEluc3VmZmljaWVudEZ1bmRzOiAnSU5TVUZGSUNJRU5UX0ZVTkRTJyxcbiAgQmFua2luZ1N5c3RlbU9mZmxpbmU6ICdCQU5LSU5HX1NZU1RFTV9PRkZMSU5FJyxcbiAgT3V0ZGF0ZWRBUEk6ICdPVVREQVRFRF9BUEknLFxuICBCYW5rTm90U3VwcG9ydGVkOiAnQkFOS19OT1RfU1VQUE9SVEVEJyxcbiAgVmF1bHRTeXN0ZW1PZmZsaW5lOiAnVkFVTFRfU1lTVEVNX09GRkxJTkUnLFxuICBTZXJ2ZXJJc0J1c3k6ICdTRVJWRVJfSVNfQlVTWScsXG4gIFJldm9rZWQ6ICdSRVZPS0VEJyxcbiAgQWxyZWFkeVNpZ25lZDogJ0FMUkVBRFlfU0lHTkVEJyxcbiAgUmVqZWN0ZWQ6ICdSRUpFQ1RFRCcsXG4gIE9wZXJhdGlvbk5vdFN1cHBvcnRlZDogJ09QRVJBVElPTl9OT1RfU1VQUE9SVEVEJyxcbiAgR3JhcGhRTEVycm9yOiAnR1JBUEhRTF9FUlJPUicsXG4gIE9wZXJhdGlvbkxpbWl0RXhjZWVkZWQ6ICdPUEVSQVRJT05fTElNSVRfRVhDRUVERUQnLFxuICBJbnZhbGlkVHJhbnNhY3Rpb25EYXRlOiAnSU5WQUxJRF9UUkFOU0FDVElPTl9EQVRFJyxcbiAgQm9sZXRvQ3JlYXRpb25Ob3RFbmFibGVkOiAnQk9MRVRPX0NSRUFUSU9OX05PVF9FTkFCTEVEJyxcbiAgQm9sZXRvT3VyTnVtYmVyRXhhdXN0ZWQ6ICdCT0xFVE9fT1VSX05VTUJFUl9FWEFVU1RFRCcsXG4gIE5vdEltcGxlbWVudGVkOiAnTk9UX0lNUExFTUVOVEVEJyxcbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uIEludGVybmFsIFVzZSAtIERvbid0IHdvcnJ5IGFib3V0IHRoZXNlIGlmIHlvdSdyZSBhIHBhcnRuZXIuXG4gIEV2ZXJ5dGhpbmdJc1RlcnJpYmxlOiAnRVZFUllUSElOR19JU19URVJSSUJMRScsXG4gIFF1YW50b0ludGVybmFsRXJyb3I6ICdRVUFOVE9fSU5URVJOQUxfRVJST1InLFxuICBSb3V0aW5nU3lzdGVtT2ZmbGluZTogJ1JPVVRJTkdfU1lTVEVNX09GRkxJTkUnLFxuICBRSVRTeXN0ZW1PZmZsaW5lOiAnUUlUX1NZU1RFTV9PRkZMSU5FJyxcbiAgVGFyZ2V0Q29ubmVjdGlvbkVycm9yOiAnQ09OTkVDVElPTl9FUlJPUicsXG4gIFZhdWx0ZXJJc0RlYWQ6ICdWQVVMVEVSX0lTX0RFQUQnLFxuICBTeW5jaHJvbml6YXRpb25FcnJvcjogJ1NZTkNIUk9OSVpBVElPTl9FUlJPUicsXG4gIFJvdXRpbmdFcnJvcjogJ1JPVVRJTkdfRVJST1InLFxuICAvLyBlbmRyZWdpb25cblxuICBfdmFsdWVUb0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgICBpZiAodGhpc1trXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIl19