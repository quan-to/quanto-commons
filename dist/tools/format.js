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

/**
 * Left Pads a number with representing character.
 * @param n the number
 * @param chr the representing character, defaults to '0'
 * @returns {string}
 */
String.prototype.padLeft = String.prototype.padStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9mb3JtYXQuanMiXSwibmFtZXMiOlsibWFza1N0YXJ0UmVnRXhwIiwiZm9ybWF0IiwiZGF0YSIsIm1hc2siLCJsZW5ndGgiLCJ0ZXN0IiwiZXhlYyIsInRleHQiLCJjT2Zmc2V0IiwiaSIsIm0iLCJjaGFyQXQiLCJyZXBsYWNlIiwieCIsImMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJzdHJGb3JtYXQiLCJ0b1N0cmluZyIsIlN0cmluZyIsInJlbW92ZURpYWN0cmljcyIsInRvTW9uZXkiLCJkZWNpbWFscyIsImRlY2ltYWxTZXBhcmF0b3IiLCJzZXBhcmF0b3IiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJkIiwidCIsInMiLCJpTiIsInBhcnNlSW50IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwYWRMZWZ0IiwibiIsImNociIsIkFycmF5Iiwiam9pbiIsInBhZFN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OFFBQUE7Ozs7QUFJQTs7QUFJQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLGFBQXhCO0FBQ0E7Ozs7Ozs7O0FBUUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBZUMsSUFBZixFQUFnQztBQUFBLGVBQS9CRCxJQUErQjtBQUFBLGdIQUEvQkEsSUFBK0I7QUFBQTs7QUFBQSxlQUFqQkMsSUFBaUI7QUFBQSxnSEFBakJBLElBQWlCO0FBQUE7O0FBQzdDO0FBQ0EsTUFBRyxpQ0FBZ0JBLElBQWhCLEtBQXlCLE9BQU9BLElBQVAsS0FBZ0IsUUFBNUMsRUFBc0Q7QUFDcEQsV0FBT0QsSUFBUDtBQUNEOztBQUVELE1BQUlBLEtBQUtFLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJKLGdCQUFnQkssSUFBaEIsQ0FBcUJGLElBQXJCLENBQXpCLEVBQXFEO0FBQ25ERCxXQUFPRixnQkFBZ0JNLElBQWhCLENBQXFCSCxJQUFyQixFQUEyQixDQUEzQixJQUFnQ0QsSUFBdkM7QUFDRDs7QUFFRCxNQUFJSyxPQUFPLEVBQVg7O0FBRUE7QUFDQSxNQUFJQyxVQUFVLENBQWQ7O0FBRUE7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sS0FBS0MsTUFBekIsRUFBaUNLLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQUlDLElBQUlQLEtBQUtRLE1BQUwsQ0FBWUYsQ0FBWixDQUFSO0FBQ0EsWUFBT0MsQ0FBUDtBQUNFLFdBQUssR0FBTDtBQUFXO0FBQ1gsV0FBSyxHQUFMO0FBQVc7QUFDWCxXQUFLLEdBQUw7QUFBVztBQUNYLFdBQUssR0FBTDtBQUFXO0FBQ1gsV0FBSyxHQUFMO0FBQVc7QUFDWDtBQUFVUixlQUFPQSxLQUFLVSxPQUFMLENBQWFGLENBQWIsRUFBZ0IsRUFBaEIsQ0FBUDtBQU5aO0FBUUQ7O0FBRUQsT0FBSyxJQUFJRCxLQUFJLENBQVIsRUFBV0ksSUFBSSxDQUFwQixFQUF1QkEsS0FBS0osS0FBSU4sS0FBS0MsTUFBckMsRUFBNkMsRUFBRUssRUFBL0MsRUFBa0Q7QUFDaEQsUUFBSUssSUFBSVosS0FBS1MsTUFBTCxDQUFZRixLQUFJRCxPQUFoQixDQUFSO0FBQ0EsUUFBSUUsS0FBSVAsS0FBS1EsTUFBTCxDQUFZRixFQUFaLENBQVI7O0FBRUEsWUFBUUMsRUFBUjtBQUNFLFdBQUssR0FBTDtBQUFXLFlBQUksS0FBS0wsSUFBTCxDQUFVUyxDQUFWLENBQUosRUFBeUI7QUFBRVAsa0JBQVFPLENBQVI7QUFBVyxTQUF0QyxNQUE0QztBQUFFRCxjQUFJLENBQUo7QUFBTyxTQUFDO0FBQ2pFLFdBQUssR0FBTDtBQUFXLFlBQUksU0FBU1IsSUFBVCxDQUFjUyxDQUFkLENBQUosRUFBeUI7QUFBRVAsa0JBQVFPLENBQVI7QUFBVyxTQUF0QyxNQUE0QztBQUFFRCxjQUFJLENBQUo7QUFBTyxTQUFDO0FBQ2pFLFdBQUssR0FBTDtBQUFXLFlBQUksWUFBWVIsSUFBWixDQUFpQlMsQ0FBakIsQ0FBSixFQUF5QjtBQUFFUCxrQkFBUU8sQ0FBUjtBQUFXLFNBQXRDLE1BQTRDO0FBQUVELGNBQUksQ0FBSjtBQUFPLFNBQUM7QUFDakUsV0FBSyxHQUFMO0FBQVdMLGtCQUFXO0FBQ3RCLFdBQUssR0FBTDtBQUFXRCxnQkFBUU8sQ0FBUixDQUFXO0FBQ3RCO0FBQ0VQLGdCQUFRRyxFQUFSO0FBQ0EsWUFBSUksS0FBS0EsTUFBTUosRUFBZixFQUFrQjtBQUNoQlIsaUJBQU8sTUFBTUEsSUFBYjtBQUNEO0FBQ0Q7QUFYSjtBQWFEO0FBQ0QsU0FBT0ssSUFBUDtBQUNELENBL0NEOztBQWlEQTs7Ozs7QUFLQVEsT0FBT0MsU0FBUCxDQUFpQmYsTUFBakIsR0FBMEIsVUFBVWdCLFNBQVYsRUFBcUI7QUFDN0MsU0FBT2hCLE9BQU8sS0FBS2lCLFFBQUwsRUFBUCxFQUF3QkQsU0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FFLE9BQU9ILFNBQVAsQ0FBaUJmLE1BQWpCLEdBQTBCLFVBQVVnQixTQUFWLEVBQXFCO0FBQzdDLFNBQU9oQixPQUFPLElBQVAsRUFBYWdCLFNBQWIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBRSxPQUFPSCxTQUFQLENBQWlCSSxlQUFqQixHQUFtQyxZQUFZO0FBQzdDLFNBQU8sK0JBQWdCLElBQWhCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7O0FBT0FMLE9BQU9DLFNBQVAsQ0FBaUJLLE9BQWpCLEdBQTJCLFVBQVVDLFFBQVYsRUFBb0JDLGdCQUFwQixFQUFzQ0MsU0FBdEMsRUFBaUQ7QUFDMUUsTUFBTVYsSUFBSVcsTUFBTUMsS0FBS0MsR0FBTCxDQUFTTCxRQUFULENBQU4sSUFBNEIsQ0FBNUIsR0FBZ0NJLEtBQUtDLEdBQUwsQ0FBU0wsUUFBVCxDQUExQztBQUNBLE1BQU1NLElBQUksaUNBQWdCTCxnQkFBaEIsSUFBb0MsR0FBcEMsR0FBMENBLGdCQUFwRDtBQUNBLE1BQU1NLElBQUksaUNBQWdCTCxTQUFoQixJQUE2QixHQUE3QixHQUFtQ0EsU0FBN0M7O0FBRUEsTUFBTU0sSUFBSSxPQUFPLENBQVAsR0FBVyxHQUFYLEdBQWlCLEVBQTNCO0FBQ0EsTUFBTUMsS0FBS0MsU0FBU04sS0FBS0MsR0FBTCxDQUFTWixPQUFPLElBQVAsS0FBZ0IsQ0FBekIsRUFBNEJrQixPQUE1QixDQUFvQ25CLENBQXBDLENBQVQsQ0FBWDtBQUNBb0IsVUFBUUMsR0FBUixDQUFZLElBQVosRUFBa0JMLENBQWxCO0FBQ0EsTUFBTXJCLElBQUlVLE9BQU9ZLEVBQVAsQ0FBVjtBQUNBLE1BQU1LLElBQUkzQixFQUFFTCxNQUFGLEdBQVcsQ0FBWCxHQUFlSyxFQUFFTCxNQUFGLEdBQVcsQ0FBMUIsR0FBOEIsQ0FBeEM7QUFDQSxTQUFPMEIsS0FDSk0sSUFBSTNCLEVBQUU0QixNQUFGLENBQVMsQ0FBVCxFQUFZRCxDQUFaLElBQWlCUCxDQUFyQixHQUF5QixFQURyQixJQUVMcEIsRUFBRTRCLE1BQUYsQ0FBU0QsQ0FBVCxFQUFZeEIsT0FBWixDQUFvQixnQkFBcEIsRUFBc0MsT0FBT2lCLENBQTdDLENBRkssSUFHSmYsSUFBSWMsSUFBSUYsS0FBS0MsR0FBTCxDQUFTRCxLQUFLQyxHQUFMLENBQVMsSUFBVCxJQUFpQkksRUFBMUIsRUFBOEJFLE9BQTlCLENBQXNDbkIsQ0FBdEMsRUFBeUN3QixLQUF6QyxDQUErQyxDQUEvQyxDQUFSLEdBQTRELEVBSHhELENBQVA7QUFJRCxDQWREOztBQWdCQTs7Ozs7O0FBTUF2QixPQUFPQyxTQUFQLENBQWlCdUIsT0FBakIsR0FBMkIsVUFBVUMsQ0FBVixFQUFhQyxHQUFiLEVBQWtCO0FBQzNDLFNBQU8sQ0FBQyxPQUFPLENBQVAsR0FBVyxHQUFYLEdBQWlCLEVBQWxCLElBQXdCLElBQUlDLEtBQUosQ0FBVUYsSUFBRXJCLE9BQU9PLEtBQUtDLEdBQUwsQ0FBUyxJQUFULENBQVAsRUFBdUJ2QixNQUF6QixHQUFnQyxDQUExQyxFQUE4Q3VDLElBQTlDLENBQW1ERixPQUFLLEdBQXhELENBQXhCLEdBQXdGZixLQUFLQyxHQUFMLENBQVMsSUFBVCxDQUEvRjtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BUixPQUFPSCxTQUFQLENBQWlCdUIsT0FBakIsR0FBMkJwQixPQUFPSCxTQUFQLENBQWlCNEIsUUFBNUM7O2tCQUVlM0MsTSIsImZpbGUiOiJmb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDIvMDUvMTcuXG4gKi9cblxuaW1wb3J0IHtcbiAgdW5kZWZpbmVkT3JOdWxsLFxufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5pbXBvcnQgcmVtb3ZlRGlhY3RyaWNzIGZyb20gJy4vcmVtb3ZlRGlhY3RyaWNzJztcblxuY29uc3QgbWFza1N0YXJ0UmVnRXhwID0gL14oW14jQU5YXSspLztcbi8qKlxuICogU2ltcGxlIGZvcm1hdCBmdW5jdGlvbiBib3Jyb3dlZCBmcm9tIFB1cmVNYXNrLmpzXG4gKiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3JvbXVsb2JyYXNpbC9QdXJlTWFzay5qc31cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSBTdHJpbmcgdG8gbWFzayAoaW5wdXQgdmFsdWUpXG4gKiBAcGFyYW0ge1N0cmluZ30gW21hc2tdIE1hc2sgZm9ybWF0LCBsaWtlIGAjIyMjLSMjYFxuICogQHJldHVybnMge3N0cmluZ30gRm9ybWF0dGVkIHRleHRcbiAqL1xuY29uc3QgZm9ybWF0ID0gKGRhdGE6IHN0cmluZywgbWFzazogc3RyaW5nKSA9PiB7XG4gIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIG1hc2sgaXMgdW5kZWZpbmVkL251bGwvZXRjXG4gIGlmKHVuZGVmaW5lZE9yTnVsbChtYXNrKSB8fCB0eXBlb2YgbWFzayAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAxICYmIG1hc2tTdGFydFJlZ0V4cC50ZXN0KG1hc2spKSB7XG4gICAgZGF0YSA9IG1hc2tTdGFydFJlZ0V4cC5leGVjKG1hc2spWzBdICsgZGF0YTtcbiAgfVxuXG4gIGxldCB0ZXh0ID0gJyc7XG5cbiAgLy8gQWRkcyBhIGNoYXIgb2Zmc2V0IHRvIGFsbG93IHRlc3Rpbmcgb24gb3B0aW9uYWwgdmFsdWVzXG4gIGxldCBjT2Zmc2V0ID0gMDtcblxuICAvLyBDbGVhbnMgZGF0YSB0byAgYXZvaWQgdmFsdWUgbG9zcyBvbiBkeW5hbWljIG1hc2sgY2hhbmdpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG0gPSBtYXNrLmNoYXJBdChpKTtcbiAgICBzd2l0Y2gobSkge1xuICAgICAgY2FzZSAnIycgOiBicmVhaztcbiAgICAgIGNhc2UgJ0EnIDogYnJlYWs7XG4gICAgICBjYXNlICc/JyA6IGJyZWFrO1xuICAgICAgY2FzZSAnTicgOiBicmVhaztcbiAgICAgIGNhc2UgJ1gnIDogYnJlYWs7XG4gICAgICBkZWZhdWx0IDogZGF0YSA9IGRhdGEucmVwbGFjZShtLCAnJylcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgeCA9IDE7IHggJiYgaSA8IG1hc2subGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgYyA9IGRhdGEuY2hhckF0KGkgLSBjT2Zmc2V0KTtcbiAgICBsZXQgbSA9IG1hc2suY2hhckF0KGkpO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlICcjJyA6IGlmICgvXFxkLy50ZXN0KGMpKSAgICAgICAgeyB0ZXh0ICs9IGMgfSBlbHNlIHsgeCA9IDAgfSBicmVhaztcbiAgICAgIGNhc2UgJ0EnIDogaWYgKC9bYS16XS9pLnRlc3QoYykpICAgIHsgdGV4dCArPSBjIH0gZWxzZSB7IHggPSAwIH0gYnJlYWs7XG4gICAgICBjYXNlICdOJyA6IGlmICgvW2EtejAtOV0vaS50ZXN0KGMpKSB7IHRleHQgKz0gYyB9IGVsc2UgeyB4ID0gMCB9IGJyZWFrO1xuICAgICAgY2FzZSAnPycgOiBjT2Zmc2V0Kys7IGJyZWFrO1xuICAgICAgY2FzZSAnWCcgOiB0ZXh0ICs9IGM7IGJyZWFrO1xuICAgICAgZGVmYXVsdCAgOlxuICAgICAgICB0ZXh0ICs9IG07XG4gICAgICAgIGlmIChjICYmIGMgIT09IG0pIHtcbiAgICAgICAgICBkYXRhID0gJyAnICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYW4gbnVtYmVyIGdpdmVuIHRoZSBtYXNrLlxuICogQHBhcmFtIHN0ckZvcm1hdCBbbWFza10gTWFzayBmb3JtYXQsIGxpa2UgYCMjIyMtIyNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5OdW1iZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChzdHJGb3JtYXQpIHtcbiAgcmV0dXJuIGZvcm1hdCh0aGlzLnRvU3RyaW5nKCksIHN0ckZvcm1hdCk7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYSBzdHJpbmcgZ2l2ZW4gbWFza1xuICogQHBhcmFtIHN0ckZvcm1hdCBbbWFza10gTWFzayBmb3JtYXQsIGxpa2UgYCMjIyMtIyNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5TdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChzdHJGb3JtYXQpIHtcbiAgcmV0dXJuIGZvcm1hdCh0aGlzLCBzdHJGb3JtYXQpO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBieSByZW1vdmluZyBub24gQVNDSUkgY2hhcnNcbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5yZW1vdmVEaWFjdHJpY3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiByZW1vdmVEaWFjdHJpY3ModGhpcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBpbnRlZ2VyIHRvIGEgZm9ybWF0dGVkIG1vbmV5IHN0cmluZyBsaWtlOiAxMjM0NTY3ODkuNTQxIHRvIDEyMy40NTYuNzg5LDU0XG4gKiBAcGFyYW0gZGVjaW1hbHMgTnVtYmVyIG9mIGRlY2ltYWwgbnVtYmVycyAob3B0aW9uYWwsIGRlZmF1bHQgMilcbiAqIEBwYXJhbSBkZWNpbWFsU2VwYXJhdG9yIERlY2ltYWwgU2VwYXJhdG9yIGNoYXJhY3RlciAob3B0aW9uYWwsIGRlZmF1bHQgJywnKVxuICogQHBhcmFtIHNlcGFyYXRvciBNaWxzIFNlcGFyYXRvciBDaGFyYWN0ZXIgKG9wdGlvbmFsLCBkZWZhdWx0ICcuJylcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCBtb25leSBzdHJpbmdcbiAqL1xuTnVtYmVyLnByb3RvdHlwZS50b01vbmV5ID0gZnVuY3Rpb24gKGRlY2ltYWxzLCBkZWNpbWFsU2VwYXJhdG9yLCBzZXBhcmF0b3IpIHtcbiAgY29uc3QgYyA9IGlzTmFOKE1hdGguYWJzKGRlY2ltYWxzKSkgPyAyIDogTWF0aC5hYnMoZGVjaW1hbHMpO1xuICBjb25zdCBkID0gdW5kZWZpbmVkT3JOdWxsKGRlY2ltYWxTZXBhcmF0b3IpID8gXCIsXCIgOiBkZWNpbWFsU2VwYXJhdG9yO1xuICBjb25zdCB0ID0gdW5kZWZpbmVkT3JOdWxsKHNlcGFyYXRvcikgPyBcIi5cIiA6IHNlcGFyYXRvcjtcblxuICBjb25zdCBzID0gdGhpcyA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IGlOID0gcGFyc2VJbnQoTWF0aC5hYnMoTnVtYmVyKHRoaXMpIHx8IDApLnRvRml4ZWQoYykpO1xuICBjb25zb2xlLmxvZyh0aGlzLCBzKTtcbiAgY29uc3QgaSA9IFN0cmluZyhpTik7XG4gIGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuICByZXR1cm4gcyArXG4gICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArXG4gICAgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICtcbiAgICAoYyA/IGQgKyBNYXRoLmFicyhNYXRoLmFicyh0aGlzKSAtIGlOKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG59O1xuXG4vKipcbiAqIExlZnQgUGFkcyBhIG51bWJlciB3aXRoIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0gY2hyIHRoZSByZXByZXNlbnRpbmcgY2hhcmFjdGVyLCBkZWZhdWx0cyB0byAnMCdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk51bWJlci5wcm90b3R5cGUucGFkTGVmdCA9IGZ1bmN0aW9uIChuLCBjaHIpIHtcbiAgcmV0dXJuICh0aGlzIDwgMCA/ICctJyA6ICcnKSArIG5ldyBBcnJheShuLVN0cmluZyhNYXRoLmFicyh0aGlzKSkubGVuZ3RoKzEpIC5qb2luKGNocnx8JzAnKSArIChNYXRoLmFicyh0aGlzKSk7XG59O1xuXG4vKipcbiAqIExlZnQgUGFkcyBhIG51bWJlciB3aXRoIHJlcHJlc2VudGluZyBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0gY2hyIHRoZSByZXByZXNlbnRpbmcgY2hhcmFjdGVyLCBkZWZhdWx0cyB0byAnMCdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblN0cmluZy5wcm90b3R5cGUucGFkTGVmdCA9IFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiJdfQ==