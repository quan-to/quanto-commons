'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Lucas Teske on 02/05/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _graphql = require('graphql');

var _ErrorCodes = require('./ErrorCodes');

var _ErrorCodes2 = _interopRequireDefault(_ErrorCodes);

var _tools = require('../tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(0, _tools.QuantoColors)();

var ErrorObject = function () {
  function ErrorObject(data) {
    _classCallCheck(this, ErrorObject);

    if (!(data instanceof Object)) {
      throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
    }

    if (data !== undefined) {
      this.errorCode = data.errorCode;

      if (!(typeof this.errorCode === 'string')) {
        throw new TypeError('Value of "this.errorCode" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(this.errorCode));
      }

      this.stackTrace = data.stackTrace;

      if (!(typeof this.stackTrace === 'string' || this.stackTrace == null)) {
        throw new TypeError('Value of "this.stackTrace" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(this.stackTrace));
      }

      this.errorField = data.errorField;

      if (!(typeof this.errorField === 'string' || this.errorField == null)) {
        throw new TypeError('Value of "this.errorField" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(this.errorField));
      }

      this.errorData = JSON.stringify(data.errorData) || '';

      if (!(typeof this.errorData === 'string')) {
        throw new TypeError('Value of "this.errorData" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(this.errorData));
      }

      this.message = data.message || data.stackTrace || data.errorCode;

      if (!(typeof this.message === 'string')) {
        throw new TypeError('Value of "this.message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(this.message));
      }

      if (_ErrorCodes2.default._valueToKey(data.errorCode) === null) {
        // $FlowFixMe
        console.log(('ErrorObject -- Warning: ErrorCode "' + data.errorCode.warn.bold + '" not in list of error codes!').warn);
      }
    } else {
      throw _ErrorCodes2.default.NoDataAvailable;
    }
  }

  _createClass(ErrorObject, [{
    key: 'toObject',
    value: function toObject() {
      return JSON.parse(JSON.stringify(this));
    }
  }, {
    key: 'toString',
    value: function toString() {
      // $FlowFixMe
      var me = 'ErrorObject(' + this.errorCode.warn.bold + '): ' + this.message + ')';

      if (this.errorField !== undefined && this.errorField !== null) {
        // $FlowFixMe
        me += 'on field ' + this.errorField.warn.bold;
      }

      if (this.stackTrace !== undefined && this.stackTrace !== null) {
        me += '\nStackTrace: ' + this.stackTrace;
      }

      return me;
    }
  }]);

  return ErrorObject;
}();

ErrorObject.GraphQL = new _graphql.GraphQLObjectType({
  name: 'ErrorObject',
  description: 'An object containing the error data',
  fields: function fields() {
    return {
      errorCode: {
        type: _graphql.GraphQLString
      },
      stackTrace: {
        type: _graphql.GraphQLString
      },
      errorField: {
        type: _graphql.GraphQLString
      },
      errorData: {
        type: _graphql.GraphQLString
      },
      message: {
        type: _graphql.GraphQLString
      }
    };
  }
});
exports.default = ErrorObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JPYmplY3QuanMiXSwibmFtZXMiOlsiRXJyb3JPYmplY3QiLCJkYXRhIiwiT2JqZWN0IiwidW5kZWZpbmVkIiwiZXJyb3JDb2RlIiwic3RhY2tUcmFjZSIsImVycm9yRmllbGQiLCJlcnJvckRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsIl92YWx1ZVRvS2V5IiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJib2xkIiwiTm9EYXRhQXZhaWxhYmxlIiwicGFyc2UiLCJtZSIsIkdyYXBoUUwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmaWVsZHMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxakJBQUE7Ozs7O0FBS0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUE7O0lBRXFCQSxXO0FBUW5CLHVCQUFZQyxJQUFaLEVBQTBCO0FBQUE7O0FBQUEsVUFBZEEsSUFBYyxZQUFSQyxNQUFRO0FBQUEsa0hBQWRELElBQWM7QUFBQTs7QUFDeEIsUUFBSUEsU0FBU0UsU0FBYixFQUF3QjtBQUN0QixXQUFLQyxTQUFMLEdBQWlCSCxLQUFLRyxTQUF0Qjs7QUFEc0IsbUJBQ3RCLEtBQUtBLFNBRGlCO0FBQUEscUhBQ3RCLEtBQUtBLFNBRGlCO0FBQUE7O0FBRXRCLFdBQUtDLFVBQUwsR0FBa0JKLEtBQUtJLFVBQXZCOztBQUZzQixtQkFFdEIsS0FBS0EsVUFGaUIsaUJBRXRCLEtBQUtBLFVBRmlCO0FBQUEsNkhBRXRCLEtBQUtBLFVBRmlCO0FBQUE7O0FBR3RCLFdBQUtDLFVBQUwsR0FBa0JMLEtBQUtLLFVBQXZCOztBQUhzQixtQkFHdEIsS0FBS0EsVUFIaUIsaUJBR3RCLEtBQUtBLFVBSGlCO0FBQUEsNkhBR3RCLEtBQUtBLFVBSGlCO0FBQUE7O0FBSXRCLFdBQUtDLFNBQUwsR0FBaUJDLEtBQUtDLFNBQUwsQ0FBZVIsS0FBS00sU0FBcEIsS0FBa0MsRUFBbkQ7O0FBSnNCLG1CQUl0QixLQUFLQSxTQUppQjtBQUFBLHFIQUl0QixLQUFLQSxTQUppQjtBQUFBOztBQUt0QixXQUFLRyxPQUFMLEdBQWVULEtBQUtTLE9BQUwsSUFBZ0JULEtBQUtJLFVBQXJCLElBQW1DSixLQUFLRyxTQUF2RDs7QUFMc0IsbUJBS3RCLEtBQUtNLE9BTGlCO0FBQUEsbUhBS3RCLEtBQUtBLE9BTGlCO0FBQUE7O0FBT3RCLFVBQUkscUJBQVdDLFdBQVgsQ0FBdUJWLEtBQUtHLFNBQTVCLE1BQTJDLElBQS9DLEVBQXFEO0FBQ25EO0FBQ0FRLGdCQUFRQyxHQUFSLENBQVkseUNBQXNDWixLQUFLRyxTQUFMLENBQWVVLElBQWYsQ0FBb0JDLElBQTFELG9DQUE4RkQsSUFBMUc7QUFDRDtBQUNGLEtBWEQsTUFXTztBQUNMLFlBQU0scUJBQVdFLGVBQWpCO0FBQ0Q7QUFDRjs7OzsrQkFFVTtBQUNULGFBQU9SLEtBQUtTLEtBQUwsQ0FBV1QsS0FBS0MsU0FBTCxDQUFlLElBQWYsQ0FBWCxDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNUO0FBQ0EsVUFBSVMsc0JBQW9CLEtBQUtkLFNBQUwsQ0FBZVUsSUFBZixDQUFvQkMsSUFBeEMsV0FBa0QsS0FBS0wsT0FBdkQsTUFBSjs7QUFFQSxVQUFJLEtBQUtKLFVBQUwsS0FBb0JILFNBQXBCLElBQWlDLEtBQUtHLFVBQUwsS0FBb0IsSUFBekQsRUFBK0Q7QUFDN0Q7QUFDQVksNEJBQWtCLEtBQUtaLFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCQyxJQUF2QztBQUNEOztBQUVELFVBQUksS0FBS1YsVUFBTCxLQUFvQkYsU0FBcEIsSUFBaUMsS0FBS0UsVUFBTCxLQUFvQixJQUF6RCxFQUErRDtBQUM3RGEsaUNBQXVCLEtBQUtiLFVBQTVCO0FBQ0Q7O0FBRUQsYUFBT2EsRUFBUDtBQUNEOzs7Ozs7QUEzQ2tCbEIsVyxDQTZDWm1CLE8sR0FBVSwrQkFBc0I7QUFDckNDLFFBQU0sYUFEK0I7QUFFckNDLGVBQWEscUNBRndCO0FBR3JDQyxVQUFRO0FBQUEsV0FBTztBQUNibEIsaUJBQVc7QUFDVG1CO0FBRFMsT0FERTtBQUlibEIsa0JBQVk7QUFDVmtCO0FBRFUsT0FKQztBQU9iakIsa0JBQVk7QUFDVmlCO0FBRFUsT0FQQztBQVViaEIsaUJBQVc7QUFDVGdCO0FBRFMsT0FWRTtBQWFiYixlQUFTO0FBQ1BhO0FBRE87QUFiSSxLQUFQO0FBQUE7QUFINkIsQ0FBdEIsQztrQkE3Q0V2QixXIiwiZmlsZSI6IkVycm9yT2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IEVycm9yQ29kZXMgZnJvbSAnLi9FcnJvckNvZGVzJztcbmltcG9ydCB7XG4gIFF1YW50b0NvbG9ycyxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5RdWFudG9Db2xvcnMoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JPYmplY3Qge1xuXG4gIGVycm9yQ29kZTogc3RyaW5nO1xuICBzdGFja1RyYWNlOiBzdHJpbmd8dm9pZDtcbiAgZXJyb3JGaWVsZDogc3RyaW5nfHZvaWQ7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZXJyb3JEYXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5lcnJvckNvZGUgPSBkYXRhLmVycm9yQ29kZTtcbiAgICAgIHRoaXMuc3RhY2tUcmFjZSA9IGRhdGEuc3RhY2tUcmFjZTtcbiAgICAgIHRoaXMuZXJyb3JGaWVsZCA9IGRhdGEuZXJyb3JGaWVsZDtcbiAgICAgIHRoaXMuZXJyb3JEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YS5lcnJvckRhdGEpIHx8ICcnO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlIHx8IGRhdGEuc3RhY2tUcmFjZSB8fCBkYXRhLmVycm9yQ29kZTtcblxuICAgICAgaWYgKEVycm9yQ29kZXMuX3ZhbHVlVG9LZXkoZGF0YS5lcnJvckNvZGUpID09PSBudWxsKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yT2JqZWN0IC0tIFdhcm5pbmc6IEVycm9yQ29kZSBcIiR7ZGF0YS5lcnJvckNvZGUud2Fybi5ib2xkfVwiIG5vdCBpbiBsaXN0IG9mIGVycm9yIGNvZGVzIWAud2Fybik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yQ29kZXMuTm9EYXRhQXZhaWxhYmxlO1xuICAgIH1cbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBsZXQgbWUgPSBgRXJyb3JPYmplY3QoJHt0aGlzLmVycm9yQ29kZS53YXJuLmJvbGR9KTogJHt0aGlzLm1lc3NhZ2V9KWA7XG5cbiAgICBpZiAodGhpcy5lcnJvckZpZWxkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5lcnJvckZpZWxkICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBtZSArPSBgb24gZmllbGQgJHt0aGlzLmVycm9yRmllbGQud2Fybi5ib2xkfWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhY2tUcmFjZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhY2tUcmFjZSAhPT0gbnVsbCkge1xuICAgICAgbWUgKz0gYFxcblN0YWNrVHJhY2U6ICR7dGhpcy5zdGFja1RyYWNlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lO1xuICB9XG5cbiAgc3RhdGljIEdyYXBoUUwgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6ICdFcnJvck9iamVjdCcsXG4gICAgZGVzY3JpcHRpb246ICdBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXJyb3IgZGF0YScsXG4gICAgZmllbGRzOiAoKSA9PiAoe1xuICAgICAgZXJyb3JDb2RlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgICAgc3RhY2tUcmFjZToge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIGVycm9yRmllbGQ6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBlcnJvckRhdGE6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cbiJdfQ==