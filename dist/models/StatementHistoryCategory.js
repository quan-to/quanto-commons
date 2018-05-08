'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeToCategory = exports.StatementHistoryCategoryEnumGraphQL = exports.StatementHistoryCategoryEnum = exports.StatementHistoryCategoryGroup = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Lucas Teske on 29/03/18.
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */


var _graphql = require('graphql');

var _tools = require('../tools');

var _StatementHistoryCode = require('./StatementHistoryCode');

var StatementHistoryCategoryEnum = {
  Other: {
    value: 0,
    description: 'Others (see statement description)'
  },
  InternalTransfer: {
    value: 1,
    description: 'Account Balance Transfers in same bank'
  },
  ExternalTransfer: {
    value: 2,
    description: 'Account Balance Transfers in different banks'
  },
  PaymentAndBilling: {
    value: 3,
    description: 'Payment / Billing Transactions'
  },
  ATM: {
    value: 4,
    description: 'ATM Transactions'
  },
  Escrow: {
    value: 5,
    description: 'Escrow Transactions'
  },
  Fee: {
    value: 6,
    description: 'Fee Transactions'
  }
};

var StatementHistoryCategoryEnumGraphQL = new _graphql.GraphQLEnumType({
  name: 'StatementHistoryCategoryEnum',
  description: 'Statement History Category Enum',
  values: StatementHistoryCategoryEnum
});

var StatementHistoryCategoryGroup = {};

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.Other.value, _StatementHistoryCode.StatementHistoryCodeEnum.BankCredit.value, _StatementHistoryCode.StatementHistoryCodeEnum.BankDebit.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.InternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.LocalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.LocalOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ExternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.ExternalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalRefund.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.PaymentAndBilling.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.PaymentOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.PaymentRefund.value, _StatementHistoryCode.StatementHistoryCodeEnum.BoletoIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.CronOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ATM.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.AtmOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Escrow.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.EscrowLock.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowUnlock.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Fee.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.OtherFees.value, _StatementHistoryCode.StatementHistoryCodeEnum.FeeRefund.value, _StatementHistoryCode.StatementHistoryCodeEnum.BoletoFee.value];

