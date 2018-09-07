'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateHex = exports.uint8arr2hex = exports.isInteger = exports.isFinite = undefined;

require('../../tools');

var isFinite = exports.isFinite = function isFinite(value) {
  return typeof value === 'number' && Number.isFinite(value);
}; /**
    * Created by Lucas Teske on 07/09/18.
    * 
    */

var isInteger = exports.isInteger = function isInteger(value) {
  return typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value;
};
var uint8arr2hex = exports.uint8arr2hex = function uint8arr2hex(u8arr) {
  return Array.from(u8arr).map(function (v) {
    return v.toString(16).padLeft(2, '0');
  });
};
var validateHex = exports.validateHex = /^[0-9A-Fa-f]+$/;

exports.default = {
  isFinite: isFinite,
  isInteger: isInteger,
  uint8arr2hex: uint8arr2hex,
  validateHex: validateHex
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvR1FMVHlwZXMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJpc0Zpbml0ZSIsInZhbHVlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwidWludDhhcnIyaGV4IiwiQXJyYXkiLCJmcm9tIiwidThhcnIiLCJtYXAiLCJ2IiwidG9TdHJpbmciLCJwYWRMZWZ0IiwidmFsaWRhdGVIZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsU0FBUyxPQUFPQyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQyxPQUFPRixRQUFQLENBQWdCQyxLQUFoQixDQUF0QztBQUFBLENBQWpCLEMsQ0FQUDs7Ozs7QUFRTyxJQUFNRSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBVSxPQUFPRixLQUFQLEtBQWlCLFFBQWpCLElBQTZCQyxPQUFPRixRQUFQLENBQWdCQyxLQUFoQixDQUE3QixJQUF1REcsS0FBS0MsS0FBTCxDQUFXSixLQUFYLE1BQXNCQSxLQUF2RjtBQUFBLENBQWxCO0FBQ0EsSUFBTUssc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0MsS0FBWCxFQUFrQkMsR0FBbEIsQ0FBc0I7QUFBQSxXQUFLQyxFQUFFQyxRQUFGLENBQVcsRUFBWCxFQUFlQyxPQUFmLENBQXVCLENBQXZCLEVBQTBCLEdBQTFCLENBQUw7QUFBQSxHQUF0QixDQUFUO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxvQ0FBYyxnQkFBcEI7O2tCQUVRO0FBQ2JkLG9CQURhO0FBRWJHLHNCQUZhO0FBR2JHLDRCQUhhO0FBSWJRO0FBSmEsQyIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDA3LzA5LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgJy4uLy4uL3Rvb2xzJztcblxuZXhwb3J0IGNvbnN0IGlzRmluaXRlID0gdmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlKTtcbmV4cG9ydCBjb25zdCB1aW50OGFycjJoZXggPSB1OGFyciA9PiBBcnJheS5mcm9tKHU4YXJyKS5tYXAodiA9PiB2LnRvU3RyaW5nKDE2KS5wYWRMZWZ0KDIsICcwJykpO1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlSGV4ID0gL15bMC05QS1GYS1mXSskLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Zpbml0ZSxcbiAgaXNJbnRlZ2VyLFxuICB1aW50OGFycjJoZXgsXG4gIHZhbGlkYXRlSGV4LFxufTtcbiJdfQ==