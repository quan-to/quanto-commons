'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphql = require('graphql');

var _ErrorCodes = require('./ErrorCodes');

var _ErrorCodes2 = _interopRequireDefault(_ErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Lucas Teske on 02/05/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ErrorObject = function (_Error) {
  _inherits(ErrorObject, _Error);

  function ErrorObject(data) {
    _classCallCheck(this, ErrorObject);

    var _this = _possibleConstructorReturn(this, (ErrorObject.__proto__ || Object.getPrototypeOf(ErrorObject)).call(this, data.message));

    _this.constructor = ErrorObject; // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892
    _this.name = _this.constructor.name;
    // eslint-disable-next-line no-proto
    _this.__proto__ = ErrorObject.prototype; // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892
    Error.captureStackTrace(_this, ErrorObject);

    _this.errorCode = data.errorCode || _ErrorCodes2.default.InternalServerError;
    _this.errorField = data.errorField || '';
    _this.errorData = JSON.stringify(data.errorData) || '';
    _this.message = data.message || _this.stack || data.errorCode;

    if (_ErrorCodes2.default._valueToKey(data.errorCode) === null) {
      console.log('ErrorObject -- Warning: ErrorCode "' + data.errorCode + '" not in list of error codes!');
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
      var me = 'ErrorObject(' + this.errorCode + '): ' + this.message + ')';

      if (this.errorField !== undefined && this.errorField !== null) {
        me += 'on field ' + this.errorField;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JPYmplY3QuanMiXSwibmFtZXMiOlsiRXJyb3JPYmplY3QiLCJkYXRhIiwibWVzc2FnZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9fcHJvdG9fXyIsInByb3RvdHlwZSIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJlcnJvckNvZGUiLCJFcnJvckNvZGVzIiwiSW50ZXJuYWxTZXJ2ZXJFcnJvciIsImVycm9yRmllbGQiLCJlcnJvckRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhY2siLCJfdmFsdWVUb0tleSIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsIm1lIiwidW5kZWZpbmVkIiwiR3JhcGhRTCIsIkdyYXBoUUxPYmplY3RUeXBlIiwiZGVzY3JpcHRpb24iLCJmaWVsZHMiLCJ0eXBlIiwiR3JhcGhRTFN0cmluZyIsInN0YWNrVHJhY2UiLCJyZXNvbHZlIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7OytlQU5BOzs7OztJQVFxQkEsVzs7O0FBTW5CLHVCQUFZQyxJQUFaLEVBQTBCO0FBQUE7O0FBQUEsMEhBQ2xCQSxLQUFLQyxPQURhOztBQUV4QixVQUFLQyxXQUFMLEdBQW1CSCxXQUFuQixDQUZ3QixDQUVRO0FBQ2hDLFVBQUtJLElBQUwsR0FBWSxNQUFLRCxXQUFMLENBQWlCQyxJQUE3QjtBQUNBO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkwsWUFBWU0sU0FBN0IsQ0FMd0IsQ0FLZ0I7QUFDeENDLFVBQU1DLGlCQUFOLFFBQThCUixXQUE5Qjs7QUFHQSxVQUFLUyxTQUFMLEdBQWlCUixLQUFLUSxTQUFMLElBQWtCQyxxQkFBV0MsbUJBQTlDO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQlgsS0FBS1csVUFBTCxJQUFtQixFQUFyQztBQUNBLFVBQUtDLFNBQUwsR0FBaUJDLEtBQUtDLFNBQUwsQ0FBZWQsS0FBS1ksU0FBcEIsS0FBa0MsRUFBbkQ7QUFDQSxVQUFLWCxPQUFMLEdBQWVELEtBQUtDLE9BQUwsSUFBZ0IsTUFBS2MsS0FBckIsSUFBOEJmLEtBQUtRLFNBQWxEOztBQUVBLFFBQUlDLHFCQUFXTyxXQUFYLENBQXVCaEIsS0FBS1EsU0FBNUIsTUFBMkMsSUFBL0MsRUFBcUQ7QUFDbkRTLGNBQVFDLEdBQVIseUNBQWtEbEIsS0FBS1EsU0FBdkQ7QUFDRDtBQWhCdUI7QUFpQnpCOzs7OytCQUVVO0FBQ1QsYUFBT0ssS0FBS00sS0FBTCxDQUFXTixLQUFLQyxTQUFMLENBQWUsSUFBZixDQUFYLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSU0sc0JBQW9CLEtBQUtaLFNBQXpCLFdBQXdDLEtBQUtQLE9BQTdDLE1BQUo7O0FBRUEsVUFBSSxLQUFLVSxVQUFMLEtBQW9CVSxTQUFwQixJQUFpQyxLQUFLVixVQUFMLEtBQW9CLElBQXpELEVBQStEO0FBQzdEUyw0QkFBa0IsS0FBS1QsVUFBdkI7QUFDRDs7QUFFRCxVQUFJLEtBQUtJLEtBQUwsS0FBZU0sU0FBZixJQUE0QixLQUFLTixLQUFMLEtBQWUsSUFBL0MsRUFBcUQ7QUFDbkRLLGlDQUF1QixLQUFLTCxLQUE1QjtBQUNEOztBQUVELGFBQU9LLEVBQVA7QUFDRDs7OztFQXpDc0NkLEs7O0FBQXBCUCxXLENBMkNadUIsTyxHQUFVLElBQUlDLDBCQUFKLENBQXNCO0FBQ3JDcEIsUUFBTSxhQUQrQjtBQUVyQ3FCLGVBQWEscUNBRndCO0FBR3JDQyxVQUFRO0FBQUEsV0FBTztBQUNiakIsaUJBQVc7QUFDVGtCLGNBQU1DO0FBREcsT0FERTtBQUliQyxrQkFBWTtBQUNWRixjQUFNQyxzQkFESTtBQUVWRSxlQUZVLG1CQUVGQyxNQUZFLEVBRU07QUFDZCxpQkFBT0EsT0FBT2YsS0FBZDtBQUNEO0FBSlMsT0FKQztBQVViSixrQkFBWTtBQUNWZSxjQUFNQztBQURJLE9BVkM7QUFhYmYsaUJBQVc7QUFDVGMsY0FBTUM7QUFERyxPQWJFO0FBZ0JiMUIsZUFBUztBQUNQeUIsY0FBTUM7QUFEQztBQWhCSSxLQUFQO0FBQUE7QUFINkIsQ0FBdEIsQztrQkEzQ0U1QixXIiwiZmlsZSI6IkVycm9yT2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IEVycm9yQ29kZXMgZnJvbSAnLi9FcnJvckNvZGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JPYmplY3QgZXh0ZW5kcyBFcnJvciB7XG4gIGVycm9yQ29kZTogc3RyaW5nO1xuICBlcnJvckZpZWxkOiBzdHJpbmd8dm9pZDtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBlcnJvckRhdGE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcbiAgICBzdXBlcihkYXRhLm1lc3NhZ2UpO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBFcnJvck9iamVjdDsgLy8gTmFzdHkgZml4IGZvciBCYWJlbCBCdWcgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy80NDg1I2lzc3VlY29tbWVudC0zMTU1Njk4OTJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG4gICAgdGhpcy5fX3Byb3RvX18gPSBFcnJvck9iamVjdC5wcm90b3R5cGU7IC8vIE5hc3R5IGZpeCBmb3IgQmFiZWwgQnVnIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNDQ4NSNpc3N1ZWNvbW1lbnQtMzE1NTY5ODkyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXJyb3JPYmplY3QpO1xuXG5cbiAgICB0aGlzLmVycm9yQ29kZSA9IGRhdGEuZXJyb3JDb2RlIHx8IEVycm9yQ29kZXMuSW50ZXJuYWxTZXJ2ZXJFcnJvcjtcbiAgICB0aGlzLmVycm9yRmllbGQgPSBkYXRhLmVycm9yRmllbGQgfHwgJyc7XG4gICAgdGhpcy5lcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhLmVycm9yRGF0YSkgfHwgJyc7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlIHx8IHRoaXMuc3RhY2sgfHwgZGF0YS5lcnJvckNvZGU7XG5cbiAgICBpZiAoRXJyb3JDb2Rlcy5fdmFsdWVUb0tleShkYXRhLmVycm9yQ29kZSkgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvck9iamVjdCAtLSBXYXJuaW5nOiBFcnJvckNvZGUgXCIke2RhdGEuZXJyb3JDb2RlfVwiIG5vdCBpbiBsaXN0IG9mIGVycm9yIGNvZGVzIWApO1xuICAgIH1cbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBtZSA9IGBFcnJvck9iamVjdCgke3RoaXMuZXJyb3JDb2RlfSk6ICR7dGhpcy5tZXNzYWdlfSlgO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JGaWVsZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZXJyb3JGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbWUgKz0gYG9uIGZpZWxkICR7dGhpcy5lcnJvckZpZWxkfWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhY2sgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YWNrICE9PSBudWxsKSB7XG4gICAgICBtZSArPSBgXFxuU3RhY2tUcmFjZTogJHt0aGlzLnN0YWNrfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lO1xuICB9XG5cbiAgc3RhdGljIEdyYXBoUUwgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6ICdFcnJvck9iamVjdCcsXG4gICAgZGVzY3JpcHRpb246ICdBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXJyb3IgZGF0YScsXG4gICAgZmllbGRzOiAoKSA9PiAoe1xuICAgICAgZXJyb3JDb2RlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgICAgc3RhY2tUcmFjZToge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICByZXNvbHZlKHBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnQuc3RhY2s7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZXJyb3JGaWVsZDoge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIGVycm9yRGF0YToge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xufVxuIl19