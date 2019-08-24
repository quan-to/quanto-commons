/**
 * Created by Lucas Teske on 22/05/18.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCallerFilename = getCallerFilename;
exports.getLocaleNowTime = getLocaleNowTime;
exports.getLocaleNowDate = getLocaleNowDate;
exports.getUTCNow = getUTCNow;

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _format = require('./format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCallerFilename(level) {
  var lvl = level || 2;
  var _ = Error.prepareStackTrace;
  Error.prepareStackTrace = function (error, stack) {
    return stack;
  };

  var _ref = new Error(),
      stack = _ref.stack;

  Error.prepareStackTrace = _;

  var callers = stack.map(function (x) {
    return (0, _format.basename)(x.getFileName());
  });
  var callerI = callers;

  var _loop = function _loop(i) {
    callerI = callerI.filter(function (x) {
      return x !== callers[i];
    });
  };

  for (var i = 0; i < lvl; i++) {
    _loop(i);
  }
  return callerI[0];
}

function getLocaleNowTime() {
  return new Date().toLocaleTimeString();
}

function getLocaleNowDate() {
  return new Date().toLocaleDateString();
}

function getUTCNow() {
  return (0, _dayjs2.default)(new Date().toISOString().substr(0, 23)).format('YYYYMMDD-HHmmss');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tYW5hZ2VUb29scy5qcyJdLCJuYW1lcyI6WyJnZXRDYWxsZXJGaWxlbmFtZSIsImdldExvY2FsZU5vd1RpbWUiLCJnZXRMb2NhbGVOb3dEYXRlIiwiZ2V0VVRDTm93IiwibGV2ZWwiLCJsdmwiLCJfIiwiRXJyb3IiLCJwcmVwYXJlU3RhY2tUcmFjZSIsImVycm9yIiwic3RhY2siLCJjYWxsZXJzIiwibWFwIiwieCIsImdldEZpbGVOYW1lIiwiY2FsbGVySSIsImkiLCJmaWx0ZXIiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxpQixHQUFBQSxpQjtRQWVBQyxnQixHQUFBQSxnQjtRQUlBQyxnQixHQUFBQSxnQjtRQUlBQyxTLEdBQUFBLFM7O0FBM0JoQjs7OztBQUVBOzs7O0FBUEE7Ozs7O0FBU08sU0FBU0gsaUJBQVQsQ0FBMkJJLEtBQTNCLEVBQWtDO0FBQ3ZDLE1BQU1DLE1BQU1ELFNBQVMsQ0FBckI7QUFDQSxNQUFNRSxJQUFJQyxNQUFNQyxpQkFBaEI7QUFDQUQsUUFBTUMsaUJBQU4sR0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FBa0JBLEtBQWxCO0FBQUEsR0FBMUI7O0FBSHVDLGFBSXJCLElBQUlILEtBQUosRUFKcUI7QUFBQSxNQUkvQkcsS0FKK0IsUUFJL0JBLEtBSitCOztBQUt2Q0gsUUFBTUMsaUJBQU4sR0FBMEJGLENBQTFCOztBQUVBLE1BQU1LLFVBQVVELE1BQU1FLEdBQU4sQ0FBVTtBQUFBLFdBQUssc0JBQVNDLEVBQUVDLFdBQUYsRUFBVCxDQUFMO0FBQUEsR0FBVixDQUFoQjtBQUNBLE1BQUlDLFVBQVVKLE9BQWQ7O0FBUnVDLDZCQVM5QkssQ0FUOEI7QUFVckNELGNBQVVBLFFBQVFFLE1BQVIsQ0FBZTtBQUFBLGFBQUtKLE1BQU1GLFFBQVFLLENBQVIsQ0FBWDtBQUFBLEtBQWYsQ0FBVjtBQVZxQzs7QUFTdkMsT0FBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUlYLEdBQXBCLEVBQXlCVyxHQUF6QixFQUE4QjtBQUFBLFVBQXJCQSxDQUFxQjtBQUU3QjtBQUNELFNBQU9ELFFBQVEsQ0FBUixDQUFQO0FBQ0Q7O0FBRU0sU0FBU2QsZ0JBQVQsR0FBNEI7QUFDakMsU0FBTyxJQUFJaUIsSUFBSixHQUFXQyxrQkFBWCxFQUFQO0FBQ0Q7O0FBRU0sU0FBU2pCLGdCQUFULEdBQTRCO0FBQ2pDLFNBQU8sSUFBSWdCLElBQUosR0FBV0Usa0JBQVgsRUFBUDtBQUNEOztBQUVNLFNBQVNqQixTQUFULEdBQXFCO0FBQzFCLFNBQU8scUJBQU0sSUFBSWUsSUFBSixHQUFXRyxXQUFYLEdBQXlCQyxNQUF6QixDQUFnQyxDQUFoQyxFQUFtQyxFQUFuQyxDQUFOLEVBQThDQyxNQUE5QyxDQUFxRCxpQkFBckQsQ0FBUDtBQUNEIiwiZmlsZSI6Im1hbmFnZVRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDIyLzA1LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJy4vZm9ybWF0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGxlckZpbGVuYW1lKGxldmVsKSB7XG4gIGNvbnN0IGx2bCA9IGxldmVsIHx8IDI7XG4gIGNvbnN0IF8gPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtcbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSAoZXJyb3IsIHN0YWNrKSA9PiBzdGFjaztcbiAgY29uc3QgeyBzdGFjayB9ID0gbmV3IEVycm9yKCk7XG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gXztcblxuICBjb25zdCBjYWxsZXJzID0gc3RhY2subWFwKHggPT4gYmFzZW5hbWUoeC5nZXRGaWxlTmFtZSgpKSk7XG4gIGxldCBjYWxsZXJJID0gY2FsbGVycztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsdmw7IGkrKykge1xuICAgIGNhbGxlckkgPSBjYWxsZXJJLmZpbHRlcih4ID0+IHggIT09IGNhbGxlcnNbaV0pO1xuICB9XG4gIHJldHVybiBjYWxsZXJJWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlTm93VGltZSgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVOb3dEYXRlKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVUQ05vdygpIHtcbiAgcmV0dXJuIGRheWpzKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMjMpKS5mb3JtYXQoJ1lZWVlNTURELUhIbW1zcycpO1xufVxuIl19