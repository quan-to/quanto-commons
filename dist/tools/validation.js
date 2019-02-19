'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 20/04/17.
 * 
 */

exports.isRunningInNodeJS = isRunningInNodeJS;
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
exports.cleanUndefinedMembers = cleanUndefinedMembers;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isRunningInNodeJS() {
  return typeof module !== 'undefined' && module.exports;
}

function normalizeXMLJSObjectProperties(obj) {
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
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateCPF(cpfO) {
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

  if (resultado !== parseInt(digits.charAt(1), 10)) {
    return false;
  }

  // According to:
  // - http://www.receita.fazenda.gov.br/publico/Legislacao/atos/AtosConjuntos/AnexoIADEConjuntoCoratCotec0012002.doc
  // There are few edge cases.
  // If the starting is 000.000.00, then all cases are valid, but if not:
  // The branch number of the company cannot be higher than 0300.
  var branchNumber = parseInt(cnpj.substr(8, 4), 10);
  var baseNumber = parseInt(cnpj.substr(0, 8), 10);

  if (branchNumber === 0) {
    // The branch number starts with 1
    return false;
  }

  if (baseNumber !== 0) {
    // Base Number != the branch Number cannot be higher than 300.
    return branchNumber <= 300;
  }

  return true;
}

function undefinedOrNull(field) {
  return field === undefined || field === null;
}

function validateField(fieldValue, validationFn) {
  return validationFn(fieldValue);
}

function validateDateFormat(field, format) {
  return (0, _moment2.default)(field, format, true).isValid();
}

function validateStringLength(field, max, min) {
  return field.length < max && (min !== undefined && field.length > min || min === undefined);
}

function calcDvMod11(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += parseInt(data[i], 10) * (data.length - i + 1);
  }
  return sum % 11;
}

function calcDvMod11Sub11(data) {
  var c = calcDvMod11(data);
  return c > 0 ? 11 - c : 0;
}

function calcDvAgencia(branchNumber) {
  return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}

function calcDvConta(accountNumber) {
  return calcDvMod11(accountNumber.toString()) % 10;
}

