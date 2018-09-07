'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateHex = exports.uint8arr2hex = exports.isInteger = exports.isFinite = undefined;

require('../../tools');

var isFinite = exports.isFinite = function isFinite(value) {
  return typeof value === 'number' && isFinite(value);
}; /**
    * Created by Lucas Teske on 07/09/18.
    * 
    */

var isInteger = exports.isInteger = function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};
var uint8arr2hex = exports.uint8arr2hex = function uint8arr2hex(u8arr) {
  return Array.from(u8arr).map(function (v) {
    return v.toString(16).padLeft(2, '0');
  });
};
var validateHex = exports.validateHex = /[0-9A-Fa-f]{6}/g;

exports.default = {
  isFinite: isFinite,
  isInteger: isInteger,
  uint8arr2hex: uint8arr2hex,
  validateHex: validateHex
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvR1FMVHlwZXMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJpc0Zpbml0ZSIsInZhbHVlIiwiaXNJbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwidWludDhhcnIyaGV4IiwiQXJyYXkiLCJmcm9tIiwidThhcnIiLCJtYXAiLCJ2IiwidG9TdHJpbmciLCJwYWRMZWZ0IiwidmFsaWRhdGVIZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsU0FBUyxPQUFPQyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCRCxTQUFTQyxLQUFULENBQXRDO0FBQUEsQ0FBakIsQyxDQVBQOzs7OztBQVFPLElBQU1DLGdDQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFVLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsSUFBNkJELFNBQVNDLEtBQVQsQ0FBN0IsSUFBZ0RFLEtBQUtDLEtBQUwsQ0FBV0gsS0FBWCxNQUFzQkEsS0FBaEY7QUFBQSxDQUFsQjtBQUNBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFTQyxNQUFNQyxJQUFOLENBQVdDLEtBQVgsRUFBa0JDLEdBQWxCLENBQXNCO0FBQUEsV0FBS0MsRUFBRUMsUUFBRixDQUFXLEVBQVgsRUFBZUMsT0FBZixDQUF1QixDQUF2QixFQUEwQixHQUExQixDQUFMO0FBQUEsR0FBdEIsQ0FBVDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsb0NBQWMsaUJBQXBCOztrQkFFUTtBQUNiYixvQkFEYTtBQUViRSxzQkFGYTtBQUdiRyw0QkFIYTtBQUliUTtBQUphLEMiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAwNy8wOS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0ICcuLi8uLi90b29scyc7XG5cbmV4cG9ydCBjb25zdCBpc0Zpbml0ZSA9IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUpO1xuZXhwb3J0IGNvbnN0IHVpbnQ4YXJyMmhleCA9IHU4YXJyID0+IEFycmF5LmZyb20odThhcnIpLm1hcCh2ID0+IHYudG9TdHJpbmcoMTYpLnBhZExlZnQoMiwgJzAnKSk7XG5leHBvcnQgY29uc3QgdmFsaWRhdGVIZXggPSAvWzAtOUEtRmEtZl17Nn0vZztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Zpbml0ZSxcbiAgaXNJbnRlZ2VyLFxuICB1aW50OGFycjJoZXgsXG4gIHZhbGlkYXRlSGV4LFxufTtcbiJdfQ==