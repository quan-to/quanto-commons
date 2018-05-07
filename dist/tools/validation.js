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
exports.calcDvMod11 = calcDvMod11;
exports.calcDvMod11Sub11 = calcDvMod11Sub11;
exports.calcDvAgencia = calcDvAgencia;
exports.calcDvConta = calcDvConta;
exports.calcDvMod10 = calcDvMod10;

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

function calcDvMod11(data) {
  if (!(typeof data === 'string')) {
    throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(data));
  }

  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += parseInt(data[i], 10) * (data.length - i + 1);
  }
  return sum % 11;
}

function calcDvMod11Sub11(data) {
  if (!(typeof data === 'string')) {
    throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(data));
  }

  var c = calcDvMod11(data);
  return c > 0 ? 11 - c : 0;
}

function calcDvAgencia(branchNumber) {
  if (!(typeof branchNumber === 'number' || typeof branchNumber === 'string')) {
    throw new TypeError('Value of argument "branchNumber" violates contract.\n\nExpected:\nnumber | string\n\nGot:\n' + _inspect(branchNumber));
  }

  return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}

function calcDvConta(accountNumber) {
  if (!(typeof accountNumber === 'number' || typeof accountNumber === 'string')) {
    throw new TypeError('Value of argument "accountNumber" violates contract.\n\nExpected:\nnumber | string\n\nGot:\n' + _inspect(accountNumber));
  }

  return calcDvMod11(accountNumber.toString());
}

