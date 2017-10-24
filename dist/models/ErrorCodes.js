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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiU2VydmVySXNCdXN5IiwiUmV2b2tlZCIsIkFscmVhZHlTaWduZWQiLCJSZWplY3RlZCIsIk9wZXJhdGlvbk5vdFN1cHBvcnRlZCIsIkdyYXBoUUxFcnJvciIsIl92YWx1ZVRvS2V5IiwidmFsdWUiLCJrZXlzIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O2tCQUtlO0FBQ2I7QUFDQUEsdUJBQXFCLHVCQUZSO0FBR2JDLFlBQVUsV0FIRztBQUliQyxxQkFBbUIsc0JBSk47QUFLYkMsbUJBQWlCLG1CQUxKO0FBTWJDLDJCQUF5QiwyQkFOWjtBQU9iQyxhQUFXLFlBUEU7QUFRYkMsaUJBQWUsZ0JBUkY7QUFTYkMsb0JBQWtCLG1CQVRMO0FBVWJDLG9CQUFrQixvQkFWTDtBQVdiQyxvQkFBa0Isb0JBWEw7QUFZYkMsaUJBQWUsZ0JBWkY7QUFhYkMsZUFBYSxjQWJBO0FBY2JDLGdCQUFjLGVBZEQ7QUFlYkMscUJBQW1CLG9CQWZOO0FBZ0JiQyxnQkFBYyxnQkFoQkQ7QUFpQmJDLFdBQVMsU0FqQkk7QUFrQmJDLGlCQUFlLGdCQWxCRjtBQW1CYkMsWUFBVSxVQW5CRztBQW9CYkMseUJBQXVCLHlCQXBCVjtBQXFCYkMsZ0JBQWMsZUFyQkQ7QUFzQmI7O0FBRUFDLGFBeEJhLHVCQXdCREMsS0F4QkMsRUF3QmM7QUFBQSxpQkFBZkEsS0FBZTtBQUFBLG1IQUFmQSxLQUFlO0FBQUE7O0FBQ3pCLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWSxJQUFaLENBQWI7QUFDQSxTQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLFVBQU1FLElBQUlKLEtBQUtFLENBQUwsQ0FBVjtBQUNBLFVBQUksS0FBS0UsQ0FBTCxNQUFZTCxLQUFoQixFQUF1QjtBQUNyQixlQUFPSyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRDtBQWxDWSxDIiwiZmlsZSI6IkVycm9yQ29kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDIvMDUvMTcuXG4gKiBAZmxvd1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gcmVnaW9uIFB1YmxpYyBVc2VcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogJ0lOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gIE5vdEZvdW5kOiAnTk9UX0ZPVU5EJyxcbiAgRW1haWxBbHJlYWR5SW5Vc2U6ICdFTUFJTF9BTFJFQURZX0lOX1VTRScsXG4gIE5vRGF0YUF2YWlsYWJsZTogJ05PX0RBVEFfQVZBSUxBQkxFJyxcbiAgSW52YWxpZExvZ2luSW5mb3JtYXRpb246ICdJTlZBTElEX0xPR0lOX0lORk9STUFUSU9OJyxcbiAgTm90TG9nZ2VkOiAnTk9UX0xPR0dFRCcsXG4gIEFscmVhZHlFeGlzdHM6ICdBTFJFQURZX0VYSVNUUycsXG4gIFBlcm1pc3Npb25EZW5pZWQ6ICdQRVJNSVNTSU9OX0RFTklFRCcsXG4gIEludmFsaWRUb2tlblR5cGU6ICdJTlZBTElEX1RPS0VOX1RZUEUnLFxuICBJbnZhbGlkRmllbGREYXRhOiAnSU5WQUxJRF9GSUVMRF9EQVRBJyxcbiAgQWxyZWFkeUNsaWVudDogJ0FMUkVBRFlfQ0xJRU5UJyxcbiAgQWxyZWFkeVBhaWQ6ICdBTFJFQURZX1BBSUQnLFxuICBQYXltZW50RXJyb3I6ICdQQVlNRU5UX0VSUk9SJyxcbiAgSW5zdWZmaWNpZW50RnVuZHM6ICdJTlNVRkZJQ0lFTlRfRlVORFMnLFxuICBTZXJ2ZXJJc0J1c3k6ICdTRVJWRVJfSVNfQlVTWScsXG4gIFJldm9rZWQ6ICdSRVZPS0VEJyxcbiAgQWxyZWFkeVNpZ25lZDogJ0FMUkVBRFlfU0lHTkVEJyxcbiAgUmVqZWN0ZWQ6ICdSRUpFQ1RFRCcsXG4gIE9wZXJhdGlvbk5vdFN1cHBvcnRlZDogJ09QRVJBVElPTl9OT1RfU1VQUE9SVEVEJyxcbiAgR3JhcGhRTEVycm9yOiAnR1JBUEhRTF9FUlJPUicsXG4gIC8vIGVuZHJlZ2lvblxuXG4gIF92YWx1ZVRvS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgIGlmICh0aGlzW2tdID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG4iXX0=