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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiQmFua2luZ1N5c3RlbU9mZmxpbmUiLCJPdXRkYXRlZEFQSSIsIkJhbmtOb3RTdXBwb3J0ZWQiLCJWYXVsdFN5c3RlbU9mZmxpbmUiLCJTZXJ2ZXJJc0J1c3kiLCJSZXZva2VkIiwiQWxyZWFkeVNpZ25lZCIsIlJlamVjdGVkIiwiT3BlcmF0aW9uTm90U3VwcG9ydGVkIiwiR3JhcGhRTEVycm9yIiwiT3BlcmF0aW9uTGltaXRFeGNlZWRlZCIsIkludmFsaWRUcmFuc2FjdGlvbkRhdGUiLCJCb2xldG9DcmVhdGlvbk5vdEVuYWJsZWQiLCJCb2xldG9PdXJOdW1iZXJFeGF1c3RlZCIsIkV2ZXJ5dGhpbmdJc1RlcnJpYmxlIiwiUXVhbnRvSW50ZXJuYWxFcnJvciIsIlJvdXRpbmdTeXN0ZW1PZmZsaW5lIiwiUUlUU3lzdGVtT2ZmbGluZSIsIlRhcmdldENvbm5lY3Rpb25FcnJvciIsIlZhdWx0ZXJJc0RlYWQiLCJTeW5jaHJvbml6YXRpb25FcnJvciIsIlJvdXRpbmdFcnJvciIsIl92YWx1ZVRvS2V5IiwidmFsdWUiLCJrZXlzIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O2tCQUtlO0FBQ2I7QUFDQUEsdUJBQXFCLHVCQUZSO0FBR2JDLFlBQVUsV0FIRztBQUliQyxxQkFBbUIsc0JBSk47QUFLYkMsbUJBQWlCLG1CQUxKO0FBTWJDLDJCQUF5QiwyQkFOWjtBQU9iQyxhQUFXLFlBUEU7QUFRYkMsaUJBQWUsZ0JBUkY7QUFTYkMsb0JBQWtCLG1CQVRMO0FBVWJDLG9CQUFrQixvQkFWTDtBQVdiQyxvQkFBa0Isb0JBWEw7QUFZYkMsaUJBQWUsZ0JBWkY7QUFhYkMsZUFBYSxjQWJBO0FBY2JDLGdCQUFjLGVBZEQ7QUFlYkMscUJBQW1CLG9CQWZOO0FBZ0JiQyx3QkFBc0Isd0JBaEJUO0FBaUJiQyxlQUFhLGNBakJBO0FBa0JiQyxvQkFBa0Isb0JBbEJMO0FBbUJiQyxzQkFBb0Isc0JBbkJQO0FBb0JiQyxnQkFBYyxnQkFwQkQ7QUFxQmJDLFdBQVMsU0FyQkk7QUFzQmJDLGlCQUFlLGdCQXRCRjtBQXVCYkMsWUFBVSxVQXZCRztBQXdCYkMseUJBQXVCLHlCQXhCVjtBQXlCYkMsZ0JBQWMsZUF6QkQ7QUEwQmJDLDBCQUF3QiwwQkExQlg7QUEyQmJDLDBCQUF3QiwwQkEzQlg7QUE0QmJDLDRCQUEwQiw2QkE1QmI7QUE2QmJDLDJCQUF5Qiw0QkE3Qlo7QUE4QmI7O0FBRUE7QUFDQUMsd0JBQXNCLHdCQWpDVDtBQWtDYkMsdUJBQXFCLHVCQWxDUjtBQW1DYkMsd0JBQXNCLHdCQW5DVDtBQW9DYkMsb0JBQWtCLG9CQXBDTDtBQXFDYkMseUJBQXVCLGtCQXJDVjtBQXNDYkMsaUJBQWUsaUJBdENGO0FBdUNiQyx3QkFBc0IsdUJBdkNUO0FBd0NiQyxnQkFBYyxlQXhDRDtBQXlDYjs7QUFFQUMsYUEzQ2EsdUJBMkNEQyxLQTNDQyxFQTJDYztBQUFBLGlCQUFmQSxLQUFlO0FBQUEsbUhBQWZBLEtBQWU7QUFBQTs7QUFDekIsUUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZLElBQVosQ0FBYjtBQUNBLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixLQUFLRyxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDcEMsVUFBTUUsSUFBSUosS0FBS0UsQ0FBTCxDQUFWO0FBQ0EsVUFBSSxLQUFLRSxDQUFMLE1BQVlMLEtBQWhCLEVBQXVCO0FBQ3JCLGVBQU9LLENBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBUDtBQUNEO0FBckRZLEMiLCJmaWxlIjoiRXJyb3JDb2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAwMi8wNS8xNy5cbiAqIEBmbG93XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyByZWdpb24gUHVibGljIFVzZVxuICBJbnRlcm5hbFNlcnZlckVycm9yOiAnSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgTm90Rm91bmQ6ICdOT1RfRk9VTkQnLFxuICBFbWFpbEFscmVhZHlJblVzZTogJ0VNQUlMX0FMUkVBRFlfSU5fVVNFJyxcbiAgTm9EYXRhQXZhaWxhYmxlOiAnTk9fREFUQV9BVkFJTEFCTEUnLFxuICBJbnZhbGlkTG9naW5JbmZvcm1hdGlvbjogJ0lOVkFMSURfTE9HSU5fSU5GT1JNQVRJT04nLFxuICBOb3RMb2dnZWQ6ICdOT1RfTE9HR0VEJyxcbiAgQWxyZWFkeUV4aXN0czogJ0FMUkVBRFlfRVhJU1RTJyxcbiAgUGVybWlzc2lvbkRlbmllZDogJ1BFUk1JU1NJT05fREVOSUVEJyxcbiAgSW52YWxpZFRva2VuVHlwZTogJ0lOVkFMSURfVE9LRU5fVFlQRScsXG4gIEludmFsaWRGaWVsZERhdGE6ICdJTlZBTElEX0ZJRUxEX0RBVEEnLFxuICBBbHJlYWR5Q2xpZW50OiAnQUxSRUFEWV9DTElFTlQnLFxuICBBbHJlYWR5UGFpZDogJ0FMUkVBRFlfUEFJRCcsXG4gIFBheW1lbnRFcnJvcjogJ1BBWU1FTlRfRVJST1InLFxuICBJbnN1ZmZpY2llbnRGdW5kczogJ0lOU1VGRklDSUVOVF9GVU5EUycsXG4gIEJhbmtpbmdTeXN0ZW1PZmZsaW5lOiAnQkFOS0lOR19TWVNURU1fT0ZGTElORScsXG4gIE91dGRhdGVkQVBJOiAnT1VUREFURURfQVBJJyxcbiAgQmFua05vdFN1cHBvcnRlZDogJ0JBTktfTk9UX1NVUFBPUlRFRCcsXG4gIFZhdWx0U3lzdGVtT2ZmbGluZTogJ1ZBVUxUX1NZU1RFTV9PRkZMSU5FJyxcbiAgU2VydmVySXNCdXN5OiAnU0VSVkVSX0lTX0JVU1knLFxuICBSZXZva2VkOiAnUkVWT0tFRCcsXG4gIEFscmVhZHlTaWduZWQ6ICdBTFJFQURZX1NJR05FRCcsXG4gIFJlamVjdGVkOiAnUkVKRUNURUQnLFxuICBPcGVyYXRpb25Ob3RTdXBwb3J0ZWQ6ICdPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCcsXG4gIEdyYXBoUUxFcnJvcjogJ0dSQVBIUUxfRVJST1InLFxuICBPcGVyYXRpb25MaW1pdEV4Y2VlZGVkOiAnT1BFUkFUSU9OX0xJTUlUX0VYQ0VFREVEJyxcbiAgSW52YWxpZFRyYW5zYWN0aW9uRGF0ZTogJ0lOVkFMSURfVFJBTlNBQ1RJT05fREFURScsXG4gIEJvbGV0b0NyZWF0aW9uTm90RW5hYmxlZDogJ0JPTEVUT19DUkVBVElPTl9OT1RfRU5BQkxFRCcsXG4gIEJvbGV0b091ck51bWJlckV4YXVzdGVkOiAnQk9MRVRPX09VUl9OVU1CRVJfRVhBVVNURUQnLFxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb24gSW50ZXJuYWwgVXNlIC0gRG9uJ3Qgd29ycnkgYWJvdXQgdGhlc2UgaWYgeW91J3JlIGEgcGFydG5lci5cbiAgRXZlcnl0aGluZ0lzVGVycmlibGU6ICdFVkVSWVRISU5HX0lTX1RFUlJJQkxFJyxcbiAgUXVhbnRvSW50ZXJuYWxFcnJvcjogJ1FVQU5UT19JTlRFUk5BTF9FUlJPUicsXG4gIFJvdXRpbmdTeXN0ZW1PZmZsaW5lOiAnUk9VVElOR19TWVNURU1fT0ZGTElORScsXG4gIFFJVFN5c3RlbU9mZmxpbmU6ICdRSVRfU1lTVEVNX09GRkxJTkUnLFxuICBUYXJnZXRDb25uZWN0aW9uRXJyb3I6ICdDT05ORUNUSU9OX0VSUk9SJyxcbiAgVmF1bHRlcklzRGVhZDogJ1ZBVUxURVJfSVNfREVBRCcsXG4gIFN5bmNocm9uaXphdGlvbkVycm9yOiAnU1lOQ0hST05JWkFUSU9OX0VSUk9SJyxcbiAgUm91dGluZ0Vycm9yOiAnUk9VVElOR19FUlJPUicsXG4gIC8vIGVuZHJlZ2lvblxuXG4gIF92YWx1ZVRvS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgIGlmICh0aGlzW2tdID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG4iXX0=