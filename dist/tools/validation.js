'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Lucas Teske on 20/04/17.
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.normalizeXMLJSObjectProperties = normalizeXMLJSObjectProperties;
exports.validateEmail = validateEmail;
exports.validateCPF = validateCPF;
exports.validateCNPJ = validateCNPJ;
exports.undefinedOrNull = undefinedOrNull;
exports.validateField = validateField;
exports.validateDateFormat = validateDateFormat;
exports.validateStringLength = validateStringLength;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeXMLJSObjectProperties(obj) {
  if (!(obj instanceof Object)) {
    throw new TypeError('Value of argument "obj" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(obj));
  }

  var keys = Object.keys(obj);
  var nObj = {};
  for (var i = 0; i < keys.length; i += 1) {
    var k = keys[i];
    if (_typeof(obj[k]) === 'object') {
      normalizeXMLJSObjectProperties(obj[k]);
    }
    var t = JSON.parse(JSON.stringify(obj[k][0]));
    if (t !== 'undefined') {
      nObj[k.toLowerCase()] = t !== 'NULL' ? t : null;
    }
  }

  return nObj;
}

function validateEmail(email) {
  if (!(typeof email === 'string')) {
    throw new TypeError('Value of argument "email" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(email));
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateCPF(cpfO) {
  if (!(typeof cpfO === 'string')) {
    throw new TypeError('Value of argument "cpfO" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(cpfO));
  }

  var sum = 0;
  var hash = void 0;

  if (cpfO === undefined || cpfO === null) {
    return false;
  }

  var cpf = cpfO.replace(/[^\d]+/g, '');

  if (cpf.length !== '00000000000'.length) {
    return false;
  }

  if (cpf === '00000000000') {
    return false;
  }

  for (var i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  hash = sum * 10 % 11;

  if (hash === 10 || hash === 11) {
    hash = 0;
  }

  if (hash !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }

  // Verification digit
  sum = 0;
  for (var _i = 1; _i <= 10; _i++) {
    sum += parseInt(cpf.substring(_i - 1, _i), 10) * (12 - _i);
  }

  hash = sum * 10 % 11;

  if (hash === 10 || hash === 11) {
    hash = 0;
  }

  return hash === parseInt(cpf.substring(10, 11), 10);
}

function validateCNPJ(cnpjO) {
  if (!(typeof cnpjO === 'string')) {
    throw new TypeError('Value of argument "cnpjO" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(cnpjO));
  }

  if (cnpjO === undefined || cnpjO === null || cnpjO.length !== 14) {
    return false;
  }

  var cnpj = cnpjO.replace(/[^\d]+/g, '');

  if (cnpj.length === 0 || cnpj.length !== 14 || cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999') {
    return false;
  }

  var size = cnpj.length - 2;
  var numbers = cnpj.substring(0, size);
  var digits = cnpj.substring(size);
  var sum = 0;
  var pos = size - 7;
  for (var i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  var resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (resultado !== parseInt(digits.charAt(0), 10)) {
    return false;
  }

  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (var _i2 = size; _i2 >= 1; _i2--) {
    sum += parseInt(numbers.charAt(size - _i2), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  return resultado === parseInt(digits.charAt(1), 10);
}

function undefinedOrNull(field) {
  return field === undefined || field === null;
}

function validateField(fieldValue, validationFn) {
  return validationFn(fieldValue);
}

function validateDateFormat(field, format) {
  if (!(typeof field === 'string')) {
    throw new TypeError('Value of argument "field" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(field));
  }

  if (!(typeof format === 'string')) {
    throw new TypeError('Value of argument "format" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(format));
  }

  return (0, _moment2.default)(field, format, true).isValid();
}

function validateStringLength(field, max, min) {
  if (!(typeof field === 'string')) {
    throw new TypeError('Value of argument "field" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(field));
  }

  if (!(typeof max === 'number')) {
    throw new TypeError('Value of argument "max" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(max));
  }

  if (!(typeof min === 'number' || min == null)) {
    throw new TypeError('Value of argument "min" violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(min));
  }

  return field.length < max && (min !== undefined && field.length > min || min === undefined);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZUNQRiIsInZhbGlkYXRlQ05QSiIsInVuZGVmaW5lZE9yTnVsbCIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0ZURhdGVGb3JtYXQiLCJ2YWxpZGF0ZVN0cmluZ0xlbmd0aCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJuT2JqIiwiaSIsImxlbmd0aCIsImsiLCJ0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidG9Mb3dlckNhc2UiLCJlbWFpbCIsInJlIiwidGVzdCIsImNwZk8iLCJzdW0iLCJoYXNoIiwidW5kZWZpbmVkIiwiY3BmIiwicmVwbGFjZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY25wak8iLCJjbnBqIiwic2l6ZSIsIm51bWJlcnMiLCJkaWdpdHMiLCJwb3MiLCJjaGFyQXQiLCJyZXN1bHRhZG8iLCJmaWVsZCIsImZpZWxkVmFsdWUiLCJ2YWxpZGF0aW9uRm4iLCJmb3JtYXQiLCJpc1ZhbGlkIiwibWF4IiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OFFBQUE7Ozs7O1FBT2dCQSw4QixHQUFBQSw4QjtRQWlCQUMsYSxHQUFBQSxhO1FBS0FDLFcsR0FBQUEsVztRQStDQUMsWSxHQUFBQSxZO1FBeURBQyxlLEdBQUFBLGU7UUFJQUMsYSxHQUFBQSxhO1FBSUFDLGtCLEdBQUFBLGtCO1FBSUFDLG9CLEdBQUFBLG9COztBQTVJaEI7Ozs7OztBQUVPLFNBQVNQLDhCQUFULENBQXdDUSxHQUF4QyxFQUE4RDtBQUFBLFFBQXRCQSxHQUFzQixZQUFqQkMsTUFBaUI7QUFBQSwrR0FBdEJELEdBQXNCO0FBQUE7O0FBQ25FLE1BQU1FLE9BQU9ELE9BQU9DLElBQVAsQ0FBWUYsR0FBWixDQUFiO0FBQ0EsTUFBTUcsT0FBTyxFQUFiO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENB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O0FBQUEsaUhBQWhEQSxLQUFnRDtBQUFBOztBQUFBLGVBQWpDSyxHQUFpQztBQUFBLCtHQUFqQ0EsR0FBaUM7QUFBQTs7QUFBQSxlQUFwQkMsR0FBb0IsaUJBQXBCQSxHQUFvQjtBQUFBLHNIQUFwQkEsR0FBb0I7QUFBQTs7QUFDbkYsU0FBUU4sTUFBTTFCLE1BQU4sR0FBZStCLEdBQWhCLEtBQTJCQyxRQUFRbkIsU0FBUixJQUFxQmEsTUFBTTFCLE1BQU4sR0FBZWdDLEdBQXJDLElBQTZDQSxRQUFRbkIsU0FBL0UsQ0FBUDtBQUNEIiwiZmlsZSI6InZhbGlkYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjAvMDQvMTcuXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmo6IE9iamVjdCkgOiBPYmplY3Qge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgY29uc3Qgbk9iaiA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmpba10pO1xuICAgIH1cbiAgICBjb25zdCB0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmpba11bMF0pKTtcbiAgICBpZiAodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5PYmpbay50b0xvd2VyQ2FzZSgpXSA9IHQgIT09ICdOVUxMJyA/IHQgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ1BGKGNwZk86IHN0cmluZykgOiBib29sZWFuIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBoYXNoO1xuXG4gIGlmIChjcGZPID09PSB1bmRlZmluZWQgfHwgY3BmTyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNwZiA9IGNwZk8ucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG5cbiAgaWYgKGNwZi5sZW5ndGggIT09ICcwMDAwMDAwMDAwMCcubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNwZiA9PT0gJzAwMDAwMDAwMDAwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIHN1bSArPSBwYXJzZUludChjcGYuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gIH1cblxuICBoYXNoID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gIGlmICgoaGFzaCA9PT0gMTApIHx8IChoYXNoID09PSAxMSkpIHtcbiAgICBoYXNoID0gMDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSBwYXJzZUludChjcGYuc3Vic3RyaW5nKDksIDEwKSwgMTApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVmVyaWZpY2F0aW9uIGRpZ2l0XG4gIHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xuICB9XG5cbiAgaGFzaCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICBpZiAoKGhhc2ggPT09IDEwKSB8fCAoaGFzaCA9PT0gMTEpKSB7XG4gICAgaGFzaCA9IDA7XG4gIH1cblxuICByZXR1cm4gaGFzaCA9PT0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZygxMCwgMTEpLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNOUEooY25wak86IHN0cmluZykgOiBib29sZWFuIHtcblxuICBpZiAoY25wak8gPT09IHVuZGVmaW5lZCB8fCBjbnBqTyA9PT0gbnVsbCB8fCBjbnBqTy5sZW5ndGggIT09IDE0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY25waiA9IGNucGpPLnJlcGxhY2UoL1teXFxkXSsvZywgJycpO1xuXG4gIGlmIChcbiAgICBjbnBqLmxlbmd0aCA9PT0gMCB8fFxuICAgIGNucGoubGVuZ3RoICE9PSAxNCB8fFxuICAgIGNucGogPT09ICcwMDAwMDAwMDAwMDAwMCcgfHxcbiAgICBjbnBqID09PSAnMTExMTExMTExMTExMTEnIHx8XG4gICAgY25waiA9PT0gJzIyMjIyMjIyMjIyMjIyJyB8fFxuICAgIGNucGogPT09ICczMzMzMzMzMzMzMzMzMycgfHxcbiAgICBjbnBqID09PSAnNDQ0NDQ0NDQ0NDQ0NDQnIHx8XG4gICAgY25waiA9PT0gJzU1NTU1NTU1NTU1NTU1JyB8fFxuICAgIGNucGogPT09ICc2NjY2NjY2NjY2NjY2NicgfHxcbiAgICBjbnBqID09PSAnNzc3Nzc3Nzc3Nzc3NzcnIHx8XG4gICAgY25waiA9PT0gJzg4ODg4ODg4ODg4ODg4JyB8fFxuICAgIGNucGogPT09ICc5OTk5OTk5OTk5OTk5OSdcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHNpemUgPSBjbnBqLmxlbmd0aCAtIDI7XG4gIGxldCBudW1iZXJzID0gY25wai5zdWJzdHJpbmcoMCwgc2l6ZSk7XG4gIGNvbnN0IGRpZ2l0cyA9IGNucGouc3Vic3RyaW5nKHNpemUpO1xuICBsZXQgc3VtID0gMDtcbiAgbGV0IHBvcyA9IHNpemUgLSA3O1xuICBmb3IgKGxldCBpID0gc2l6ZTsgaSA+PSAxOyBpLS0pIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQobnVtYmVycy5jaGFyQXQoc2l6ZSAtIGkpLCAxMCkgKiBwb3MtLTtcbiAgICBpZiAocG9zIDwgMikge1xuICAgICAgcG9zID0gOTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzdWx0YWRvID0gc3VtICUgMTEgPCAyID8gMCA6IDExIC0gc3VtICUgMTE7XG4gIGlmIChyZXN1bHRhZG8gIT09IHBhcnNlSW50KGRpZ2l0cy5jaGFyQXQoMCksIDEwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNpemUgKz0gMTtcbiAgbnVtYmVycyA9IGNucGouc3Vic3RyaW5nKDAsIHNpemUpO1xuICBzdW0gPSAwO1xuICBwb3MgPSBzaXplIC0gNztcblxuICBmb3IgKGxldCBpID0gc2l6ZTsgaSA+PSAxOyBpLS0pIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQobnVtYmVycy5jaGFyQXQoc2l6ZSAtIGkpLCAxMCkgKiBwb3MtLTtcbiAgICBpZiAocG9zIDwgMikge1xuICAgICAgcG9zID0gOTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0YWRvID0gc3VtICUgMTEgPCAyID8gMCA6IDExIC0gc3VtICUgMTE7XG4gIHJldHVybiByZXN1bHRhZG8gPT09IHBhcnNlSW50KGRpZ2l0cy5jaGFyQXQoMSksIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVmaW5lZE9yTnVsbChmaWVsZDogYW55KSB7XG4gIHJldHVybiBmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkID09PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmaWVsZFZhbHVlOiBhbnksIHZhbGlkYXRpb25GbjogYW55KSA6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsaWRhdGlvbkZuKGZpZWxkVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEYXRlRm9ybWF0KGZpZWxkOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKSB7XG4gIHJldHVybiBtb21lbnQoZmllbGQsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdMZW5ndGgoZmllbGQ6IHN0cmluZywgbWF4OiBudW1iZXIsIG1pbjogbnVtYmVyIHwgdm9pZCkge1xuICByZXR1cm4gKGZpZWxkLmxlbmd0aCA8IG1heCkgJiYgKCAobWluICE9PSB1bmRlZmluZWQgJiYgZmllbGQubGVuZ3RoID4gbWluKSB8fCBtaW4gPT09IHVuZGVmaW5lZCk7XG59XG4iXX0=