var codeToCategory = function codeToCategory(code) {
  if (!(typeof code === 'number')) {
    throw new TypeError('Value of argument "code" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(code));
  }

  var category = StatementHistoryCategoryEnum.Other.value;

  Object.keys(StatementHistoryCategoryEnum).forEach(function (catName) {
    var cat = StatementHistoryCategoryEnum[catName];
    if (!(0, _tools.undefinedOrNull)(StatementHistoryCategoryGroup[cat.value]) && StatementHistoryCategoryGroup[cat.value].indexOf(code) !== -1) {
      category = cat.value;
    }
  });

  return category;
};

exports.StatementHistoryCategoryGroup = StatementHistoryCategoryGroup;
exports.StatementHistoryCategoryEnum = StatementHistoryCategoryEnum;
exports.StatementHistoryCategoryEnumGraphQL = StatementHistoryCategoryEnumGraphQL;
exports.codeToCategory = codeToCategory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0iLCJPdGhlciIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJJbnRlcm5hbFRyYW5zZmVyIiwiRXh0ZXJuYWxUcmFuc2ZlciIsIlBheW1lbnRBbmRCaWxsaW5nIiwiQVRNIiwiRXNjcm93IiwiRmVlIiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bUdyYXBoUUwiLCJuYW1lIiwidmFsdWVzIiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXAiLCJCYW5rQ3JlZGl0IiwiQmFua0RlYml0IiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQ3Jvbk91dCIsIkF0bU91dCIsIkVzY3Jvd0xvY2siLCJFc2Nyb3dVbmxvY2siLCJFc2Nyb3dJbiIsIkVzY3Jvd091dCIsIk90aGVyRmVlcyIsIkZlZVJlZnVuZCIsIkJvbGV0b0ZlZSIsImNvZGVUb0NhdGVnb3J5IiwiY29kZSIsImNhdGVnb3J5IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJjYXROYW1lIiwiY2F0IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs4UUFBQTs7Ozs7O0FBSUE7O0FBSUE7O0FBSUE7O0FBSUEsSUFBTUEsK0JBQStCO0FBQ25DQyxTQUFPO0FBQ0xDLFdBQU8sQ0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBRDRCO0FBS25DQyxvQkFBa0I7QUFDaEJGLFdBQU8sQ0FEUztBQUVoQkMsaUJBQWE7QUFGRyxHQUxpQjtBQVNuQ0Usb0JBQWtCO0FBQ2hCSCxXQUFPLENBRFM7QUFFaEJDLGlCQUFhO0FBRkcsR0FUaUI7QUFhbkNHLHFCQUFtQjtBQUNqQkosV0FBTyxDQURVO0FBRWpCQyxpQkFB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QUFPaUMsUUFBUDtBQUNELENBWEQ7O1FBY0V0Qiw2QixHQUFBQSw2QjtRQUNBYiw0QixHQUFBQSw0QjtRQUNBVSxtQyxHQUFBQSxtQztRQUNBdUIsYyxHQUFBQSxjIiwiZmlsZSI6IlN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyOS8wMy8xOC5cbiAqIEBmbG93XG4gKi9cbmltcG9ydCB7XG4gIEdyYXBoUUxFbnVtVHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5pbXBvcnQge1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0sXG59IGZyb20gJy4vU3RhdGVtZW50SGlzdG9yeUNvZGUnO1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtID0ge1xuICBPdGhlcjoge1xuICAgIHZhbHVlOiAwLFxuICAgIGRlc2NyaXB0aW9uOiAnT3RoZXJzIChzZWUgc3RhdGVtZW50IGRlc2NyaXB0aW9uKScsXG4gIH0sXG4gIEludGVybmFsVHJhbnNmZXI6IHtcbiAgICB2YWx1ZTogMSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjY291bnQgQmFsYW5jZSBUcmFuc2ZlcnMgaW4gc2FtZSBiYW5rJyxcbiAgfSxcbiAgRXh0ZXJuYWxUcmFuc2Zlcjoge1xuICAgIHZhbHVlOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQWNjb3VudCBCYWxhbmNlIFRyYW5zZmVycyBpbiBkaWZmZXJlbnQgYmFua3MnLFxuICB9LFxuICBQYXltZW50QW5kQmlsbGluZzoge1xuICAgIHZhbHVlOiAzLFxuICAgIGRlc2NyaXB0aW9uOiAnUGF5bWVudCAvIEJpbGxpbmcgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgQVRNOiB7XG4gICAgdmFsdWU6IDQsXG4gICAgZGVzY3JpcHRpb246ICdBVE0gVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgRXNjcm93OiB7XG4gICAgdmFsdWU6IDUsXG4gICAgZGVzY3JpcHRpb246ICdFc2Nyb3cgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgRmVlOiB7XG4gICAgdmFsdWU6IDYsXG4gICAgZGVzY3JpcHRpb246ICdGZWUgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbn07XG5cbmNvbnN0IFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW1HcmFwaFFMID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICdTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtJyxcbiAgZGVzY3JpcHRpb246ICdTdGF0ZW1lbnQgSGlzdG9yeSBDYXRlZ29yeSBFbnVtJyxcbiAgdmFsdWVzOiBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLFxufSk7XG5cbmNvbnN0IFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwID0ge307XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uT3RoZXIudmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uT3RoZXIudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5CYW5rQ3JlZGl0LnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uQmFua0RlYml0LnZhbHVlLFxuXTtcblxuU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXBbU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5JbnRlcm5hbFRyYW5zZmVyLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkxvY2FsSW4udmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Mb2NhbE91dC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uRXh0ZXJuYWxUcmFuc2Zlci52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5FeHRlcm5hbEluLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXh0ZXJuYWxPdXQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5FeHRlcm5hbFJlZnVuZC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uUGF5bWVudEFuZEJpbGxpbmcudmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uUGF5bWVudE91dC52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLlBheW1lbnRSZWZ1bmQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Cb2xldG9Jbi52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkNyb25PdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkFUTS52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5BdG1PdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkVzY3Jvdy52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Fc2Nyb3dMb2NrLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXNjcm93VW5sb2NrLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXNjcm93SW4udmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Fc2Nyb3dPdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkZlZS52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5PdGhlckZlZXMudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5GZWVSZWZ1bmQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Cb2xldG9GZWUudmFsdWUsXG5dO1xuXG5jb25zdCBjb2RlVG9DYXRlZ29yeSA9IChjb2RlOiBudW1iZXIpID0+IHtcbiAgbGV0IGNhdGVnb3J5ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5PdGhlci52YWx1ZTtcblxuICBPYmplY3Qua2V5cyhTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtKS5mb3JFYWNoKChjYXROYW1lKSA9PiB7XG4gICAgY29uc3QgY2F0ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bVtjYXROYW1lXTtcbiAgICBpZiAoIXVuZGVmaW5lZE9yTnVsbChTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdKSAmJiBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdLmluZGV4T2YoY29kZSkgIT09IC0xKSB7XG4gICAgICBjYXRlZ29yeSA9IGNhdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yeTtcbn07XG5cbmV4cG9ydCB7XG4gIFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtR3JhcGhRTCxcbiAgY29kZVRvQ2F0ZWdvcnksXG59O1xuIl19