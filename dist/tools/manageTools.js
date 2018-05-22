'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCallerFilename = getCallerFilename;
exports.getLocaleNowTime = getLocaleNowTime;
exports.getLocaleNowDate = getLocaleNowDate;
exports.getLocaleNow = getLocaleNow;

var _format = require('./format');

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
} /**
   * Created by Lucas Teske on 22/05/18.
   * 
   */

function getLocaleNowTime() {
  return new Date().toLocaleTimeString();
}

function getLocaleNowDate() {
  return new Date().toLocaleDateString();
}

function getLocaleNow() {
  return new Date().toLocaleString();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tYW5hZ2VUb29scy5qcyJdLCJuYW1lcyI6WyJnZXRDYWxsZXJGaWxlbmFtZSIsImdldExvY2FsZU5vd1RpbWUiLCJnZXRMb2NhbGVOb3dEYXRlIiwiZ2V0TG9jYWxlTm93IiwibGV2ZWwiLCJsdmwiLCJfIiwiRXJyb3IiLCJwcmVwYXJlU3RhY2tUcmFjZSIsImVycm9yIiwic3RhY2siLCJjYWxsZXJzIiwibWFwIiwieCIsImdldEZpbGVOYW1lIiwiY2FsbGVySSIsImkiLCJmaWx0ZXIiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7O1FBT2dCQSxpQixHQUFBQSxpQjtRQWVBQyxnQixHQUFBQSxnQjtRQUlBQyxnQixHQUFBQSxnQjtRQUlBQyxZLEdBQUFBLFk7O0FBekJoQjs7QUFFTyxTQUFTSCxpQkFBVCxDQUEyQkksS0FBM0IsRUFBa0M7QUFDdkMsTUFBTUMsTUFBTUQsU0FBUyxDQUFyQjtBQUNBLE1BQU1FLElBQUlDLE1BQU1DLGlCQUFoQjtBQUNBRCxRQUFNQyxpQkFBTixHQUEwQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUFrQkEsS0FBbEI7QUFBQSxHQUExQjs7QUFIdUMsYUFJckIsSUFBSUgsS0FBSixFQUpxQjtBQUFBLE1BSS9CRyxLQUorQixRQUkvQkEsS0FKK0I7O0FBS3ZDSCxRQUFNQyxpQkFBTixHQUEwQkYsQ0FBMUI7O0FBRUEsTUFBTUssVUFBVUQsTUFBTUUsR0FBTixDQUFVO0FBQUEsV0FBSyxzQkFBU0MsRUFBRUMsV0FBRixFQUFULENBQUw7QUFBQSxHQUFWLENBQWhCO0FBQ0EsTUFBSUMsVUFBVUosT0FBZDs7QUFSdUMsNkJBUzlCSyxDQVQ4QjtBQVVyQ0QsY0FBVUEsUUFBUUUsTUFBUixDQUFlO0FBQUEsYUFBS0osTUFBTUYsUUFBUUssQ0FBUixDQUFYO0FBQUEsS0FBZixDQUFWO0FBVnFDOztBQVN2QyxPQUFLLElBQUlBLElBQUksQ0FBYixFQUFnQkEsSUFBSVgsR0FBcEIsRUFBeUJXLEdBQXpCLEVBQThCO0FBQUEsVUFBckJBLENBQXFCO0FBRTdCO0FBQ0QsU0FBT0QsUUFBUSxDQUFSLENBQVA7QUFDRCxDLENBcEJEOzs7OztBQXNCTyxTQUFTZCxnQkFBVCxHQUE0QjtBQUNqQyxTQUFPLElBQUlpQixJQUFKLEdBQVdDLGtCQUFYLEVBQVA7QUFDRDs7QUFFTSxTQUFTakIsZ0JBQVQsR0FBNEI7QUFDakMsU0FBTyxJQUFJZ0IsSUFBSixHQUFXRSxrQkFBWCxFQUFQO0FBQ0Q7O0FBRU0sU0FBU2pCLFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxJQUFJZSxJQUFKLEdBQVdHLGNBQVgsRUFBUDtBQUNEIiwiZmlsZSI6Im1hbmFnZVRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDIyLzA1LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJy4vZm9ybWF0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGxlckZpbGVuYW1lKGxldmVsKSB7XG4gIGNvbnN0IGx2bCA9IGxldmVsIHx8IDI7XG4gIGNvbnN0IF8gPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtcbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSAoZXJyb3IsIHN0YWNrKSA9PiBzdGFjaztcbiAgY29uc3QgeyBzdGFjayB9ID0gbmV3IEVycm9yKCk7XG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gXztcblxuICBjb25zdCBjYWxsZXJzID0gc3RhY2subWFwKHggPT4gYmFzZW5hbWUoeC5nZXRGaWxlTmFtZSgpKSk7XG4gIGxldCBjYWxsZXJJID0gY2FsbGVycztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsdmw7IGkrKykge1xuICAgIGNhbGxlckkgPSBjYWxsZXJJLmZpbHRlcih4ID0+IHggIT09IGNhbGxlcnNbaV0pO1xuICB9XG4gIHJldHVybiBjYWxsZXJJWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlTm93VGltZSgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVOb3dEYXRlKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZU5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbn1cbiJdfQ==