function calcDvMod10(data) {
  if (!(typeof data === 'string')) {
    throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(data));
  }

  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    var partial = parseInt(data[i], 10) * (i % 2 + 1);
    if (partial > 9) {
      partial = partial.toString().split('').map(function (c) {
        return parseInt(c, 10);
      }).reduce(function (a, b) {
        return a + b;
      });
    }
    sum += partial;
  }
  sum %= 10;
  sum = sum !== 0 ? 10 - sum : sum;

  return sum;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZUNQRiIsInZhbGlkYXRlQ05QSiIsInVuZGVmaW5lZE9yTnVsbCIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0ZURhdGVGb3JtYXQiLCJ2YWxpZGF0ZVN0cmluZ0xlbmd0aCIsImNhbGNEdk1vZDExIiwiY2FsY0R2TW9kMTFTdWIxMSIsImNhbGNEdkFnZW5jaWEiLCJjYWxjRHZDb250YSIsImNhbGNEdk1vZDEwIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsIm5PYmoiLCJpIiwibGVuZ3RoIiwiayIsInQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b0xvd2VyQ2FzZSIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3BmTyIsInN1bSIsImhhc2giLCJ1bmRlZmluZWQiLCJjcGYiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJjbnBqTyIsImNucGoiLCJzaXplIiwibnVtYmVycyIsImRpZ2l0cyIsInBvcyIsImNoYXJBdCIsInJlc3VsdGFkbyIsImZpZWxkIiwiZmllbGRWYWx1ZSIsInZhbGlkYXRpb25GbiIsImZvcm1hdCIsImlzVmFsaWQiLCJtYXgiLCJtaW4iLCJkYXRhIiwiYyIsImJyYW5jaE51bWJlciIsInBhZExlZnQiLCJhY2NvdW50TnVtYmVyIiwidG9TdHJpbmciLCJwYXJ0aWFsIiwic3BsaXQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzhRQUFBOzs7OztRQU9nQkEsOEIsR0FBQUEsOEI7UUFpQkFDLGEsR0FBQUEsYTtRQUtBQyxXLEdBQUFBLFc7UUErQ0FDLFksR0FBQUEsWTtRQXdEQUMsZSxHQUFBQSxlO1FBSUFDLGEsR0FBQUEsYTtRQUlBQyxrQixHQUFBQSxrQjtRQUlBQyxvQixHQUFBQSxvQjtRQUlBQyxXLEdBQUFB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QUFDRDVCLFNBQU8sRUFBUDtBQUNBQSxRQUFNQSxRQUFRLENBQVIsR0FBWSxLQUFLQSxHQUFqQixHQUF1QkEsR0FBN0I7O0FBRUEsU0FBT0EsR0FBUDtBQUNEIiwiZmlsZSI6InZhbGlkYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjAvMDQvMTcuXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmo6IE9iamVjdCkgOiBPYmplY3Qge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgY29uc3Qgbk9iaiA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmpba10pO1xuICAgIH1cbiAgICBjb25zdCB0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmpba11bMF0pKTtcbiAgICBpZiAodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5PYmpbay50b0xvd2VyQ2FzZSgpXSA9IHQgIT09ICdOVUxMJyA/IHQgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ1BGKGNwZk86IHN0cmluZykgOiBib29sZWFuIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBoYXNoO1xuXG4gIGlmIChjcGZPID09PSB1bmRlZmluZWQgfHwgY3BmTyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNwZiA9IGNwZk8ucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG5cbiAgaWYgKGNwZi5sZW5ndGggIT09ICcwMDAwMDAwMDAwMCcubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNwZiA9PT0gJzAwMDAwMDAwMDAwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIHN1bSArPSBwYXJzZUludChjcGYuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gIH1cblxuICBoYXNoID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gIGlmICgoaGFzaCA9PT0gMTApIHx8IChoYXNoID09PSAxMSkpIHtcbiAgICBoYXNoID0gMDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSBwYXJzZUludChjcGYuc3Vic3RyaW5nKDksIDEwKSwgMTApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVmVyaWZpY2F0aW9uIGRpZ2l0XG4gIHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xuICB9XG5cbiAgaGFzaCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICBpZiAoKGhhc2ggPT09IDEwKSB8fCAoaGFzaCA9PT0gMTEpKSB7XG4gICAgaGFzaCA9IDA7XG4gIH1cblxuICByZXR1cm4gaGFzaCA9PT0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZygxMCwgMTEpLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNOUEooY25wak86IHN0cmluZykgOiBib29sZWFuIHtcbiAgaWYgKGNucGpPID09PSB1bmRlZmluZWQgfHwgY25wak8gPT09IG51bGwgfHwgY25wak8ubGVuZ3RoICE9PSAxNCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNucGogPSBjbnBqTy5yZXBsYWNlKC9bXlxcZF0rL2csICcnKTtcblxuICBpZiAoXG4gICAgY25wai5sZW5ndGggPT09IDAgfHxcbiAgICBjbnBqLmxlbmd0aCAhPT0gMTQgfHxcbiAgICBjbnBqID09PSAnMDAwMDAwMDAwMDAwMDAnIHx8XG4gICAgY25waiA9PT0gJzExMTExMTExMTExMTExJyB8fFxuICAgIGNucGogPT09ICcyMjIyMjIyMjIyMjIyMicgfHxcbiAgICBjbnBqID09PSAnMzMzMzMzMzMzMzMzMzMnIHx8XG4gICAgY25waiA9PT0gJzQ0NDQ0NDQ0NDQ0NDQ0JyB8fFxuICAgIGNucGogPT09ICc1NTU1NTU1NTU1NTU1NScgfHxcbiAgICBjbnBqID09PSAnNjY2NjY2NjY2NjY2NjYnIHx8XG4gICAgY25waiA9PT0gJzc3Nzc3Nzc3Nzc3Nzc3JyB8fFxuICAgIGNucGogPT09ICc4ODg4ODg4ODg4ODg4OCcgfHxcbiAgICBjbnBqID09PSAnOTk5OTk5OTk5OTk5OTknXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBzaXplID0gY25wai5sZW5ndGggLSAyO1xuICBsZXQgbnVtYmVycyA9IGNucGouc3Vic3RyaW5nKDAsIHNpemUpO1xuICBjb25zdCBkaWdpdHMgPSBjbnBqLnN1YnN0cmluZyhzaXplKTtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBwb3MgPSBzaXplIC0gNztcbiAgZm9yIChsZXQgaSA9IHNpemU7IGkgPj0gMTsgaS0tKSB7XG4gICAgc3VtICs9IHBhcnNlSW50KG51bWJlcnMuY2hhckF0KHNpemUgLSBpKSwgMTApICogcG9zLS07XG4gICAgaWYgKHBvcyA8IDIpIHtcbiAgICAgIHBvcyA9IDk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdGFkbyA9IHN1bSAlIDExIDwgMiA/IDAgOiAxMSAtIHN1bSAlIDExO1xuICBpZiAocmVzdWx0YWRvICE9PSBwYXJzZUludChkaWdpdHMuY2hhckF0KDApLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzaXplICs9IDE7XG4gIG51bWJlcnMgPSBjbnBqLnN1YnN0cmluZygwLCBzaXplKTtcbiAgc3VtID0gMDtcbiAgcG9zID0gc2l6ZSAtIDc7XG5cbiAgZm9yIChsZXQgaSA9IHNpemU7IGkgPj0gMTsgaS0tKSB7XG4gICAgc3VtICs9IHBhcnNlSW50KG51bWJlcnMuY2hhckF0KHNpemUgLSBpKSwgMTApICogcG9zLS07XG4gICAgaWYgKHBvcyA8IDIpIHtcbiAgICAgIHBvcyA9IDk7XG4gICAgfVxuICB9XG4gIHJlc3VsdGFkbyA9IHN1bSAlIDExIDwgMiA/IDAgOiAxMSAtIHN1bSAlIDExO1xuICByZXR1cm4gcmVzdWx0YWRvID09PSBwYXJzZUludChkaWdpdHMuY2hhckF0KDEpLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlZmluZWRPck51bGwoZmllbGQ6IGFueSkge1xuICByZXR1cm4gZmllbGQgPT09IHVuZGVmaW5lZCB8fCBmaWVsZCA9PT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoZmllbGRWYWx1ZTogYW55LCB2YWxpZGF0aW9uRm46IGFueSkgOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbGlkYXRpb25GbihmaWVsZFZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRGF0ZUZvcm1hdChmaWVsZDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZykge1xuICByZXR1cm4gbW9tZW50KGZpZWxkLCBmb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nTGVuZ3RoKGZpZWxkOiBzdHJpbmcsIG1heDogbnVtYmVyLCBtaW46IG51bWJlciB8IHZvaWQpIHtcbiAgcmV0dXJuIChmaWVsZC5sZW5ndGggPCBtYXgpICYmICgobWluICE9PSB1bmRlZmluZWQgJiYgZmllbGQubGVuZ3RoID4gbWluKSB8fCBtaW4gPT09IHVuZGVmaW5lZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZNb2QxMShkYXRhOiBzdHJpbmcpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHN1bSArPSAocGFyc2VJbnQoZGF0YVtpXSwgMTApICogKGRhdGEubGVuZ3RoIC0gaSArIDEpKTtcbiAgfVxuICByZXR1cm4gc3VtICUgMTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZNb2QxMVN1YjExKGRhdGE6IHN0cmluZykge1xuICBjb25zdCBjID0gY2FsY0R2TW9kMTEoZGF0YSk7XG4gIHJldHVybiBjID4gMCA/IDExIC0gYyA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZBZ2VuY2lhKGJyYW5jaE51bWJlcjogbnVtYmVyfHN0cmluZykge1xuICByZXR1cm4gY2FsY0R2TW9kMTFTdWIxMShicmFuY2hOdW1iZXIucGFkTGVmdCg0LCAnMCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEdkNvbnRhKGFjY291bnROdW1iZXI6IG51bWJlcnxzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbGNEdk1vZDExKGFjY291bnROdW1iZXIudG9TdHJpbmcoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZNb2QxMChkYXRhOiBzdHJpbmcpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwYXJ0aWFsID0gKHBhcnNlSW50KGRhdGFbaV0sIDEwKSAqIChpICUgMiArIDEpKTtcbiAgICBpZiAocGFydGlhbCA+IDkpIHtcbiAgICAgIHBhcnRpYWwgPSBwYXJ0aWFsLnRvU3RyaW5nKCkuc3BsaXQoJycpLm1hcChjID0+IHBhcnNlSW50KGMsIDEwKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgfVxuICAgIHN1bSArPSBwYXJ0aWFsO1xuICB9XG4gIHN1bSAlPSAxMDtcbiAgc3VtID0gc3VtICE9PSAwID8gMTAgLSBzdW0gOiBzdW07XG5cbiAgcmV0dXJuIHN1bTtcbn1cbiJdfQ==