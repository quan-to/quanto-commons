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

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.Other.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.InternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.LocalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.LocalOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ExternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.ExternalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalRefund.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.PaymentAndBilling.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.PaymentOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.PaymentRefund.value, _StatementHistoryCode.StatementHistoryCodeEnum.BoletoIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.CronOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ATM.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.AtmOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Escrow.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.EscrowLock.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowUnlock.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Fee.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.OtherFees.value, _StatementHistoryCode.StatementHistoryCodeEnum.FeeRefund.value];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0iLCJPdGhlciIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJJbnRlcm5hbFRyYW5zZmVyIiwiRXh0ZXJuYWxUcmFuc2ZlciIsIlBheW1lbnRBbmRCaWxsaW5nIiwiQVRNIiwiRXNjcm93IiwiRmVlIiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bUdyYXBoUUwiLCJuYW1lIiwidmFsdWVzIiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXAiLCJMb2NhbEluIiwiTG9jYWxPdXQiLCJFeHRlcm5hbEluIiwiRXh0ZXJuYWxPdXQiLCJFeHRlcm5hbFJlZnVuZCIsIlBheW1lbnRPdXQiLCJQYXltZW50UmVmdW5kIiwiQm9sZXRvSW4iLCJDcm9uT3V0IiwiQXRtT3V0IiwiRXNjcm93TG9jayIsIkVzY3Jvd1VubG9jayIsIkVzY3Jvd0luIiwiRXNjcm93T3V0IiwiT3RoZXJGZWVzIiwiRmVlUmVmdW5kIiwiY29kZVRvQ2F0ZWdvcnkiLCJjb2RlIiwiY2F0ZWdvcnkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNhdE5hbWUiLCJjYXQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OzhRQUFBOzs7Ozs7QUFJQTs7QUFJQTs7QUFJQTs7QUFJQSxJQUFNQSwrQkFBK0I7QUFDbkNDLFNBQU87QUFDTEMsV0FBTyxDQURGO0FBRUxDLGlCQUFhO0FBRlIsR0FENEI7QUFLbkNDLG9CQUFrQjtBQUNoQkYsV0FBTyxDQURTO0FBRWhCQyxpQkFBYTtBQUZHLEdBTGlCO0FBU25DRSxvQkFBa0I7QUFDaEJILFdBQU8sQ0FEUztBQUVoQkMsaUJBQWE7QUFGRyxHQVRpQjtBQWFuQ0cscUJBQW1CO0FBQ2pCSixXQUFPLENBRFU7QUFFakJDLGlCQUFhO0FBRkksR0FiZ0I7QUFpQm5DSSxPQUFLO0FBQ0hMLFdBQU8s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bnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDI5LzAzLzE4LlxuICogQGZsb3dcbiAqL1xuaW1wb3J0IHtcbiAgR3JhcGhRTEVudW1UeXBlLFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHtcbiAgdW5kZWZpbmVkT3JOdWxsLFxufSBmcm9tICcuLi90b29scyc7XG5cbmltcG9ydCB7XG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bSxcbn0gZnJvbSAnLi9TdGF0ZW1lbnRIaXN0b3J5Q29kZSc7XG5cbmNvbnN0IFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0gPSB7XG4gIE90aGVyOiB7XG4gICAgdmFsdWU6IDAsXG4gICAgZGVzY3JpcHRpb246ICdPdGhlcnMgKHNlZSBzdGF0ZW1lbnQgZGVzY3JpcHRpb24pJyxcbiAgfSxcbiAgSW50ZXJuYWxUcmFuc2Zlcjoge1xuICAgIHZhbHVlOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnQWNjb3VudCBCYWxhbmNlIFRyYW5zZmVycyBpbiBzYW1lIGJhbmsnLFxuICB9LFxuICBFeHRlcm5hbFRyYW5zZmVyOiB7XG4gICAgdmFsdWU6IDIsXG4gICAgZGVzY3JpcHRpb246ICdBY2NvdW50IEJhbGFuY2UgVHJhbnNmZXJzIGluIGRpZmZlcmVudCBiYW5rcycsXG4gIH0sXG4gIFBheW1lbnRBbmRCaWxsaW5nOiB7XG4gICAgdmFsdWU6IDMsXG4gICAgZGVzY3JpcHRpb246ICdQYXltZW50IC8gQmlsbGluZyBUcmFuc2FjdGlvbnMnLFxuICB9LFxuICBBVE06IHtcbiAgICB2YWx1ZTogNCxcbiAgICBkZXNjcmlwdGlvbjogJ0FUTSBUcmFuc2FjdGlvbnMnLFxuICB9LFxuICBFc2Nyb3c6IHtcbiAgICB2YWx1ZTogNSxcbiAgICBkZXNjcmlwdGlvbjogJ0VzY3JvdyBUcmFuc2FjdGlvbnMnLFxuICB9LFxuICBGZWU6IHtcbiAgICB2YWx1ZTogNixcbiAgICBkZXNjcmlwdGlvbjogJ0ZlZSBUcmFuc2FjdGlvbnMnLFxuICB9XG59O1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtR3JhcGhRTCA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICBuYW1lOiAnU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bScsXG4gIGRlc2NyaXB0aW9uOiAnU3RhdGVtZW50IEhpc3RvcnkgQ2F0ZWdvcnkgRW51bScsXG4gIHZhbHVlczogU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bSxcbn0pO1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cCA9IHt9O1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLk90aGVyLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLk90aGVyLnZhbHVlLFxuXTtcblxuU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXBbU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5JbnRlcm5hbFRyYW5zZmVyLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkxvY2FsSW4udmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Mb2NhbE91dC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uRXh0ZXJuYWxUcmFuc2Zlci52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5FeHRlcm5hbEluLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXh0ZXJuYWxPdXQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5FeHRlcm5hbFJlZnVuZC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uUGF5bWVudEFuZEJpbGxpbmcudmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uUGF5bWVudE91dC52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLlBheW1lbnRSZWZ1bmQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Cb2xldG9Jbi52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkNyb25PdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkFUTS52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5BdG1PdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkVzY3Jvdy52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Fc2Nyb3dMb2NrLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXNjcm93VW5sb2NrLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXNjcm93SW4udmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Fc2Nyb3dPdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkZlZS52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5PdGhlckZlZXMudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5GZWVSZWZ1bmQudmFsdWUsXG5dO1xuXG5jb25zdCBjb2RlVG9DYXRlZ29yeSA9IChjb2RlOiBudW1iZXIpID0+IHtcbiAgbGV0IGNhdGVnb3J5ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5PdGhlci52YWx1ZTtcblxuICBPYmplY3Qua2V5cyhTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtKS5mb3JFYWNoKChjYXROYW1lKSA9PiB7XG4gICAgY29uc3QgY2F0ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bVtjYXROYW1lXTtcbiAgICBpZiAoIXVuZGVmaW5lZE9yTnVsbChTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdKSAmJiBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdLmluZGV4T2YoY29kZSkgIT09IC0xKSB7XG4gICAgICBjYXRlZ29yeSA9IGNhdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yeTtcbn07XG5cbmV4cG9ydCB7XG4gIFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtR3JhcGhRTCxcbiAgY29kZVRvQ2F0ZWdvcnksXG59O1xuIl19