'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphql = require('graphql');

var _ErrorCodes = require('./ErrorCodes');

var _ErrorCodes2 = _interopRequireDefault(_ErrorCodes);

var _tools = require('../tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last update: 02/02/2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

(0, _tools.QuantoColors)();

var ErrorObject = function (_Error) {
  _inherits(ErrorObject, _Error);

  function ErrorObject(data) {
    _classCallCheck(this, ErrorObject);

    if (!(data instanceof Object)) {
      throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
    }

    var _this = _possibleConstructorReturn(this, (ErrorObject.__proto__ || Object.getPrototypeOf(ErrorObject)).call(this, data.message));

    _this.constructor = ErrorObject; // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892

    if (!(typeof _this.constructor === 'function')) {
      throw new TypeError('Value of "this.constructor" violates contract.\n\nExpected:\n(Object) => any\n\nGot:\n' + _inspect(_this.constructor));
    }

    _this.name = _this.constructor.name;
    _this.__proto__ = ErrorObject.prototype; // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892
    Error.captureStackTrace(_this, ErrorObject);

    _this.errorCode = data.errorCode || _ErrorCodes2.default.InternalServerError;

    if (!(typeof _this.errorCode === 'string')) {
      throw new TypeError('Value of "this.errorCode" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_this.errorCode));
    }

    _this.errorField = data.errorField || '';

    if (!(typeof _this.errorField === 'string' || _this.errorField == null)) {
      throw new TypeError('Value of "this.errorField" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(_this.errorField));
    }

    _this.errorData = JSON.stringify(data.errorData) || '';

    if (!(typeof _this.errorData === 'string')) {
      throw new TypeError('Value of "this.errorData" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_this.errorData));
    }

    _this.message = data.message || _this.stack || data.errorCode;

    if (!(typeof _this.message === 'string')) {
      throw new TypeError('Value of "this.message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_this.message));
    }

    if (_ErrorCodes2.default._valueToKey(data.errorCode) === null) {
      //$FlowFixMe
      console.log(('ErrorObject -- Warning: ErrorCode "' + data.errorCode.warn.bold + '" not in list of error codes!').warn);
    }
    return _this;
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

      if (this.stack !== undefined && this.stack !== null) {
        me += '\nStackTrace: ' + this.stack;
      }

      return me;
    }
  }]);

  return ErrorObject;
}(Error);

ErrorObject.GraphQL = new _graphql.GraphQLObjectType({
  name: 'ErrorObject',
  description: 'An object containing the error data',
  fields: function fields() {
    return {
      errorCode: {
        type: _graphql.GraphQLString
      },
      stackTrace: {
        type: _graphql.GraphQLString,
        resolve: function resolve(parent) {
          return parent.stack;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JPYmplY3QuanMiXSwibmFtZXMiOlsiRXJyb3JPYmplY3QiLCJkYXRhIiwiT2JqZWN0IiwibWVzc2FnZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9fcHJvdG9fXyIsInByb3RvdHlwZSIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJlcnJvckNvZGUiLCJJbnRlcm5hbFNlcnZlckVycm9yIiwiZXJyb3JGaWVsZCIsImVycm9yRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGFjayIsIl92YWx1ZVRvS2V5IiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJib2xkIiwicGFyc2UiLCJtZSIsInVuZGVmaW5lZCIsIkdyYXBoUUwiLCJkZXNjcmlwdGlvbiIsImZpZWxkcyIsInR5cGUiLCJzdGFja1RyYWNlIiwicmVzb2x2ZSIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OytlQVBBOzs7OztBQVdBOztJQUVxQkEsVzs7O0FBT25CLHVCQUFZQyxJQUFaLEVBQTBCO0FBQUE7O0FBQUEsVUFBZEEsSUFBYyxZQUFSQyxNQUFRO0FBQUEsa0hBQWRELElBQWM7QUFBQTs7QUFBQSwwSEFDbEJBLEtBQUtFLE9BRGE7O0FBRXhCLFVBQUtDLFdBQUwsR0FBbUJKLFdBQW5CLENBRndCLENBRVU7O0FBRlYsaUJBRXhCLE1BQUtJLFdBRm1CO0FBQUEsOEhBRXhCLE1BQUtBLFdBRm1CO0FBQUE7O0FBR3hCLFVBQUtDLElBQUwsR0FBWSxNQUFLRCxXQUFMLENBQWlCQyxJQUE3QjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJOLFlBQVlPLFNBQTdCLENBSndCLENBSWdCO0FBQ3hDQyxVQUFNQyxpQkFBTixRQUE4QlQsV0FBOUI7O0FBR0EsVUFBS1UsU0FBTCxHQUFpQlQsS0FBS1MsU0FBTCxJQUFrQixxQkFBV0MsbUJBQTlDOztBQVJ3QixpQkFReEIsTUFBS0QsU0FSbUI7QUFBQSxtSEFReEIsTUFBS0EsU0FSbUI7QUFBQTs7QUFTeEIsVUFBS0UsVUFBTCxHQUFrQlgsS0FBS1csVUFBTCxJQUFtQixFQUFyQzs7QUFUd0IsaUJBU3hCLE1BQUtBLFVBVG1CLGlCQVN4QixNQUFLQSxVQVRtQjtBQUFBLDJIQVN4QixNQUFLQSxVQVRtQjtBQUFBOztBQVV4QixVQUFLQyxTQUFMLEdBQWlCQyxLQUFLQyxTQUFMLENBQWVkLEtBQUtZLFNBQXBCLEtBQWtDLEVBQW5EOztBQVZ3QixpQkFVeEIsTUFBS0EsU0FWbUI7QUFBQSxtSEFVeEIsTUFBS0EsU0FWbUI7QUFBQTs7QUFXeEIsVUFBS1YsT0FBTCxHQUFlRixLQUFLRSxPQUFMLElBQWdCLE1BQUthLEtBQXJCLElBQThCZixLQUFLUyxTQUFsRDs7QUFYd0IsaUJBV3hCLE1BQUtQLE9BWG1CO0FBQUEsaUhBV3hCLE1BQUtBLE9BWG1CO0FBQUE7O0FBYXhCLFFBQUkscUJBQVdjLFdBQVgsQ0FBdUJoQixLQUFLUyxTQUE1QixNQUEyQyxJQUEvQyxFQUFxRDtBQUNuRDtBQUNBUSxjQUFRQyxHQUFSLENBQVkseUNBQXNDbEIsS0FBS1MsU0FBTCxDQUFlVSxJQUFmLENBQW9CQyxJQUExRCxvQ0FBOEZELElBQTFHO0FBQ0Q7QUFoQnVCO0FBaUJ6Qjs7OzsrQkFFVTtBQUNULGFBQU9OLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS0MsU0FBTCxDQUFlLElBQWYsQ0FBWCxDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNUO0FBQ0EsVUFBSVEsc0JBQW9CLEtBQUtiLFNBQUwsQ0FBZVUsSUFBZixDQUFvQkMsSUFBeEMsV0FBa0QsS0FBS2xCLE9BQXZELE1BQUo7O0FBRUEsVUFBSSxLQUFLUyxVQUFMLEtBQW9CWSxTQUFwQixJQUFpQyxLQUFLWixVQUFMLEtBQW9CLElBQXpELEVBQStEO0FBQzdEO0FBQ0FXLDRCQUFrQixLQUFLWCxVQUFMLENBQWdCUSxJQUFoQixDQUFxQkMsSUFBdkM7QUFDRDs7QUFFRCxVQUFJLEtBQUtMLEtBQUwsS0FBZVEsU0FBZixJQUE0QixLQUFLUixLQUFMLEtBQWUsSUFBL0MsRUFBcUQ7QUFDbkRPLGlDQUF1QixLQUFLUCxLQUE1QjtBQUNEOztBQUVELGFBQU9PLEVBQVA7QUFDRDs7OztFQTVDc0NmLEs7O0FBQXBCUixXLENBOENaeUIsTyxHQUFVLCtCQUFzQjtBQUNyQ3BCLFFBQU0sYUFEK0I7QUFFckNxQixlQUFhLHFDQUZ3QjtBQUdyQ0MsVUFBUTtBQUFBLFdBQU87QUFDYmpCLGlCQUFXO0FBQ1RrQjtBQURTLE9BREU7QUFJYkMsa0JBQVk7QUFDVkQsb0NBRFU7QUFFVkUsZUFGVSxtQkFFRkMsTUFGRSxFQUVNO0FBQ2QsaUJBQU9BLE9BQU9mLEtBQWQ7QUFDRDtBQUpTLE9BSkM7QUFVYkosa0JBQVk7QUFDVmdCO0FBRFUsT0FWQztBQWFiZixpQkFBVztBQUNUZTtBQURTLE9BYkU7QUFnQmJ6QixlQUFTO0FBQ1B5QjtBQURPO0FBaEJJLEtBQVA7QUFBQTtBQUg2QixDQUF0QixDO2tCQTlDRTVCLFciLCJmaWxlIjoiRXJyb3JPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExhc3QgdXBkYXRlOiAwMi8wMi8yMDE4XG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgRXJyb3JDb2RlcyBmcm9tICcuL0Vycm9yQ29kZXMnO1xuaW1wb3J0IHtcbiAgUXVhbnRvQ29sb3JzLFxufSBmcm9tICcuLi90b29scyc7XG5cblF1YW50b0NvbG9ycygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvck9iamVjdCBleHRlbmRzIEVycm9yIHtcblxuICBlcnJvckNvZGU6IHN0cmluZztcbiAgZXJyb3JGaWVsZDogc3RyaW5nfHZvaWQ7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZXJyb3JEYXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG4gICAgc3VwZXIoZGF0YS5tZXNzYWdlKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gRXJyb3JPYmplY3Q7ICAgLy8gTmFzdHkgZml4IGZvciBCYWJlbCBCdWcgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy80NDg1I2lzc3VlY29tbWVudC0zMTU1Njk4OTJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5fX3Byb3RvX18gPSBFcnJvck9iamVjdC5wcm90b3R5cGU7IC8vIE5hc3R5IGZpeCBmb3IgQmFiZWwgQnVnIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNDQ4NSNpc3N1ZWNvbW1lbnQtMzE1NTY5ODkyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXJyb3JPYmplY3QpO1xuXG5cbiAgICB0aGlzLmVycm9yQ29kZSA9IGRhdGEuZXJyb3JDb2RlIHx8IEVycm9yQ29kZXMuSW50ZXJuYWxTZXJ2ZXJFcnJvcjtcbiAgICB0aGlzLmVycm9yRmllbGQgPSBkYXRhLmVycm9yRmllbGQgfHwgJyc7XG4gICAgdGhpcy5lcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhLmVycm9yRGF0YSkgfHwgJyc7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlIHx8IHRoaXMuc3RhY2sgfHwgZGF0YS5lcnJvckNvZGU7XG5cbiAgICBpZiAoRXJyb3JDb2Rlcy5fdmFsdWVUb0tleShkYXRhLmVycm9yQ29kZSkgPT09IG51bGwpIHtcbiAgICAgIC8vJEZsb3dGaXhNZVxuICAgICAgY29uc29sZS5sb2coYEVycm9yT2JqZWN0IC0tIFdhcm5pbmc6IEVycm9yQ29kZSBcIiR7ZGF0YS5lcnJvckNvZGUud2Fybi5ib2xkfVwiIG5vdCBpbiBsaXN0IG9mIGVycm9yIGNvZGVzIWAud2Fybik7XG4gICAgfVxuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGxldCBtZSA9IGBFcnJvck9iamVjdCgke3RoaXMuZXJyb3JDb2RlLndhcm4uYm9sZH0pOiAke3RoaXMubWVzc2FnZX0pYDtcblxuICAgIGlmICh0aGlzLmVycm9yRmllbGQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmVycm9yRmllbGQgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIG1lICs9IGBvbiBmaWVsZCAke3RoaXMuZXJyb3JGaWVsZC53YXJuLmJvbGR9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGFjayAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhY2sgIT09IG51bGwpIHtcbiAgICAgIG1lICs9IGBcXG5TdGFja1RyYWNlOiAke3RoaXMuc3RhY2t9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWU7XG4gIH1cblxuICBzdGF0aWMgR3JhcGhRTCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZTogJ0Vycm9yT2JqZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FuIG9iamVjdCBjb250YWluaW5nIHRoZSBlcnJvciBkYXRhJyxcbiAgICBmaWVsZHM6ICgpID0+ICh7XG4gICAgICBlcnJvckNvZGU6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBzdGFja1RyYWNlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgIHJlc29sdmUocGFyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5zdGFjaztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yRmllbGQ6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBlcnJvckRhdGE6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cbiJdfQ==