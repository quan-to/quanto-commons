'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basename = exports.FormatValue = undefined;

var _validation = require('./validation');

var _removeDiactrics = require('./removeDiactrics');

var _removeDiactrics2 = _interopRequireDefault(_removeDiactrics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-extend-native,no-plusplus */
/**
 * Created by Lucas Teske on 02/05/17.
 */

var maskStartRegExp = /^([^#ANX]+)/;
/**
 * Simple format function borrowed from PureMask.js
 * {@link https://github.com/romulobrasil/PureMask.js}
 *
 * @param {String} str String to mask (input value)
 * @param {String} [mask] Mask format, like `####-##`
 * @returns {string} Formatted text
 */
var format = function format(str, mask) {
  var data = str;
  // don't do anything if mask is undefined/null/etc
  if ((0, _validation.undefinedOrNull)(mask) || typeof mask !== 'string') {
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
Number.prototype.format = function formatNumber(strFormat) {
  return format(this.toString(), strFormat);
};

/**
 * Formats a string given mask
 * @param strFormat [mask] Mask format, like `####-##`
 * @returns {string}
 */
String.prototype.format = function formatStr(strFormat) {
  return format(this, strFormat);
};

/**
 * Normalize the string by removing non ASCII chars
 */
String.prototype.removeDiactrics = function removeDiactricsStr() {
  return (0, _removeDiactrics2.default)(this);
};

/**
 * Converts the integer to a formatted money string like: 123456789.541 to 123.456.789,54
 * @param decimals Number of decimal numbers (optional, default 2)
 * @param decimalSeparator Decimal Separator character (optional, default ',')
 * @param separator Mils Separator Character (optional, default '.')
 * @returns {string} Formatted money string
 */
Number.prototype.toMoney = function toMoney(decimals, decimalSeparator, separator) {
  var c = Number.isNaN(Math.abs(decimals)) ? 2 : Math.abs(decimals);
  var d = (0, _validation.undefinedOrNull)(decimalSeparator) ? ',' : decimalSeparator;
  var t = (0, _validation.undefinedOrNull)(separator) ? '.' : separator;

  var s = this < 0 ? '-' : '';
  var iN = parseInt(Math.abs(Number(this) || 0).toFixed(c), 10);
  console.log(this, s);
  var i = String(iN);
  var j = i.length > 3 ? i.length % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(Math.abs(this) - iN).toFixed(c).slice(2) : '');
};

/**
 * Left Pads a number with representing character.
 * @param n the number
 * @param chr the representing character, defaults to '0'
 * @returns {string}
 */
Number.prototype.padLeft = function padLeft(n, chr) {
  return (this < 0 ? '-' : '') + new Array(n - String(Math.abs(this)).length + 1).join(chr || '0') + Math.abs(this);
};

/**
 * Left Pads a number with representing character.
 * @param n the number
 * @param chr the representing character, defaults to '0'
 * @returns {string}
 */
String.prototype.padLeft = String.prototype.padStart;

/**
 * Makes every first character of every word upper case.
 * @returns {string}
 */
String.prototype.titleCase = function titleCase() {
  return this.toLowerCase().split(' ').map(function (s) {
    return '' + s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
};

function basename(str, sep) {
  var bSep = sep || '\\/';
  return str.split(new RegExp('[' + bSep + ']')).pop();
}

var FormatValue = format;

exports.FormatValue = FormatValue;
exports.basename = basename;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9mb3JtYXQuanMiXSwibmFtZXMiOlsibWFza1N0YXJ0UmVnRXhwIiwiZm9ybWF0Iiwic3RyIiwibWFzayIsImRhdGEiLCJsZW5ndGgiLCJ0ZXN0IiwiZXhlYyIsInRleHQiLCJjT2Zmc2V0IiwiaSIsIm0iLCJjaGFyQXQiLCJyZXBsYWNlIiwieCIsImMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJmb3JtYXROdW1iZXIiLCJzdHJGb3JtYXQiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZvcm1hdFN0ciIsInJlbW92ZURpYWN0cmljcyIsInJlbW92ZURpYWN0cmljc1N0ciIsInRvTW9uZXkiLCJkZWNpbWFscyIsImRlY2ltYWxTZXBhcmF0b3IiLCJzZXBhcmF0b3IiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJkIiwidCIsInMiLCJpTiIsInBhcnNlSW50IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwYWRMZWZ0IiwibiIsImNociIsIkFycmF5Iiwiam9pbiIsInBhZFN0YXJ0IiwidGl0bGVDYXNlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIm1hcCIsInRvVXBwZXJDYXNlIiwiYmFzZW5hbWUiLCJzZXAiLCJiU2VwIiwiUmVnRXhwIiwicG9wIiwiRm9ybWF0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFJQTs7Ozs7O0FBVEE7QUFDQTs7OztBQVVBLElBQU1BLGtCQUFrQixhQUF4QjtBQUNBOzs7Ozs7OztBQVFBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQWNDLElBQWQsRUFBK0I7QUFDNUMsTUFBSUMsT0FBT0YsR0FBWDtBQUNBO0FBQ0EsTUFBSSxpQ0FBZ0JDLElBQWhCLEtBQXlCLE9BQU9BLElBQVAsS0FBZ0IsUUFBN0MsRUFBdUQ7QUFDckQsV0FBT0MsSUFBUDtBQUNEOztBQUVELE1BQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJMLGdCQUFn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QUosQ0FBV0YsSUFBSXZCLE9BQU9TLEtBQUtDLEdBQUwsQ0FBUyxJQUFULENBQVAsRUFBdUIxQixNQUE1QixHQUFzQyxDQUFoRCxFQUFtRDBDLElBQW5ELENBQXdERixPQUFPLEdBQS9ELENBQXhCLEdBQStGZixLQUFLQyxHQUFMLENBQVMsSUFBVCxDQUF0RztBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BVixPQUFPSixTQUFQLENBQWlCMEIsT0FBakIsR0FBMkJ0QixPQUFPSixTQUFQLENBQWlCK0IsUUFBNUM7O0FBRUE7Ozs7QUFJQTNCLE9BQU9KLFNBQVAsQ0FBaUJnQyxTQUFqQixHQUE2QixTQUFTQSxTQUFULEdBQXFCO0FBQ2hELFNBQU8sS0FBS0MsV0FBTCxHQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLEdBQTlCLENBQWtDO0FBQUEsZ0JBQVFsQixFQUFFdEIsTUFBRixDQUFTLENBQVQsRUFBWXlDLFdBQVosRUFBUixHQUFvQ25CLEVBQUVPLE1BQUYsQ0FBUyxDQUFULENBQXBDO0FBQUEsR0FBbEMsRUFBcUZNLElBQXJGLENBQTBGLEdBQTFGLENBQVA7QUFDRCxDQUZEOztBQUlBLFNBQVNPLFFBQVQsQ0FBa0JwRCxHQUFsQixFQUF1QnFELEdBQXZCLEVBQTRCO0FBQzFCLE1BQU1DLE9BQU9ELE9BQU8sS0FBcEI7QUFDQSxTQUFPckQsSUFBSWlELEtBQUosQ0FBVSxJQUFJTSxNQUFKLE9BQWVELElBQWYsT0FBVixFQUFtQ0UsR0FBbkMsRUFBUDtBQUNEOztBQUVELElBQU1DLGNBQWMxRCxNQUFwQjs7UUFHRTBELFcsR0FBQUEsVztRQUNBTCxRLEdBQUFBLFEiLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSxuby1wbHVzcGx1cyAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICovXG5cbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxuaW1wb3J0IHJlbW92ZURpYWN0cmljcyBmcm9tICcuL3JlbW92ZURpYWN0cmljcyc7XG5cbmNvbnN0IG1hc2tTdGFydFJlZ0V4cCA9IC9eKFteI0FOWF0rKS87XG4vKipcbiAqIFNpbXBsZSBmb3JtYXQgZnVuY3Rpb24gYm9ycm93ZWQgZnJvbSBQdXJlTWFzay5qc1xuICoge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9yb211bG9icmFzaWwvUHVyZU1hc2suanN9XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gbWFzayAoaW5wdXQgdmFsdWUpXG4gKiBAcGFyYW0ge1N0cmluZ30gW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ30gRm9ybWF0dGVkIHRleHRcbiAqL1xuY29uc3QgZm9ybWF0ID0gKHN0cjogc3RyaW5nLCBtYXNrOiBzdHJpbmcpID0+IHtcbiAgbGV0IGRhdGEgPSBzdHI7XG4gIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIG1hc2sgaXMgdW5kZWZpbmVkL251bGwvZXRjXG4gIGlmICh1bmRlZmluZWRPck51bGwobWFzaykgfHwgdHlwZW9mIG1hc2sgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5sZW5ndGggPT09IDEgJiYgbWFza1N0YXJ0UmVnRXhwLnRlc3QobWFzaykpIHtcbiAgICBkYXRhID0gbWFza1N0YXJ0UmVnRXhwLmV4ZWMobWFzaylbMF0gKyBkYXRhO1xuICB9XG5cbiAgbGV0IHRleHQgPSAnJztcblxuICAvLyBBZGRzIGEgY2hhciBvZmZzZXQgdG8gYWxsb3cgdGVzdGluZyBvbiBvcHRpb25hbCB2YWx1ZXNcbiAgbGV0IGNPZmZzZXQgPSAwO1xuXG4gIC8vIENsZWFucyBkYXRhIHRvICBhdm9pZCB2YWx1ZSBsb3NzIG9uIGR5bmFtaWMgbWFzayBjaGFuZ2luZ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtID0gbWFzay5jaGFyQXQoaSk7XG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlICcjJzogYnJlYWs7XG4gICAgICBjYXNlICdBJzogYnJlYWs7XG4gICAgICBjYXNlICc/JzogYnJlYWs7XG4gICAgICBjYXNlICdOJzogYnJlYWs7XG4gICAgICBjYXNlICdYJzogYnJlYWs7XG4gICAgICBkZWZhdWx0OiBkYXRhID0gZGF0YS5yZXBsYWNlKG0sICcnKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgeCA9IDE7IHggJiYgaSA8IG1hc2subGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBjID0gZGF0YS5jaGFyQXQoaSAtIGNPZmZzZXQpO1xuICAgIGNvbnN0IG0gPSBtYXNrLmNoYXJBdChpKTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAnIyc6IGlmICgvXFxkLy50ZXN0KGMpKSB7IHRleHQgKz0gYzsgfSBlbHNlIHsgeCA9IDA7IH0gYnJlYWs7XG4gICAgICBjYXNlICdBJzogaWYgKC9bYS16XS9pLnRlc3QoYykpIHsgdGV4dCArPSBjOyB9IGVsc2UgeyB4ID0gMDsgfSBicmVhaztcbiAgICAgIGNhc2UgJ04nOiBpZiAoL1thLXowLTldL2kudGVzdChjKSkgeyB0ZXh0ICs9IGM7IH0gZWxzZSB7IHggPSAwOyB9IGJyZWFrO1xuICAgICAgY2FzZSAnPyc6IGNPZmZzZXQrKzsgYnJlYWs7XG4gICAgICBjYXNlICdYJzogdGV4dCArPSBjOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRleHQgKz0gbTtcbiAgICAgICAgaWYgKGMgJiYgYyAhPT0gbSkge1xuICAgICAgICAgIGRhdGEgPSBgICR7ZGF0YX1gO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGV4dDtcbn07XG5cbi8qKlxuICogRm9ybWF0cyBhbiBudW1iZXIgZ2l2ZW4gdGhlIG1hc2suXG4gKiBAcGFyYW0gc3RyRm9ybWF0IFttYXNrXSBNYXNrIGZvcm1hdCwgbGlrZSBgIyMjIy0jI2BcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk51bWJlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0TnVtYmVyKHN0ckZvcm1hdCkge1xuICByZXR1cm4gZm9ybWF0KHRoaXMudG9TdHJpbmcoKSwgc3RyRm9ybWF0KTtcbn07XG5cbi8qKlxuICogRm9ybWF0cyBhIHN0cmluZyBnaXZlbiBtYXNrXG4gKiBAcGFyYW0gc3RyRm9ybWF0IFttYXNrXSBNYXNrIGZvcm1hdCwgbGlrZSBgIyMjIy0jI2BcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0U3RyKHN0ckZvcm1hdCkge1xuICByZXR1cm4gZm9ybWF0KHRoaXMsIHN0ckZvcm1hdCk7XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgc3RyaW5nIGJ5IHJlbW92aW5nIG5vbiBBU0NJSSBjaGFyc1xuICovXG5TdHJpbmcucHJvdG90eXBlLnJlbW92ZURpYWN0cmljcyA9IGZ1bmN0aW9uIHJlbW92ZURpYWN0cmljc1N0cigpIHtcbiAgcmV0dXJuIHJlbW92ZURpYWN0cmljcyh0aGlzKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGludGVnZXIgdG8gYSBmb3JtYXR0ZWQgbW9uZXkgc3RyaW5nIGxpa2U6IDEyMzQ1Njc4OS41NDEgdG8gMTIzLjQ1Ni43ODksNTRcbiAqIEBwYXJhbSBkZWNpbWFscyBOdW1iZXIgb2YgZGVjaW1hbCBudW1iZXJzIChvcHRpb25hbCwgZGVmYXVsdCAyKVxuICogQHBhcmFtIGRlY2ltYWxTZXBhcmF0b3IgRGVjaW1hbCBTZXBhcmF0b3IgY2hhcmFjdGVyIChvcHRpb25hbCwgZGVmYXVsdCAnLCcpXG4gKiBAcGFyYW0gc2VwYXJhdG9yIE1pbHMgU2VwYXJhdG9yIENoYXJhY3RlciAob3B0aW9uYWwsIGRlZmF1bHQgJy4nKVxuICogQHJldHVybnMge3N0cmluZ30gRm9ybWF0dGVkIG1vbmV5IHN0cmluZ1xuICovXG5OdW1iZXIucHJvdG90eXBlLnRvTW9uZXkgPSBmdW5jdGlvbiB0b01vbmV5KGRlY2ltYWxzLCBkZWNpbWFsU2VwYXJhdG9yLCBzZXBhcmF0b3IpIHtcbiAgY29uc3QgYyA9IE51bWJlci5pc05hTihNYXRoLmFicyhkZWNpbWFscykpID8gMiA6IE1hdGguYWJzKGRlY2ltYWxzKTtcbiAgY29uc3QgZCA9IHVuZGVmaW5lZE9yTnVsbChkZWNpbWFsU2VwYXJhdG9yKSA/ICcsJyA6IGRlY2ltYWxTZXBhcmF0b3I7XG4gIGNvbnN0IHQgPSB1bmRlZmluZWRPck51bGwoc2VwYXJhdG9yKSA/ICcuJyA6IHNlcGFyYXRvcjtcblxuICBjb25zdCBzID0gdGhpcyA8IDAgPyAnLScgOiAnJztcbiAgY29uc3QgaU4gPSBwYXJzZUludChNYXRoLmFicyhOdW1iZXIodGhpcykgfHwgMCkudG9GaXhlZChjKSwgMTApO1xuICBjb25zb2xlLmxvZyh0aGlzLCBzKTtcbiAgY29uc3QgaSA9IFN0cmluZyhpTik7XG4gIGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuICByZXR1cm4gcyArXG4gICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiAnJykgK1xuICAgIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBgJDEke3R9YCkgK1xuICAgIChjID8gZCArIE1hdGguYWJzKE1hdGguYWJzKHRoaXMpIC0gaU4pLnRvRml4ZWQoYykuc2xpY2UoMikgOiAnJyk7XG59O1xuXG4vKipcbiAqIExlZnQgUGFkcyBhIG51bWJlciB3aXRoIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0gY2hyIHRoZSByZXByZXNlbnRpbmcgY2hhcmFjdGVyLCBkZWZhdWx0cyB0byAnMCdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk51bWJlci5wcm90b3R5cGUucGFkTGVmdCA9IGZ1bmN0aW9uIHBhZExlZnQobiwgY2hyKSB7XG4gIHJldHVybiAodGhpcyA8IDAgPyAnLScgOiAnJykgKyBuZXcgQXJyYXkoKG4gLSBTdHJpbmcoTWF0aC5hYnModGhpcykpLmxlbmd0aCkgKyAxKS5qb2luKGNociB8fCAnMCcpICsgKE1hdGguYWJzKHRoaXMpKTtcbn07XG5cbi8qKlxuICogTGVmdCBQYWRzIGEgbnVtYmVyIHdpdGggcmVwcmVzZW50aW5nIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSBuIHRoZSBudW1iZXJcbiAqIEBwYXJhbSBjaHIgdGhlIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIsIGRlZmF1bHRzIHRvICcwJ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5wYWRMZWZ0ID0gU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydDtcblxuLyoqXG4gKiBNYWtlcyBldmVyeSBmaXJzdCBjaGFyYWN0ZXIgb2YgZXZlcnkgd29yZCB1cHBlciBjYXNlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuU3RyaW5nLnByb3RvdHlwZS50aXRsZUNhc2UgPSBmdW5jdGlvbiB0aXRsZUNhc2UoKSB7XG4gIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5tYXAocyA9PiBgJHtzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7cy5zdWJzdHIoMSl9YCkuam9pbignICcpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUoc3RyLCBzZXApIHtcbiAgY29uc3QgYlNlcCA9IHNlcCB8fCAnXFxcXC8nO1xuICByZXR1cm4gc3RyLnNwbGl0KG5ldyBSZWdFeHAoYFske2JTZXB9XWApKS5wb3AoKTtcbn1cblxuY29uc3QgRm9ybWF0VmFsdWUgPSBmb3JtYXQ7XG5cbmV4cG9ydCB7XG4gIEZvcm1hdFZhbHVlLFxuICBiYXNlbmFtZSxcbn07XG4iXX0=