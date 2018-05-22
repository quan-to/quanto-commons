'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCallerFilename = getCallerFilename;
exports.getLocaleNowTime = getLocaleNowTime;
exports.getLocaleNowDate = getLocaleNowDate;
exports.getLocaleNow = getLocaleNow;

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _format = require('./format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Lucas Teske on 22/05/18.
 * 
 */

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

function getLocaleNow() {
  return (0, _dayjs2.default)().format('YYYY-MM-DD HH:mm:ss ZZ');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tYW5hZ2VUb29scy5qcyJdLCJuYW1lcyI6WyJnZXRDYWxsZXJGaWxlbmFtZSIsImdldExvY2FsZU5vd1RpbWUiLCJnZXRMb2NhbGVOb3dEYXRlIiwiZ2V0TG9jYWxlTm93IiwibGV2ZWwiLCJsdmwiLCJfIiwiRXJyb3IiLCJwcmVwYXJlU3RhY2tUcmFjZSIsImVycm9yIiwic3RhY2siLCJjYWxsZXJzIiwibWFwIiwieCIsImdldEZpbGVOYW1lIiwiY2FsbGVySSIsImkiLCJmaWx0ZXIiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsaUIsR0FBQUEsaUI7UUFlQUMsZ0IsR0FBQUEsZ0I7UUFJQUMsZ0IsR0FBQUEsZ0I7UUFJQUMsWSxHQUFBQSxZOztBQTNCaEI7Ozs7QUFFQTs7OztBQVBBOzs7OztBQVNPLFNBQVNILGlCQUFULENBQTJCSSxLQUEzQixFQUFrQztBQUN2QyxNQUFNQyxNQUFNRCxTQUFTLENBQXJCO0FBQ0EsTUFBTUUsSUFBSUMsTUFBTUMsaUJBQWhCO0FBQ0FELFFBQU1DLGlCQUFOLEdBQTBCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQWtCQSxLQUFsQjtBQUFBLEdBQTFCOztBQUh1QyxhQUlyQixJQUFJSCxLQUFKLEVBSnFCO0FBQUEsTUFJL0JHLEtBSitCLFFBSS9CQSxLQUorQjs7QUFLdkNILFFBQU1DLGlCQUFOLEdBQTBCRixDQUExQjs7QUFFQSxNQUFNSyxVQUFVRCxNQUFNRSxHQUFOLENBQVU7QUFBQSxXQUFLLHNCQUFTQyxFQUFFQyxXQUFGLEVBQVQsQ0FBTDtBQUFBLEdBQVYsQ0FBaEI7QUFDQSxNQUFJQyxVQUFVSixPQUFkOztBQVJ1Qyw2QkFTOUJLLENBVDhCO0FBVXJDRCxjQUFVQSxRQUFRRSxNQUFSLENBQWU7QUFBQSxhQUFLSixNQUFNRixRQUFRSyxDQUFSLENBQVg7QUFBQSxLQUFmLENBQVY7QUFWcUM7O0FBU3ZDLE9BQUssSUFBSUEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJWCxHQUFwQixFQUF5QlcsR0FBekIsRUFBOEI7QUFBQSxVQUFyQkEsQ0FBcUI7QUFFN0I7QUFDRCxTQUFPRCxRQUFRLENBQVIsQ0FBUDtBQUNEOztBQUVNLFNBQVNkLGdCQUFULEdBQTRCO0FBQ2pDLFNBQU8sSUFBSWlCLElBQUosR0FBV0Msa0JBQVgsRUFBUDtBQUNEOztBQUVNLFNBQVNqQixnQkFBVCxHQUE0QjtBQUNqQyxTQUFPLElBQUlnQixJQUFKLEdBQVdFLGtCQUFYLEVBQVA7QUFDRDs7QUFFTSxTQUFTakIsWUFBVCxHQUF3QjtBQUM3QixTQUFPLHVCQUFRa0IsTUFBUixDQUFlLHdCQUFmLENBQVA7QUFDRCIsImZpbGUiOiJtYW5hZ2VUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcblxuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICcuL2Zvcm1hdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWxsZXJGaWxlbmFtZShsZXZlbCkge1xuICBjb25zdCBsdmwgPSBsZXZlbCB8fCAyO1xuICBjb25zdCBfID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7XG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gKGVycm9yLCBzdGFjaykgPT4gc3RhY2s7XG4gIGNvbnN0IHsgc3RhY2sgfSA9IG5ldyBFcnJvcigpO1xuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IF87XG5cbiAgY29uc3QgY2FsbGVycyA9IHN0YWNrLm1hcCh4ID0+IGJhc2VuYW1lKHguZ2V0RmlsZU5hbWUoKSkpO1xuICBsZXQgY2FsbGVySSA9IGNhbGxlcnM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbHZsOyBpKyspIHtcbiAgICBjYWxsZXJJID0gY2FsbGVySS5maWx0ZXIoeCA9PiB4ICE9PSBjYWxsZXJzW2ldKTtcbiAgfVxuICByZXR1cm4gY2FsbGVySVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZU5vd1RpbWUoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlTm93RGF0ZSgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVOb3coKSB7XG4gIHJldHVybiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcyBaWicpO1xufVxuIl19