function calcDvMod10(data) {
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

function cleanUndefinedMembers(obj) {
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && _typeof(obj[key]) === 'object') {
      cleanUndefinedMembers(obj[key]);
    } else if (obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbImlzUnVubmluZ0luTm9kZUpTIiwibm9ybWFsaXplWE1MSlNPYmplY3RQcm9wZXJ0aWVzIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkYXRlQ1BGIiwidmFsaWRhdGVDTlBKIiwidW5kZWZpbmVkT3JOdWxsIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRlRGF0ZUZvcm1hdCIsInZhbGlkYXRlU3RyaW5nTGVuZ3RoIiwiY2FsY0R2TW9kMTEiLCJjYWxjRHZNb2QxMVN1YjExIiwiY2FsY0R2QWdlbmNpYSIsImNhbGNEdkNvbnRhIiwiY2FsY0R2TW9kMTAiLCJjbGVhblVuZGVmaW5lZE1lbWJlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm5PYmoiLCJpIiwibGVuZ3RoIiwiayIsInQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b0xvd2VyQ2FzZSIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3BmTyIsInN1bSIsImhhc2giLCJ1bmRlZmluZWQiLCJjcGYiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJjbnBqTyIsImNucGoiLCJzaXplIiwibnVtYmVycyIsImRpZ2l0cyIsInBvcyIsImNoYXJBdCIsInJlc3VsdGFkbyIsImJyYW5jaE51bWJlciIsInN1YnN0ciIsImJhc2VOdW1iZXIiLCJmaWVsZCIsImZpZWxkVmFsdWUiLCJ2YWxpZGF0aW9uRm4iLCJmb3JtYXQiLCJpc1ZhbGlkIiwibWF4IiwibWluIiwiZGF0YSIsImMiLCJwYWRMZWZ0IiwiYWNjb3VudE51bWJlciIsInRvU3RyaW5nIiwicGFydGlhbCIsInNwbGl0IiwibWFwIiwicmVkdWNlIiwiYSIsImIiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OFFBQUE7QUFDQTs7Ozs7UUFPZ0JBLGlCLEdBQUFBLGlCO1FBRUFDLDhCLEdBQUFBLDhCO1FBaUJBQyxh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QXVCQSxHQUE3Qjs7QUFFQSxTQUFPQSxHQUFQO0FBQ0Q7O0FBRU0sU0FBU25CLHFCQUFULENBQStCRyxHQUEvQixFQUFvQztBQUN6Q0UsU0FBT0QsSUFBUCxDQUFZRCxHQUFaLEVBQWlCb0QsT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDLFFBQUlyRCxJQUFJcUQsR0FBSixLQUFZLFFBQU9yRCxJQUFJcUQsR0FBSixDQUFQLE1BQW9CLFFBQXBDLEVBQThDO0FBQzVDeEQsNEJBQXNCRyxJQUFJcUQsR0FBSixDQUF0QjtBQUNELEtBRkQsTUFFTyxJQUFJckQsSUFBSXFELEdBQUosTUFBYW5DLFNBQWpCLEVBQTRCO0FBQ2pDLGFBQU9sQixJQUFJcUQsR0FBSixDQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQU9yRCxHQUFQO0FBQ0QiLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjAvMDQvMTcuXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZ0luTm9kZUpTKCkgeyByZXR1cm4gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHM7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmo6IE9iamVjdCkgOiBPYmplY3Qge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgY29uc3Qgbk9iaiA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5vcm1hbGl6ZVhNTEpTT2JqZWN0UHJvcGVydGllcyhvYmpba10pO1xuICAgIH1cbiAgICBjb25zdCB0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmpba11bMF0pKTtcbiAgICBpZiAodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5PYmpbay50b0xvd2VyQ2FzZSgpXSA9IHQgIT09ICdOVUxMJyA/IHQgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ1BGKGNwZk86IHN0cmluZykgOiBib29sZWFuIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBoYXNoO1xuXG4gIGlmIChjcGZPID09PSB1bmRlZmluZWQgfHwgY3BmTyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNwZiA9IGNwZk8ucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG5cbiAgaWYgKGNwZi5sZW5ndGggIT09ICcwMDAwMDAwMDAwMCcubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNwZiA9PT0gJzAwMDAwMDAwMDAwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIHN1bSArPSBwYXJzZUludChjcGYuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gIH1cblxuICBoYXNoID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gIGlmICgoaGFzaCA9PT0gMTApIHx8IChoYXNoID09PSAxMSkpIHtcbiAgICBoYXNoID0gMDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSBwYXJzZUludChjcGYuc3Vic3RyaW5nKDksIDEwKSwgMTApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVmVyaWZpY2F0aW9uIGRpZ2l0XG4gIHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xuICB9XG5cbiAgaGFzaCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICBpZiAoKGhhc2ggPT09IDEwKSB8fCAoaGFzaCA9PT0gMTEpKSB7XG4gICAgaGFzaCA9IDA7XG4gIH1cblxuICByZXR1cm4gaGFzaCA9PT0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZygxMCwgMTEpLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNOUEooY25wak86IHN0cmluZykgOiBib29sZWFuIHtcbiAgaWYgKGNucGpPID09PSB1bmRlZmluZWQgfHwgY25wak8gPT09IG51bGwgfHwgY25wak8ubGVuZ3RoICE9PSAxNCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNucGogPSBjbnBqTy5yZXBsYWNlKC9bXlxcZF0rL2csICcnKTtcblxuICBpZiAoXG4gICAgY25wai5sZW5ndGggPT09IDAgfHxcbiAgICBjbnBqLmxlbmd0aCAhPT0gMTQgfHxcbiAgICBjbnBqID09PSAnMDAwMDAwMDAwMDAwMDAnIHx8XG4gICAgY25waiA9PT0gJzExMTExMTExMTExMTExJyB8fFxuICAgIGNucGogPT09ICcyMjIyMjIyMjIyMjIyMicgfHxcbiAgICBjbnBqID09PSAnMzMzMzMzMzMzMzMzMzMnIHx8XG4gICAgY25waiA9PT0gJzQ0NDQ0NDQ0NDQ0NDQ0JyB8fFxuICAgIGNucGogPT09ICc1NTU1NTU1NTU1NTU1NScgfHxcbiAgICBjbnBqID09PSAnNjY2NjY2NjY2NjY2NjYnIHx8XG4gICAgY25waiA9PT0gJzc3Nzc3Nzc3Nzc3Nzc3JyB8fFxuICAgIGNucGogPT09ICc4ODg4ODg4ODg4ODg4OCcgfHxcbiAgICBjbnBqID09PSAnOTk5OTk5OTk5OTk5OTknXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBzaXplID0gY25wai5sZW5ndGggLSAyO1xuICBsZXQgbnVtYmVycyA9IGNucGouc3Vic3RyaW5nKDAsIHNpemUpO1xuICBjb25zdCBkaWdpdHMgPSBjbnBqLnN1YnN0cmluZyhzaXplKTtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBwb3MgPSBzaXplIC0gNztcbiAgZm9yIChsZXQgaSA9IHNpemU7IGkgPj0gMTsgaS0tKSB7XG4gICAgc3VtICs9IHBhcnNlSW50KG51bWJlcnMuY2hhckF0KHNpemUgLSBpKSwgMTApICogcG9zLS07XG4gICAgaWYgKHBvcyA8IDIpIHtcbiAgICAgIHBvcyA9IDk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdGFkbyA9IHN1bSAlIDExIDwgMiA/IDAgOiAxMSAtIChzdW0gJSAxMSk7XG4gIGlmIChyZXN1bHRhZG8gIT09IHBhcnNlSW50KGRpZ2l0cy5jaGFyQXQoMCksIDEwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNpemUgKz0gMTtcbiAgbnVtYmVycyA9IGNucGouc3Vic3RyaW5nKDAsIHNpemUpO1xuICBzdW0gPSAwO1xuICBwb3MgPSBzaXplIC0gNztcblxuICBmb3IgKGxldCBpID0gc2l6ZTsgaSA+PSAxOyBpLS0pIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQobnVtYmVycy5jaGFyQXQoc2l6ZSAtIGkpLCAxMCkgKiBwb3MtLTtcbiAgICBpZiAocG9zIDwgMikge1xuICAgICAgcG9zID0gOTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0YWRvID0gc3VtICUgMTEgPCAyID8gMCA6IDExIC0gKHN1bSAlIDExKTtcblxuICBpZiAocmVzdWx0YWRvICE9PSBwYXJzZUludChkaWdpdHMuY2hhckF0KDEpLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBBY2NvcmRpbmcgdG86XG4gIC8vIC0gaHR0cDovL3d3dy5yZWNlaXRhLmZhemVuZGEuZ292LmJyL3B1YmxpY28vTGVnaXNsYWNhby9hdG9zL0F0b3NDb25qdW50b3MvQW5leG9JQURFQ29uanVudG9Db3JhdENvdGVjMDAxMjAwMi5kb2NcbiAgLy8gVGhlcmUgYXJlIGZldyBlZGdlIGNhc2VzLlxuICAvLyBJZiB0aGUgc3RhcnRpbmcgaXMgMDAwLjAwMC4wMCwgdGhlbiBhbGwgY2FzZXMgYXJlIHZhbGlkLCBidXQgaWYgbm90OlxuICAvLyBUaGUgYnJhbmNoIG51bWJlciBvZiB0aGUgY29tcGFueSBjYW5ub3QgYmUgaGlnaGVyIHRoYW4gMDMwMC5cbiAgY29uc3QgYnJhbmNoTnVtYmVyID0gcGFyc2VJbnQoY25wai5zdWJzdHIoOCwgNCksIDEwKTtcbiAgY29uc3QgYmFzZU51bWJlciA9IHBhcnNlSW50KGNucGouc3Vic3RyKDAsIDgpLCAxMCk7XG5cbiAgaWYgKGJyYW5jaE51bWJlciA9PT0gMCkgeyAvLyBUaGUgYnJhbmNoIG51bWJlciBzdGFydHMgd2l0aCAxXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGJhc2VOdW1iZXIgIT09IDApIHsgLy8gQmFzZSBOdW1iZXIgIT0gdGhlIGJyYW5jaCBOdW1iZXIgY2Fubm90IGJlIGhpZ2hlciB0aGFuIDMwMC5cbiAgICByZXR1cm4gYnJhbmNoTnVtYmVyIDw9IDMwMDtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZWZpbmVkT3JOdWxsKGZpZWxkOiBhbnkpIHtcbiAgcmV0dXJuIGZpZWxkID09PSB1bmRlZmluZWQgfHwgZmllbGQgPT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKGZpZWxkVmFsdWU6IGFueSwgdmFsaWRhdGlvbkZuOiBhbnkpIDogYm9vbGVhbiB7XG4gIHJldHVybiB2YWxpZGF0aW9uRm4oZmllbGRWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZURhdGVGb3JtYXQoZmllbGQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG1vbWVudChmaWVsZCwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ0xlbmd0aChmaWVsZDogc3RyaW5nLCBtYXg6IG51bWJlciwgbWluOiBudW1iZXIgfCB2b2lkKSB7XG4gIHJldHVybiAoZmllbGQubGVuZ3RoIDwgbWF4KSAmJiAoKG1pbiAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmxlbmd0aCA+IG1pbikgfHwgbWluID09PSB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0R2TW9kMTEoZGF0YTogc3RyaW5nKSB7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBzdW0gKz0gKHBhcnNlSW50KGRhdGFbaV0sIDEwKSAqICgoZGF0YS5sZW5ndGggLSBpKSArIDEpKTtcbiAgfVxuICByZXR1cm4gc3VtICUgMTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZNb2QxMVN1YjExKGRhdGE6IHN0cmluZykge1xuICBjb25zdCBjID0gY2FsY0R2TW9kMTEoZGF0YSk7XG4gIHJldHVybiBjID4gMCA/IDExIC0gYyA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZBZ2VuY2lhKGJyYW5jaE51bWJlcjogbnVtYmVyfHN0cmluZykge1xuICByZXR1cm4gY2FsY0R2TW9kMTFTdWIxMShicmFuY2hOdW1iZXIucGFkTGVmdCg0LCAnMCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEdkNvbnRhKGFjY291bnROdW1iZXI6IG51bWJlcnxzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbGNEdk1vZDExKGFjY291bnROdW1iZXIudG9TdHJpbmcoKSkgJSAxMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEdk1vZDEwKGRhdGE6IHN0cmluZykge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBhcnRpYWwgPSAocGFyc2VJbnQoZGF0YVtpXSwgMTApICogKChpICUgMikgKyAxKSk7XG4gICAgaWYgKHBhcnRpYWwgPiA5KSB7XG4gICAgICBwYXJ0aWFsID0gcGFydGlhbC50b1N0cmluZygpLnNwbGl0KCcnKS5tYXAoYyA9PiBwYXJzZUludChjLCAxMCkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgIH1cbiAgICBzdW0gKz0gcGFydGlhbDtcbiAgfVxuICBzdW0gJT0gMTA7XG4gIHN1bSA9IHN1bSAhPT0gMCA/IDEwIC0gc3VtIDogc3VtO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblVuZGVmaW5lZE1lbWJlcnMob2JqKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKG9ialtrZXldICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNsZWFuVW5kZWZpbmVkTWVtYmVycyhvYmpba2V5XSk7XG4gICAgfSBlbHNlIGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb2JqO1xufVxuIl19