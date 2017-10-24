'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Lucas Teske on 02/05/17.
                                                                                                                                                                                                                                                                               */

var _validation = require('./validation');

var _removeDiactrics = require('./removeDiactrics');

var _removeDiactrics2 = _interopRequireDefault(_removeDiactrics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var maskStartRegExp = /^([^#ANX]+)/;
/**
 * Simple format function borrowed from PureMask.js
 * {@link https://github.com/romulobrasil/PureMask.js}
 *
 * @param {String} data String to mask (input value)
 * @param {String} [mask] Mask format, like `####-##`
 * @returns {string} Formatted text
 */
var format = function format(data, mask) {
  if (!(typeof data === 'string')) {
    throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(data));
  }

  if (!(typeof mask === 'string')) {
    throw new TypeError('Value of argument "mask" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(mask));
  }

  // don't do anything if mask is undefined/null/etc
  if ((0, _validation.undefinedOrNull)(mask) || typeof mask !== "string") {
    return data;
  }

  if (data.length === 1 && maskStartRegExp.test(mask)) {
    data = maskStartRegExp.exec(mask)[0] + data;
  }

  var text = '';

  // Adds a char offset to allow testing on optional values
  var cOffset = 0;

  // Cleans data to  avoid value loss on dynamic mask changing
  for (var i = 0; i < mask.length; i++) {
    var m = mask.charAt(i);
    switch (m) {
      case '#':
        break;
      case 'A':
        break;
      case '?':
        break;
      case 'N':
        break;
      case 'X':
        break;
      default:
        data = data.replace(m, '');
    }
  }

  for (var _i = 0, x = 1; x && _i < mask.length; ++_i) {
    var c = data.charAt(_i - cOffset);
    var _m = mask.charAt(_i);

    switch (_m) {
      case '#':
        if (/\d/.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      case 'A':
        if (/[a-z]/i.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      case 'N':
        if (/[a-z0-9]/i.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      case '?':
        cOffset++;break;
      case 'X':
        text += c;break;
      default:
        text += _m;
        if (c && c !== _m) {
          data = ' ' + data;
        }
        break;
    }
  }
  return text;
};

/**
 * Formats an number given the mask.
 * @param strFormat [mask] Mask format, like `####-##`
 * @returns {string}
 */
Number.prototype.format = function (strFormat) {
  return format(this.toString(), strFormat);
};

/**
 * Formats a string given mask
 * @param strFormat [mask] Mask format, like `####-##`
 * @returns {string}
 */
String.prototype.format = function (strFormat) {
  return format(this, strFormat);
};

/**
 * Normalize the string by removing non ASCII chars
 */
String.prototype.removeDiactrics = function () {
  return (0, _removeDiactrics2.default)(this);
};

/**
 * Converts the integer to a formatted money string like: 123456789.541 to 123.456.789,54
 * @param decimals Number of decimal numbers (optional, default 2)
 * @param decimalSeparator Decimal Separator character (optional, default ',')
 * @param separator Mils Separator Character (optional, default '.')
 * @returns {string} Formatted money string
 */
Number.prototype.toMoney = function (decimals, decimalSeparator, separator) {
  var c = isNaN(Math.abs(decimals)) ? 2 : Math.abs(decimals);
  var d = (0, _validation.undefinedOrNull)(decimalSeparator) ? "," : decimalSeparator;
  var t = (0, _validation.undefinedOrNull)(separator) ? "." : separator;

  var s = this < 0 ? "-" : "";
  var iN = parseInt(Math.abs(Number(this) || 0).toFixed(c));
  console.log(this, s);
  var i = String(iN);
  var j = i.length > 3 ? i.length % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(Math.abs(this) - iN).toFixed(c).slice(2) : "");
};

/**
 * Left Pads a number with representing character.
 * @param n the number
 * @param chr the representing character, defaults to '0'
 * @returns {string}
 */
Number.prototype.padLeft = function (n, chr) {
  return (this < 0 ? '-' : '') + new Array(n - String(Math.abs(this)).length + 1).join(chr || '0') + Math.abs(this);
};

exports.default = format;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9mb3JtYXQuanMiXSwibmFtZXMiOlsibWFza1N0YXJ0UmVnRXhwIiwiZm9ybWF0IiwiZGF0YSIsIm1hc2siLCJsZW5ndGgiLCJ0ZXN0IiwiZXhlYyIsInRleHQiLCJjT2Zmc2V0IiwiaSIsIm0iLCJjaGFyQXQiLCJyZXBsYWNlIiwieCIsImMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJzdHJGb3JtYXQiLCJ0b1N0cmluZyIsIlN0cmluZyIsInJlbW92ZURpYWN0cmljcyIsInRvTW9uZXkiLCJkZWNpbWFscyIsImRlY2ltYWxTZXBhcmF0b3IiLCJzZXBhcmF0b3IiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJkIiwidCIsInMiLCJpTiIsInBhcnNlSW50IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwYWRMZWZ0IiwibiIsImNociIsIkFycmF5Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzhRQUFBOzs7O0FBSUE7O0FBSUE7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixhQUF4QjtBQUNBOzs7Ozs7OztBQVFBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQWVDLElBQWYsRUFBZ0M7QUFBQSxlQUEvQkQsSUFBK0I7QUFBQSxnSEFBL0JBLElBQStCO0FBQUE7O0FBQUEsZUFBakJDLElBQWlCO0FBQUEsZ0hBQWpCQSxJQUFpQjtBQUFBOztBQUM3QztBQUNBLE1BQUcsaUNBQWdCQSxJQUFoQixLQUF5QixPQUFPQSxJQUFQLEtBQWdCLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELElBQVA7QUFDRDs7QUFFRCxNQUFJQSxLQUFLRSxNQUFMLEtBQWdCLENBQWhCLElBQXFCSixnQkFBZ0JLLElBQWhCLENBQXFCRixJQUFyQixDQUF6QixFQUFxRDtBQUNuREQsV0FBT0YsZ0JBQWdCTSxJQUFoQixDQUFxQkgsSUFBckIsRUFBMkIsQ0FBM0IsSUFBZ0NELElBQXZDO0FBQ0Q7O0FBRUQsTUFB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bnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICovXG5cbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxuaW1wb3J0IHJlbW92ZURpYWN0cmljcyBmcm9tICcuL3JlbW92ZURpYWN0cmljcyc7XG5cbmNvbnN0IG1hc2tTdGFydFJlZ0V4cCA9IC9eKFteI0FOWF0rKS87XG4vKipcbiAqIFNpbXBsZSBmb3JtYXQgZnVuY3Rpb24gYm9ycm93ZWQgZnJvbSBQdXJlTWFzay5qc1xuICoge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9yb211bG9icmFzaWwvUHVyZU1hc2suanN9XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgU3RyaW5nIHRvIG1hc2sgKGlucHV0IHZhbHVlKVxuICogQHBhcmFtIHtTdHJpbmd9IFttYXNrXSBNYXNrIGZvcm1hdCwgbGlrZSBgIyMjIy0jI2BcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCB0ZXh0XG4gKi9cbmNvbnN0IGZvcm1hdCA9IChkYXRhOiBzdHJpbmcsIG1hc2s6IHN0cmluZykgPT4ge1xuICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBtYXNrIGlzIHVuZGVmaW5lZC9udWxsL2V0Y1xuICBpZih1bmRlZmluZWRPck51bGwobWFzaykgfHwgdHlwZW9mIG1hc2sgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMSAmJiBtYXNrU3RhcnRSZWdFeHAudGVzdChtYXNrKSkge1xuICAgIGRhdGEgPSBtYXNrU3RhcnRSZWdFeHAuZXhlYyhtYXNrKVswXSArIGRhdGE7XG4gIH1cblxuICBsZXQgdGV4dCA9ICcnO1xuXG4gIC8vIEFkZHMgYSBjaGFyIG9mZnNldCB0byBhbGxvdyB0ZXN0aW5nIG9uIG9wdGlvbmFsIHZhbHVlc1xuICBsZXQgY09mZnNldCA9IDA7XG5cbiAgLy8gQ2xlYW5zIGRhdGEgdG8gIGF2b2lkIHZhbHVlIGxvc3Mgb24gZHluYW1pYyBtYXNrIGNoYW5naW5nXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGxldCBtID0gbWFzay5jaGFyQXQoaSk7XG4gICAgc3dpdGNoKG0pIHtcbiAgICAgIGNhc2UgJyMnIDogYnJlYWs7XG4gICAgICBjYXNlICdBJyA6IGJyZWFrO1xuICAgICAgY2FzZSAnPycgOiBicmVhaztcbiAgICAgIGNhc2UgJ04nIDogYnJlYWs7XG4gICAgICBjYXNlICdYJyA6IGJyZWFrO1xuICAgICAgZGVmYXVsdCA6IGRhdGEgPSBkYXRhLnJlcGxhY2UobSwgJycpXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIHggPSAxOyB4ICYmIGkgPCBtYXNrLmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IGMgPSBkYXRhLmNoYXJBdChpIC0gY09mZnNldCk7XG4gICAgbGV0IG0gPSBtYXNrLmNoYXJBdChpKTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAnIycgOiBpZiAoL1xcZC8udGVzdChjKSkgICAgICAgIHsgdGV4dCArPSBjIH0gZWxzZSB7IHggPSAwIH0gYnJlYWs7XG4gICAgICBjYXNlICdBJyA6IGlmICgvW2Etel0vaS50ZXN0KGMpKSAgICB7IHRleHQgKz0gYyB9IGVsc2UgeyB4ID0gMCB9IGJyZWFrO1xuICAgICAgY2FzZSAnTicgOiBpZiAoL1thLXowLTldL2kudGVzdChjKSkgeyB0ZXh0ICs9IGMgfSBlbHNlIHsgeCA9IDAgfSBicmVhaztcbiAgICAgIGNhc2UgJz8nIDogY09mZnNldCsrOyBicmVhaztcbiAgICAgIGNhc2UgJ1gnIDogdGV4dCArPSBjOyBicmVhaztcbiAgICAgIGRlZmF1bHQgIDpcbiAgICAgICAgdGV4dCArPSBtO1xuICAgICAgICBpZiAoYyAmJiBjICE9PSBtKSB7XG4gICAgICAgICAgZGF0YSA9ICcgJyArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIG51bWJlciBnaXZlbiB0aGUgbWFzay5cbiAqIEBwYXJhbSBzdHJGb3JtYXQgW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTnVtYmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoc3RyRm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQodGhpcy50b1N0cmluZygpLCBzdHJGb3JtYXQpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGEgc3RyaW5nIGdpdmVuIG1hc2tcbiAqIEBwYXJhbSBzdHJGb3JtYXQgW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoc3RyRm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQodGhpcywgc3RyRm9ybWF0KTtcbn07XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgYnkgcmVtb3Zpbmcgbm9uIEFTQ0lJIGNoYXJzXG4gKi9cblN0cmluZy5wcm90b3R5cGUucmVtb3ZlRGlhY3RyaWNzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcmVtb3ZlRGlhY3RyaWNzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZWdlciB0byBhIGZvcm1hdHRlZCBtb25leSBzdHJpbmcgbGlrZTogMTIzNDU2Nzg5LjU0MSB0byAxMjMuNDU2Ljc4OSw1NFxuICogQHBhcmFtIGRlY2ltYWxzIE51bWJlciBvZiBkZWNpbWFsIG51bWJlcnMgKG9wdGlvbmFsLCBkZWZhdWx0IDIpXG4gKiBAcGFyYW0gZGVjaW1hbFNlcGFyYXRvciBEZWNpbWFsIFNlcGFyYXRvciBjaGFyYWN0ZXIgKG9wdGlvbmFsLCBkZWZhdWx0ICcsJylcbiAqIEBwYXJhbSBzZXBhcmF0b3IgTWlscyBTZXBhcmF0b3IgQ2hhcmFjdGVyIChvcHRpb25hbCwgZGVmYXVsdCAnLicpXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgbW9uZXkgc3RyaW5nXG4gKi9cbk51bWJlci5wcm90b3R5cGUudG9Nb25leSA9IGZ1bmN0aW9uIChkZWNpbWFscywgZGVjaW1hbFNlcGFyYXRvciwgc2VwYXJhdG9yKSB7XG4gIGNvbnN0IGMgPSBpc05hTihNYXRoLmFicyhkZWNpbWFscykpID8gMiA6IE1hdGguYWJzKGRlY2ltYWxzKTtcbiAgY29uc3QgZCA9IHVuZGVmaW5lZE9yTnVsbChkZWNpbWFsU2VwYXJhdG9yKSA/IFwiLFwiIDogZGVjaW1hbFNlcGFyYXRvcjtcbiAgY29uc3QgdCA9IHVuZGVmaW5lZE9yTnVsbChzZXBhcmF0b3IpID8gXCIuXCIgOiBzZXBhcmF0b3I7XG5cbiAgY29uc3QgcyA9IHRoaXMgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBpTiA9IHBhcnNlSW50KE1hdGguYWJzKE51bWJlcih0aGlzKSB8fCAwKS50b0ZpeGVkKGMpKTtcbiAgY29uc29sZS5sb2codGhpcywgcyk7XG4gIGNvbnN0IGkgPSBTdHJpbmcoaU4pO1xuICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcbiAgcmV0dXJuIHMgK1xuICAgIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgK1xuICAgIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArXG4gICAgKGMgPyBkICsgTWF0aC5hYnMoTWF0aC5hYnModGhpcykgLSBpTikudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xufTtcblxuLyoqXG4gKiBMZWZ0IFBhZHMgYSBudW1iZXIgd2l0aCByZXByZXNlbnRpbmcgY2hhcmFjdGVyLlxuICogQHBhcmFtIG4gdGhlIG51bWJlclxuICogQHBhcmFtIGNociB0aGUgcmVwcmVzZW50aW5nIGNoYXJhY3RlciwgZGVmYXVsdHMgdG8gJzAnXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5OdW1iZXIucHJvdG90eXBlLnBhZExlZnQgPSBmdW5jdGlvbiAobiwgY2hyKSB7XG4gIHJldHVybiAodGhpcyA8IDAgPyAnLScgOiAnJykgKyBuZXcgQXJyYXkobi1TdHJpbmcoTWF0aC5hYnModGhpcykpLmxlbmd0aCsxKSAuam9pbihjaHJ8fCcwJykgKyAoTWF0aC5hYnModGhpcykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0OyJdfQ==