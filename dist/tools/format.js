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

function basename(str, sep) {
  var bSep = sep || '\\/';
  return str.split(new RegExp('[' + bSep + ']')).pop();
}

var FormatValue = format;

exports.FormatValue = FormatValue;
exports.basename = basename;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9mb3JtYXQuanMiXSwibmFtZXMiOlsibWFza1N0YXJ0UmVnRXhwIiwiZm9ybWF0Iiwic3RyIiwibWFzayIsImRhdGEiLCJsZW5ndGgiLCJ0ZXN0IiwiZXhlYyIsInRleHQiLCJjT2Zmc2V0IiwiaSIsIm0iLCJjaGFyQXQiLCJyZXBsYWNlIiwieCIsImMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJmb3JtYXROdW1iZXIiLCJzdHJGb3JtYXQiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZvcm1hdFN0ciIsInJlbW92ZURpYWN0cmljcyIsInJlbW92ZURpYWN0cmljc1N0ciIsInRvTW9uZXkiLCJkZWNpbWFscyIsImRlY2ltYWxTZXBhcmF0b3IiLCJzZXBhcmF0b3IiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJkIiwidCIsInMiLCJpTiIsInBhcnNlSW50IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwYWRMZWZ0IiwibiIsImNociIsIkFycmF5Iiwiam9pbiIsInBhZFN0YXJ0IiwiYmFzZW5hbWUiLCJzZXAiLCJiU2VwIiwic3BsaXQiLCJSZWdFeHAiLCJwb3AiLCJGb3JtYXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUlBOzs7Ozs7QUFUQTtBQUNBOzs7O0FBVUEsSUFBTUEsa0JBQWtCLGFBQXhCO0FBQ0E7Ozs7Ozs7O0FBUUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBY0MsSUFBZCxFQUErQjtBQUM1QyxNQUFJQyxPQUFPRixHQUFYO0FBQ0E7QUFDQSxNQUFJLGlDQUFnQkMsSUFBaEIsS0FBeUIsT0FBT0EsSUFBUCxLQUFnQixRQUE3QyxFQUF1RDtBQUNyRCxXQUFPQyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBS0MsTUFBTCxLQUFnQixDQUFoQixJQUFxQkwsZ0JBQWdCTSxJQUFoQixDQUFxQkgsSUFBckIsQ0FBekIsRUFBcUQ7QUFDbkRDLFdBQU9K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UCxFQUF1QjFCLE1BQTVCLEdBQXNDLENBQWhELEVBQW1EMEMsSUFBbkQsQ0FBd0RGLE9BQU8sR0FBL0QsQ0FBeEIsR0FBK0ZmLEtBQUtDLEdBQUwsQ0FBUyxJQUFULENBQXRHO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUFWLE9BQU9KLFNBQVAsQ0FBaUIwQixPQUFqQixHQUEyQnRCLE9BQU9KLFNBQVAsQ0FBaUIrQixRQUE1Qzs7QUFFQSxTQUFTQyxRQUFULENBQWtCL0MsR0FBbEIsRUFBdUJnRCxHQUF2QixFQUE0QjtBQUMxQixNQUFNQyxPQUFPRCxPQUFPLEtBQXBCO0FBQ0EsU0FBT2hELElBQUlrRCxLQUFKLENBQVUsSUFBSUMsTUFBSixPQUFlRixJQUFmLE9BQVYsRUFBbUNHLEdBQW5DLEVBQVA7QUFDRDs7QUFFRCxJQUFNQyxjQUFjdEQsTUFBcEI7O1FBR0VzRCxXLEdBQUFBLFc7UUFDQU4sUSxHQUFBQSxRIiwiZmlsZSI6ImZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUsbm8tcGx1c3BsdXMgKi9cbi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAwMi8wNS8xNy5cbiAqL1xuXG5pbXBvcnQge1xuICB1bmRlZmluZWRPck51bGwsXG59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmltcG9ydCByZW1vdmVEaWFjdHJpY3MgZnJvbSAnLi9yZW1vdmVEaWFjdHJpY3MnO1xuXG5jb25zdCBtYXNrU3RhcnRSZWdFeHAgPSAvXihbXiNBTlhdKykvO1xuLyoqXG4gKiBTaW1wbGUgZm9ybWF0IGZ1bmN0aW9uIGJvcnJvd2VkIGZyb20gUHVyZU1hc2suanNcbiAqIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcm9tdWxvYnJhc2lsL1B1cmVNYXNrLmpzfVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIG1hc2sgKGlucHV0IHZhbHVlKVxuICogQHBhcmFtIHtTdHJpbmd9IFttYXNrXSBNYXNrIGZvcm1hdCwgbGlrZSBgIyMjIy0jI2BcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCB0ZXh0XG4gKi9cbmNvbnN0IGZvcm1hdCA9IChzdHI6IHN0cmluZywgbWFzazogc3RyaW5nKSA9PiB7XG4gIGxldCBkYXRhID0gc3RyO1xuICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBtYXNrIGlzIHVuZGVmaW5lZC9udWxsL2V0Y1xuICBpZiAodW5kZWZpbmVkT3JOdWxsKG1hc2spIHx8IHR5cGVvZiBtYXNrICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAxICYmIG1hc2tTdGFydFJlZ0V4cC50ZXN0KG1hc2spKSB7XG4gICAgZGF0YSA9IG1hc2tTdGFydFJlZ0V4cC5leGVjKG1hc2spWzBdICsgZGF0YTtcbiAgfVxuXG4gIGxldCB0ZXh0ID0gJyc7XG5cbiAgLy8gQWRkcyBhIGNoYXIgb2Zmc2V0IHRvIGFsbG93IHRlc3Rpbmcgb24gb3B0aW9uYWwgdmFsdWVzXG4gIGxldCBjT2Zmc2V0ID0gMDtcblxuICAvLyBDbGVhbnMgZGF0YSB0byAgYXZvaWQgdmFsdWUgbG9zcyBvbiBkeW5hbWljIG1hc2sgY2hhbmdpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbSA9IG1hc2suY2hhckF0KGkpO1xuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAnIyc6IGJyZWFrO1xuICAgICAgY2FzZSAnQSc6IGJyZWFrO1xuICAgICAgY2FzZSAnPyc6IGJyZWFrO1xuICAgICAgY2FzZSAnTic6IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IGJyZWFrO1xuICAgICAgZGVmYXVsdDogZGF0YSA9IGRhdGEucmVwbGFjZShtLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIHggPSAxOyB4ICYmIGkgPCBtYXNrLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgYyA9IGRhdGEuY2hhckF0KGkgLSBjT2Zmc2V0KTtcbiAgICBjb25zdCBtID0gbWFzay5jaGFyQXQoaSk7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgJyMnOiBpZiAoL1xcZC8udGVzdChjKSkgeyB0ZXh0ICs9IGM7IH0gZWxzZSB7IHggPSAwOyB9IGJyZWFrO1xuICAgICAgY2FzZSAnQSc6IGlmICgvW2Etel0vaS50ZXN0KGMpKSB7IHRleHQgKz0gYzsgfSBlbHNlIHsgeCA9IDA7IH0gYnJlYWs7XG4gICAgICBjYXNlICdOJzogaWYgKC9bYS16MC05XS9pLnRlc3QoYykpIHsgdGV4dCArPSBjOyB9IGVsc2UgeyB4ID0gMDsgfSBicmVhaztcbiAgICAgIGNhc2UgJz8nOiBjT2Zmc2V0Kys7IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IHRleHQgKz0gYzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZXh0ICs9IG07XG4gICAgICAgIGlmIChjICYmIGMgIT09IG0pIHtcbiAgICAgICAgICBkYXRhID0gYCAke2RhdGF9YDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYW4gbnVtYmVyIGdpdmVuIHRoZSBtYXNrLlxuICogQHBhcmFtIHN0ckZvcm1hdCBbbWFza10gTWFzayBmb3JtYXQsIGxpa2UgYCMjIyMtIyNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5OdW1iZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihzdHJGb3JtYXQpIHtcbiAgcmV0dXJuIGZvcm1hdCh0aGlzLnRvU3RyaW5nKCksIHN0ckZvcm1hdCk7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYSBzdHJpbmcgZ2l2ZW4gbWFza1xuICogQHBhcmFtIHN0ckZvcm1hdCBbbWFza10gTWFzayBmb3JtYXQsIGxpa2UgYCMjIyMtIyNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5TdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdFN0cihzdHJGb3JtYXQpIHtcbiAgcmV0dXJuIGZvcm1hdCh0aGlzLCBzdHJGb3JtYXQpO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBieSByZW1vdmluZyBub24gQVNDSUkgY2hhcnNcbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5yZW1vdmVEaWFjdHJpY3MgPSBmdW5jdGlvbiByZW1vdmVEaWFjdHJpY3NTdHIoKSB7XG4gIHJldHVybiByZW1vdmVEaWFjdHJpY3ModGhpcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBpbnRlZ2VyIHRvIGEgZm9ybWF0dGVkIG1vbmV5IHN0cmluZyBsaWtlOiAxMjM0NTY3ODkuNTQxIHRvIDEyMy40NTYuNzg5LDU0XG4gKiBAcGFyYW0gZGVjaW1hbHMgTnVtYmVyIG9mIGRlY2ltYWwgbnVtYmVycyAob3B0aW9uYWwsIGRlZmF1bHQgMilcbiAqIEBwYXJhbSBkZWNpbWFsU2VwYXJhdG9yIERlY2ltYWwgU2VwYXJhdG9yIGNoYXJhY3RlciAob3B0aW9uYWwsIGRlZmF1bHQgJywnKVxuICogQHBhcmFtIHNlcGFyYXRvciBNaWxzIFNlcGFyYXRvciBDaGFyYWN0ZXIgKG9wdGlvbmFsLCBkZWZhdWx0ICcuJylcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCBtb25leSBzdHJpbmdcbiAqL1xuTnVtYmVyLnByb3RvdHlwZS50b01vbmV5ID0gZnVuY3Rpb24gdG9Nb25leShkZWNpbWFscywgZGVjaW1hbFNlcGFyYXRvciwgc2VwYXJhdG9yKSB7XG4gIGNvbnN0IGMgPSBOdW1iZXIuaXNOYU4oTWF0aC5hYnMoZGVjaW1hbHMpKSA/IDIgOiBNYXRoLmFicyhkZWNpbWFscyk7XG4gIGNvbnN0IGQgPSB1bmRlZmluZWRPck51bGwoZGVjaW1hbFNlcGFyYXRvcikgPyAnLCcgOiBkZWNpbWFsU2VwYXJhdG9yO1xuICBjb25zdCB0ID0gdW5kZWZpbmVkT3JOdWxsKHNlcGFyYXRvcikgPyAnLicgOiBzZXBhcmF0b3I7XG5cbiAgY29uc3QgcyA9IHRoaXMgPCAwID8gJy0nIDogJyc7XG4gIGNvbnN0IGlOID0gcGFyc2VJbnQoTWF0aC5hYnMoTnVtYmVyKHRoaXMpIHx8IDApLnRvRml4ZWQoYyksIDEwKTtcbiAgY29uc29sZS5sb2codGhpcywgcyk7XG4gIGNvbnN0IGkgPSBTdHJpbmcoaU4pO1xuICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcbiAgcmV0dXJuIHMgK1xuICAgIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogJycpICtcbiAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0fWApICtcbiAgICAoYyA/IGQgKyBNYXRoLmFicyhNYXRoLmFicyh0aGlzKSAtIGlOKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogJycpO1xufTtcblxuLyoqXG4gKiBMZWZ0IFBhZHMgYSBudW1iZXIgd2l0aCByZXByZXNlbnRpbmcgY2hhcmFjdGVyLlxuICogQHBhcmFtIG4gdGhlIG51bWJlclxuICogQHBhcmFtIGNociB0aGUgcmVwcmVzZW50aW5nIGNoYXJhY3RlciwgZGVmYXVsdHMgdG8gJzAnXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5OdW1iZXIucHJvdG90eXBlLnBhZExlZnQgPSBmdW5jdGlvbiBwYWRMZWZ0KG4sIGNocikge1xuICByZXR1cm4gKHRoaXMgPCAwID8gJy0nIDogJycpICsgbmV3IEFycmF5KChuIC0gU3RyaW5nKE1hdGguYWJzKHRoaXMpKS5sZW5ndGgpICsgMSkuam9pbihjaHIgfHwgJzAnKSArIChNYXRoLmFicyh0aGlzKSk7XG59O1xuXG4vKipcbiAqIExlZnQgUGFkcyBhIG51bWJlciB3aXRoIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0gY2hyIHRoZSByZXByZXNlbnRpbmcgY2hhcmFjdGVyLCBkZWZhdWx0cyB0byAnMCdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblN0cmluZy5wcm90b3R5cGUucGFkTGVmdCA9IFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQ7XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHN0ciwgc2VwKSB7XG4gIGNvbnN0IGJTZXAgPSBzZXAgfHwgJ1xcXFwvJztcbiAgcmV0dXJuIHN0ci5zcGxpdChuZXcgUmVnRXhwKGBbJHtiU2VwfV1gKSkucG9wKCk7XG59XG5cbmNvbnN0IEZvcm1hdFZhbHVlID0gZm9ybWF0O1xuXG5leHBvcnQge1xuICBGb3JtYXRWYWx1ZSxcbiAgYmFzZW5hbWUsXG59O1xuIl19