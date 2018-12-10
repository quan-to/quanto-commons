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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9mb3JtYXQuanMiXSwibmFtZXMiOlsibWFza1N0YXJ0UmVnRXhwIiwiZm9ybWF0Iiwic3RyIiwibWFzayIsImRhdGEiLCJsZW5ndGgiLCJ0ZXN0IiwiZXhlYyIsInRleHQiLCJjT2Zmc2V0IiwiaSIsIm0iLCJjaGFyQXQiLCJyZXBsYWNlIiwieCIsImMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJmb3JtYXROdW1iZXIiLCJzdHJGb3JtYXQiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZvcm1hdFN0ciIsInJlbW92ZURpYWN0cmljcyIsInJlbW92ZURpYWN0cmljc1N0ciIsInRvTW9uZXkiLCJkZWNpbWFscyIsImRlY2ltYWxTZXBhcmF0b3IiLCJzZXBhcmF0b3IiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJkIiwidCIsInMiLCJpTiIsInBhcnNlSW50IiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJzbGljZSIsInBhZExlZnQiLCJuIiwiY2hyIiwiQXJyYXkiLCJqb2luIiwicGFkU3RhcnQiLCJ0aXRsZUNhc2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwibWFwIiwidG9VcHBlckNhc2UiLCJiYXNlbmFtZSIsInNlcCIsImJTZXAiLCJSZWdFeHAiLCJwb3AiLCJGb3JtYXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUVBOzs7Ozs7QUFQQTtBQUNBOzs7O0FBUUEsSUFBTUEsa0JBQWtCLGFBQXhCO0FBQ0E7Ozs7Ozs7O0FBUUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBY0MsSUFBZCxFQUErQjtBQUM1QyxNQUFJQyxPQUFPRixHQUFYO0FBQ0E7QUFDQSxNQUFJLGlDQUFnQkMsSUFBaEIsS0FBeUIsT0FBT0EsSUFBUCxLQUFnQixRQUE3QyxFQUF1RDtBQUNyRCxXQUFPQyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBS0MsTUFBTCxLQUFnQixDQUFoQixJQUFxQkwsZ0JBQWdCTSxJQUFoQixDQUFxQkgs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NUIsR0FBc0MsQ0FBaEQsRUFBbUR3QyxJQUFuRCxDQUF3REYsT0FBTyxHQUEvRCxDQUF4QixHQUErRmIsS0FBS0MsR0FBTCxDQUFTLElBQVQsQ0FBdEc7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQVYsT0FBT0osU0FBUCxDQUFpQndCLE9BQWpCLEdBQTJCcEIsT0FBT0osU0FBUCxDQUFpQjZCLFFBQTVDOztBQUVBOzs7O0FBSUF6QixPQUFPSixTQUFQLENBQWlCOEIsU0FBakIsR0FBNkIsU0FBU0EsU0FBVCxHQUFxQjtBQUNoRCxTQUFPLEtBQUtDLFdBQUwsR0FBbUJDLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCQyxHQUE5QixDQUFrQztBQUFBLGdCQUFRaEIsRUFBRXRCLE1BQUYsQ0FBUyxDQUFULEVBQVl1QyxXQUFaLEVBQVIsR0FBb0NqQixFQUFFSyxNQUFGLENBQVMsQ0FBVCxDQUFwQztBQUFBLEdBQWxDLEVBQXFGTSxJQUFyRixDQUEwRixHQUExRixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTTyxRQUFULENBQWtCbEQsR0FBbEIsRUFBdUJtRCxHQUF2QixFQUE0QjtBQUMxQixNQUFNQyxPQUFPRCxPQUFPLEtBQXBCO0FBQ0EsU0FBT25ELElBQUkrQyxLQUFKLENBQVUsSUFBSU0sTUFBSixPQUFlRCxJQUFmLE9BQVYsRUFBbUNFLEdBQW5DLEVBQVA7QUFDRDs7QUFFRCxJQUFNQyxjQUFjeEQsTUFBcEI7O1FBR0V3RCxXLEdBQUFBLFc7UUFDQUwsUSxHQUFBQSxRIiwiZmlsZSI6ImZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUsbm8tcGx1c3BsdXMgKi9cbi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAwMi8wNS8xNy5cbiAqL1xuXG5pbXBvcnQgeyB1bmRlZmluZWRPck51bGwgfSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5pbXBvcnQgcmVtb3ZlRGlhY3RyaWNzIGZyb20gJy4vcmVtb3ZlRGlhY3RyaWNzJztcblxuY29uc3QgbWFza1N0YXJ0UmVnRXhwID0gL14oW14jQU5YXSspLztcbi8qKlxuICogU2ltcGxlIGZvcm1hdCBmdW5jdGlvbiBib3Jyb3dlZCBmcm9tIFB1cmVNYXNrLmpzXG4gKiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3JvbXVsb2JyYXNpbC9QdXJlTWFzay5qc31cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byBtYXNrIChpbnB1dCB2YWx1ZSlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFza10gTWFzayBmb3JtYXQsIGxpa2UgYCMjIyMtIyNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgdGV4dFxuICovXG5jb25zdCBmb3JtYXQgPSAoc3RyOiBzdHJpbmcsIG1hc2s6IHN0cmluZykgPT4ge1xuICBsZXQgZGF0YSA9IHN0cjtcbiAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgbWFzayBpcyB1bmRlZmluZWQvbnVsbC9ldGNcbiAgaWYgKHVuZGVmaW5lZE9yTnVsbChtYXNrKSB8fCB0eXBlb2YgbWFzayAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMSAmJiBtYXNrU3RhcnRSZWdFeHAudGVzdChtYXNrKSkge1xuICAgIGRhdGEgPSBtYXNrU3RhcnRSZWdFeHAuZXhlYyhtYXNrKVswXSArIGRhdGE7XG4gIH1cblxuICBsZXQgdGV4dCA9ICcnO1xuXG4gIC8vIEFkZHMgYSBjaGFyIG9mZnNldCB0byBhbGxvdyB0ZXN0aW5nIG9uIG9wdGlvbmFsIHZhbHVlc1xuICBsZXQgY09mZnNldCA9IDA7XG5cbiAgLy8gQ2xlYW5zIGRhdGEgdG8gIGF2b2lkIHZhbHVlIGxvc3Mgb24gZHluYW1pYyBtYXNrIGNoYW5naW5nXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG0gPSBtYXNrLmNoYXJBdChpKTtcbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgJyMnOiBicmVhaztcbiAgICAgIGNhc2UgJ0EnOiBicmVhaztcbiAgICAgIGNhc2UgJz8nOiBicmVhaztcbiAgICAgIGNhc2UgJ04nOiBicmVhaztcbiAgICAgIGNhc2UgJ1gnOiBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGRhdGEgPSBkYXRhLnJlcGxhY2UobSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCB4ID0gMTsgeCAmJiBpIDwgbWFzay5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGMgPSBkYXRhLmNoYXJBdChpIC0gY09mZnNldCk7XG4gICAgY29uc3QgbSA9IG1hc2suY2hhckF0KGkpO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlICcjJzogaWYgKC9cXGQvLnRlc3QoYykpIHsgdGV4dCArPSBjOyB9IGVsc2UgeyB4ID0gMDsgfSBicmVhaztcbiAgICAgIGNhc2UgJ0EnOiBpZiAoL1thLXpdL2kudGVzdChjKSkgeyB0ZXh0ICs9IGM7IH0gZWxzZSB7IHggPSAwOyB9IGJyZWFrO1xuICAgICAgY2FzZSAnTic6IGlmICgvW2EtejAtOV0vaS50ZXN0KGMpKSB7IHRleHQgKz0gYzsgfSBlbHNlIHsgeCA9IDA7IH0gYnJlYWs7XG4gICAgICBjYXNlICc/JzogY09mZnNldCsrOyBicmVhaztcbiAgICAgIGNhc2UgJ1gnOiB0ZXh0ICs9IGM7IGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGV4dCArPSBtO1xuICAgICAgICBpZiAoYyAmJiBjICE9PSBtKSB7XG4gICAgICAgICAgZGF0YSA9IGAgJHtkYXRhfWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIG51bWJlciBnaXZlbiB0aGUgbWFzay5cbiAqIEBwYXJhbSBzdHJGb3JtYXQgW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTnVtYmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXROdW1iZXIoc3RyRm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQodGhpcy50b1N0cmluZygpLCBzdHJGb3JtYXQpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGEgc3RyaW5nIGdpdmVuIG1hc2tcbiAqIEBwYXJhbSBzdHJGb3JtYXQgW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXRTdHIoc3RyRm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQodGhpcywgc3RyRm9ybWF0KTtcbn07XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgYnkgcmVtb3Zpbmcgbm9uIEFTQ0lJIGNoYXJzXG4gKi9cblN0cmluZy5wcm90b3R5cGUucmVtb3ZlRGlhY3RyaWNzID0gZnVuY3Rpb24gcmVtb3ZlRGlhY3RyaWNzU3RyKCkge1xuICByZXR1cm4gcmVtb3ZlRGlhY3RyaWNzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZWdlciB0byBhIGZvcm1hdHRlZCBtb25leSBzdHJpbmcgbGlrZTogMTIzNDU2Nzg5LjU0MSB0byAxMjMuNDU2Ljc4OSw1NFxuICogQHBhcmFtIGRlY2ltYWxzIE51bWJlciBvZiBkZWNpbWFsIG51bWJlcnMgKG9wdGlvbmFsLCBkZWZhdWx0IDIpXG4gKiBAcGFyYW0gZGVjaW1hbFNlcGFyYXRvciBEZWNpbWFsIFNlcGFyYXRvciBjaGFyYWN0ZXIgKG9wdGlvbmFsLCBkZWZhdWx0ICcsJylcbiAqIEBwYXJhbSBzZXBhcmF0b3IgTWlscyBTZXBhcmF0b3IgQ2hhcmFjdGVyIChvcHRpb25hbCwgZGVmYXVsdCAnLicpXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgbW9uZXkgc3RyaW5nXG4gKi9cbk51bWJlci5wcm90b3R5cGUudG9Nb25leSA9IGZ1bmN0aW9uIHRvTW9uZXkoZGVjaW1hbHMsIGRlY2ltYWxTZXBhcmF0b3IsIHNlcGFyYXRvcikge1xuICBjb25zdCBjID0gTnVtYmVyLmlzTmFOKE1hdGguYWJzKGRlY2ltYWxzKSkgPyAyIDogTWF0aC5hYnMoZGVjaW1hbHMpO1xuICBjb25zdCBkID0gdW5kZWZpbmVkT3JOdWxsKGRlY2ltYWxTZXBhcmF0b3IpID8gJywnIDogZGVjaW1hbFNlcGFyYXRvcjtcbiAgY29uc3QgdCA9IHVuZGVmaW5lZE9yTnVsbChzZXBhcmF0b3IpID8gJy4nIDogc2VwYXJhdG9yO1xuXG4gIGNvbnN0IHMgPSB0aGlzIDwgMCA/ICctJyA6ICcnO1xuICBjb25zdCBpTiA9IHBhcnNlSW50KE1hdGguYWJzKE51bWJlcih0aGlzKSB8fCAwKS50b0ZpeGVkKGMpLCAxMCk7XG4gIGNvbnN0IGkgPSBTdHJpbmcoaU4pO1xuICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcbiAgcmV0dXJuIHMgK1xuICAgIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogJycpICtcbiAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0fWApICtcbiAgICAoYyA/IGQgKyBNYXRoLmFicyhNYXRoLmFicyh0aGlzKSAtIGlOKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogJycpO1xufTtcblxuLyoqXG4gKiBMZWZ0IFBhZHMgYSBudW1iZXIgd2l0aCByZXByZXNlbnRpbmcgY2hhcmFjdGVyLlxuICogQHBhcmFtIG4gdGhlIG51bWJlclxuICogQHBhcmFtIGNociB0aGUgcmVwcmVzZW50aW5nIGNoYXJhY3RlciwgZGVmYXVsdHMgdG8gJzAnXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5OdW1iZXIucHJvdG90eXBlLnBhZExlZnQgPSBmdW5jdGlvbiBwYWRMZWZ0KG4sIGNocikge1xuICByZXR1cm4gKHRoaXMgPCAwID8gJy0nIDogJycpICsgbmV3IEFycmF5KChuIC0gU3RyaW5nKE1hdGguYWJzKHRoaXMpKS5sZW5ndGgpICsgMSkuam9pbihjaHIgfHwgJzAnKSArIChNYXRoLmFicyh0aGlzKSk7XG59O1xuXG4vKipcbiAqIExlZnQgUGFkcyBhIG51bWJlciB3aXRoIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0gY2hyIHRoZSByZXByZXNlbnRpbmcgY2hhcmFjdGVyLCBkZWZhdWx0cyB0byAnMCdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblN0cmluZy5wcm90b3R5cGUucGFkTGVmdCA9IFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQ7XG5cbi8qKlxuICogTWFrZXMgZXZlcnkgZmlyc3QgY2hhcmFjdGVyIG9mIGV2ZXJ5IHdvcmQgdXBwZXIgY2FzZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblN0cmluZy5wcm90b3R5cGUudGl0bGVDYXNlID0gZnVuY3Rpb24gdGl0bGVDYXNlKCkge1xuICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykubWFwKHMgPT4gYCR7cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3Muc3Vic3RyKDEpfWApLmpvaW4oJyAnKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHN0ciwgc2VwKSB7XG4gIGNvbnN0IGJTZXAgPSBzZXAgfHwgJ1xcXFwvJztcbiAgcmV0dXJuIHN0ci5zcGxpdChuZXcgUmVnRXhwKGBbJHtiU2VwfV1gKSkucG9wKCk7XG59XG5cbmNvbnN0IEZvcm1hdFZhbHVlID0gZm9ybWF0O1xuXG5leHBvcnQge1xuICBGb3JtYXRWYWx1ZSxcbiAgYmFzZW5hbWUsXG59O1xuIl19