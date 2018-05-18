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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JPYmplY3QuanMiXSwibmFtZXMiOlsiRXJyb3JPYmplY3QiLCJkYXRhIiwibWVzc2FnZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9fcHJvdG9fXyIsInByb3RvdHlwZSIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJlcnJvckNvZGUiLCJJbnRlcm5hbFNlcnZlckVycm9yIiwiZXJyb3JGaWVsZCIsImVycm9yRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGFjayIsIl92YWx1ZVRvS2V5IiwiY29uc29sZSIsImxvZyIsInBhcnNlIiwibWUiLCJ1bmRlZmluZWQiLCJHcmFwaFFMIiwiZGVzY3JpcHRpb24iLCJmaWVsZHMiLCJ0eXBlIiwic3RhY2tUcmFjZSIsInJlc29sdmUiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7K2VBTkE7Ozs7O0lBUXFCQSxXOzs7QUFNbkIsdUJBQVlDLElBQVosRUFBMEI7QUFBQTs7QUFBQSwwSEFDbEJBLEtBQUtDLE9BRGE7O0FBRXhCLFVBQUtDLFdBQUwsR0FBbUJILFdBQW5CLENBRndCLENBRVE7QUFDaEMsVUFBS0ksSUFBTCxHQUFZLE1BQUtELFdBQUwsQ0FBaUJDLElBQTdCO0FBQ0E7QUFDQSxVQUFLQyxTQUFMLEdBQWlCTCxZQUFZTSxTQUE3QixDQUx3QixDQUtnQjtBQUN4Q0MsVUFBTUMsaUJBQU4sUUFBOEJSLFdBQTlCOztBQUdBLFVBQUtTLFNBQUwsR0FBaUJSLEtBQUtRLFNBQUwsSUFBa0IscUJBQVdDLG1CQUE5QztBQUNBLFVBQUtDLFVBQUwsR0FBa0JWLEtBQUtVLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQyxLQUFLQyxTQUFMLENBQWViLEtBQUtXLFNBQXBCLEtBQWtDLEVBQW5EO0FBQ0EsVUFBS1YsT0FBTCxHQUFlRCxLQUFLQyxPQUFMLElBQWdCLE1BQUthLEtBQXJCLElBQThCZCxLQUFLUSxTQUFsRDs7QUFFQSxRQUFJLHFCQUFXTyxXQUFYLENBQXVCZixLQUFLUSxTQUE1QixNQUEyQyxJQUEvQyxFQUFxRDtBQUNuRFEsY0FBUUMsR0FBUix5Q0FBa0RqQixLQUFLUSxTQUF2RDtBQUNEO0FBaEJ1QjtBQWlCekI7Ozs7K0JBRVU7QUFDVCxhQUFPSSxLQUFLTSxLQUFMLENBQVdOLEtBQUtDLFNBQUwsQ0FBZSxJQUFmLENBQVgsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJTSxzQkFBb0IsS0FBS1gsU0FBekIsV0FBd0MsS0FBS1AsT0FBN0MsTUFBSjs7QUFFQSxVQUFJLEtBQUtTLFVBQUwsS0FBb0JVLFNBQXBCLElBQWlDLEtBQUtWLFVBQUwsS0FBb0IsSUFBekQsRUFBK0Q7QUFDN0RTLDRCQUFrQixLQUFLVCxVQUF2QjtBQUNEOztBQUVELFVBQUksS0FBS0ksS0FBTCxLQUFlTSxTQUFmLElBQTRCLEtBQUtOLEtBQUwsS0FBZSxJQUEvQyxFQUFxRDtBQUNuREssaUNBQXVCLEtBQUtMLEtBQTVCO0FBQ0Q7O0FBRUQsYUFBT0ssRUFBUDtBQUNEOzs7O0VBekNzQ2IsSzs7QUFBcEJQLFcsQ0EyQ1pzQixPLEdBQVUsK0JBQXNCO0FBQ3JDbEIsUUFBTSxhQUQrQjtBQUVyQ21CLGVBQWEscUNBRndCO0FBR3JDQyxVQUFRO0FBQUEsV0FBTztBQUNiZixpQkFBVztBQUNUZ0I7QUFEUyxPQURFO0FBSWJDLGtCQUFZO0FBQ1ZELG9DQURVO0FBRVZFLGVBRlUsbUJBRUZDLE1BRkUsRUFFTTtBQUNkLGlCQUFPQSxPQUFPYixLQUFkO0FBQ0Q7QUFKUyxPQUpDO0FBVWJKLGtCQUFZO0FBQ1ZjO0FBRFUsT0FWQztBQWFiYixpQkFBVztBQUNUYTtBQURTLE9BYkU7QUFnQmJ2QixlQUFTO0FBQ1B1QjtBQURPO0FBaEJJLEtBQVA7QUFBQTtBQUg2QixDQUF0QixDO2tCQTNDRXpCLFciLCJmaWxlIjoiRXJyb3JPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDIvMDUvMTcuXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgRXJyb3JDb2RlcyBmcm9tICcuL0Vycm9yQ29kZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvck9iamVjdCBleHRlbmRzIEVycm9yIHtcbiAgZXJyb3JDb2RlOiBzdHJpbmc7XG4gIGVycm9yRmllbGQ6IHN0cmluZ3x2b2lkO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGVycm9yRGF0YTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuICAgIHN1cGVyKGRhdGEubWVzc2FnZSk7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IEVycm9yT2JqZWN0OyAvLyBOYXN0eSBmaXggZm9yIEJhYmVsIEJ1ZyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzQ0ODUjaXNzdWVjb21tZW50LTMxNTU2OTg5MlxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cbiAgICB0aGlzLl9fcHJvdG9fXyA9IEVycm9yT2JqZWN0LnByb3RvdHlwZTsgLy8gTmFzdHkgZml4IGZvciBCYWJlbCBCdWcgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy80NDg1I2lzc3VlY29tbWVudC0zMTU1Njk4OTJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFcnJvck9iamVjdCk7XG5cblxuICAgIHRoaXMuZXJyb3JDb2RlID0gZGF0YS5lcnJvckNvZGUgfHwgRXJyb3JDb2Rlcy5JbnRlcm5hbFNlcnZlckVycm9yO1xuICAgIHRoaXMuZXJyb3JGaWVsZCA9IGRhdGEuZXJyb3JGaWVsZCB8fCAnJztcbiAgICB0aGlzLmVycm9yRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuZXJyb3JEYXRhKSB8fCAnJztcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2UgfHwgdGhpcy5zdGFjayB8fCBkYXRhLmVycm9yQ29kZTtcblxuICAgIGlmIChFcnJvckNvZGVzLl92YWx1ZVRvS2V5KGRhdGEuZXJyb3JDb2RlKSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yT2JqZWN0IC0tIFdhcm5pbmc6IEVycm9yQ29kZSBcIiR7ZGF0YS5lcnJvckNvZGV9XCIgbm90IGluIGxpc3Qgb2YgZXJyb3IgY29kZXMhYCk7XG4gICAgfVxuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IG1lID0gYEVycm9yT2JqZWN0KCR7dGhpcy5lcnJvckNvZGV9KTogJHt0aGlzLm1lc3NhZ2V9KWA7XG5cbiAgICBpZiAodGhpcy5lcnJvckZpZWxkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5lcnJvckZpZWxkICE9PSBudWxsKSB7XG4gICAgICBtZSArPSBgb24gZmllbGQgJHt0aGlzLmVycm9yRmllbGR9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGFjayAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhY2sgIT09IG51bGwpIHtcbiAgICAgIG1lICs9IGBcXG5TdGFja1RyYWNlOiAke3RoaXMuc3RhY2t9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWU7XG4gIH1cblxuICBzdGF0aWMgR3JhcGhRTCA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZTogJ0Vycm9yT2JqZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FuIG9iamVjdCBjb250YWluaW5nIHRoZSBlcnJvciBkYXRhJyxcbiAgICBmaWVsZHM6ICgpID0+ICh7XG4gICAgICBlcnJvckNvZGU6IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBzdGFja1RyYWNlOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgIHJlc29sdmUocGFyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5zdGFjaztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBlcnJvckZpZWxkOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgICAgZXJyb3JEYXRhOiB7XG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSk7XG59XG4iXX0=