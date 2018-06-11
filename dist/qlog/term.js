'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Lucas Teske on 22/05/18.
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

var _figures = require('figures');

var _figures2 = _interopRequireDefault(_figures);

var _models = require('../models');

var _tools = require('../tools');

var _tools2 = require('../colors/tools');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var getStrColor = function getStrColor(str, color) {
  return !(0, _tools.undefinedOrNull)(str[color]) ? str[color] : str.info;
};

var buildTerminal = function buildTerminal(parent, type) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var msg = {};
  var additional = {};

  if (args.length === 1 && _typeof(args[0]) === 'object' && args[0] !== null) {
    if (args[0] instanceof Error) {
      msg = args[0];
    } else {
      var _args$ = args[0],
          prefix = _args$.prefix,
          message = _args$.message,
          suffix = _args$.suffix;

      msg = message;
      additional = { suffix: suffix, prefix: prefix };
    }
  } else {
    msg = args.join(' ');
  }

  var msgBase = [];
  if (parent.__config__.showDateTime) {
    msgBase.push('[' + (0, _tools.getUTCNow)().white.dim + ']');
  }

  if (parent.__config__.showFilename) {
    msgBase.push('[' + (0, _tools.getCallerFilename)().verbose.bold + ']');
  }

  if (parent.__config__.scope) {
    if (Array.isArray(parent.__config__.scope)) {
      if (parent.__config__.scope.length === 1) {
        msgBase.push('[' + parent.__config__.scope[0].white + ']');
      } else {
        var scopes = parent.__config__.scope.filter(function (x) {
          return x.length !== 0;
        });
        msgBase.push('[' + scopes.reduce(function (a, b) {
          return a.white + ' \u27A1 ' + b.white;
        }) + ']');
      }
    } else {
      msgBase.push('[' + parent.__config__.scope.white + ']');
    }
  }

  if (additional.prefix) {
    msgBase.push(':' + additional.prefix.white.dim + ':');
  }

  if (!(0, _tools.undefinedOrNull)(parent.__config__.headPadding)) {
    var base = msgBase.join(' ');
    var totalLen = base.length;
    var strippedLen = (0, _tools2.stripColors)(base).length;
    var nonPrintableLen = totalLen - strippedLen;
    msgBase.length = 0;
    msgBase.push(base.padEnd(parent.__config__.headPadding + nonPrintableLen));
  }

  if (msgBase.length !== 0) {
    msgBase.push(_figures2.default.pointer);
    msgBase = msgBase.map(function (i) {
      return i.info;
    });
  }

  if (parent.__config__.showBadge && type.badge) {
    msgBase.push(getStrColor(type.badge.padEnd(type.badge.length + 1), type.color));
  }

  if (parent.__config__.showLabel && type.label) {
    msgBase.push('' + getStrColor(type.label.underline, type.color).padEnd(parent.__cache__.longestLabel + 22));
  }

  if (msg instanceof _models.ErrorObject) {
    var _msg = msg,
        errorCode = _msg.errorCode,
        errorField = _msg.errorField,
        _message = _msg.message,
        errorData = _msg.errorData;

    var _base = msgBase.join(' ');
    var _strippedLen = (0, _tools2.stripColors)(_base).length;
    msgBase.push('╔'.white + ' ' + getStrColor('(' + (errorCode || '').warn.bold + ') ' + _message, type.color) + '\n');

    var nextLineChar = parent.__config__.showErrorCodeErrorData ? '╠'.white : '╚'.white;

    msgBase.push((''.padStart(_strippedLen - 1) + ' ' + nextLineChar + '    ' + 'Error Field'.white.bold + ': ' + (errorField || '') + '\n').gray);
    if (parent.__config__.showErrorCodeErrorData) {
      var errorDataString = !(0, _tools.undefinedOrNull)(errorData) && errorData.trim().length !== 0 ? '' + JSON.stringify(JSON.parse(errorData), null, 2) : 'null'.warn.bold;
      var lines = errorDataString.split('\n').filter(function (r) {
        return r.length > 0;
      });
      // msgBase.push(`\n    ${'ErrorData'.white.bold}: ${errorDataString}`.gray);
      msgBase.push(''.padStart(_strippedLen - 1) + ' ' + '╠'.white + '    ' + 'Error Data'.white.bold + ': \n');
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        msgBase.push(''.padStart(_strippedLen - 1));
        var preChar = i === lines.length - 1 ? '╚'.white : '╠'.white;
        msgBase.push(preChar + '        ' + line.gray + '\n');
      }
    }
  } else if (msg instanceof Error) {
    var _msg$stack$split = msg.stack.split('\n'),
        _msg$stack$split2 = _toArray(_msg$stack$split),
        name = _msg$stack$split2[0],
        rest = _msg$stack$split2.slice(1);

    var _lines = [getStrColor(name, type.color)];
    rest.forEach(function (l) {
      _lines.push(l.grey);
    });
    var _base2 = msgBase.join(' ');
    var _strippedLen2 = (0, _tools2.stripColors)(_base2).length;

    if (_lines[_lines.length - 1] === '\x1B[39m') {
      _lines[_lines.length - 2] += '\x1B[39m';
      _lines.splice(_lines.length - 1, 1);
    }

    for (var _i = 0; _i < _lines.length; _i++) {
      var _line = _lines[_i];
      if (_i > 0) {
        var _preChar = _i === _lines.length - 1 ? '╚'.white : '╠'.white;
        msgBase.push(''.padStart(_strippedLen2 - 1));
        msgBase.push(_preChar + ' ' + _line + '\n');
      } else {
        msgBase.push('╔'.white + ' ' + _line + '\n');
      }
    }
  } else if (msg.indexOf('\n') > -1) {
    var _base3 = msgBase.join(' ');
    var _strippedLen3 = (0, _tools2.stripColors)(_base3).length;
    var _lines2 = msg.split('\n').filter(function (r) {
      return r.length > 0;
    });

    if (_lines2[_lines2.length - 1] === '\x1B[39m') {
      _lines2[_lines2.length - 2] += '\x1B[39m';
      _lines2.splice(_lines2.length - 1, 1);
    }

    for (var _i2 = 0; _i2 < _lines2.length; _i2++) {
      var _line2 = _lines2[_i2];
      if (_i2 > 0) {
        var _preChar2 = _i2 === _lines2.length - 1 ? '╚'.white : '╠'.white;
        msgBase.push(''.padStart(_strippedLen3 - 1));
        msgBase.push(_preChar2 + ' ' + getStrColor(_line2, type.color) + '\n');
      } else {
        msgBase.push('╔'.white + ' ' + getStrColor(_line2, type.color) + '\n');
      }
    }
  } else {
    msgBase.push(getStrColor(msg, type.color));
  }
  if (!(0, _tools.undefinedOrNull)(additional.suffix)) {
    msgBase.push(additional.suffix);
  }

  return msgBase.join(' ');
};

var _defaultLog = function _defaultLog(type, parent) {
  for (var _len2 = arguments.length, data = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    data[_key2 - 2] = arguments[_key2];
  }

  if (parent.__disabledLogs__.indexOf(type.name) === -1) {
    console.log(buildTerminal.apply(undefined, [parent, type].concat(data)));
  }
};

var stylesLog = {};

Object.keys(_styles2.default).forEach(function (stl) {
  stylesLog[stl] = _defaultLog.bind(null, _styles2.default[stl]);
});

stylesLog.__normalLog__ = function (parent) {
  for (var _len3 = arguments.length, data = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    data[_key3 - 1] = arguments[_key3];
  }

  return console.log(data.join(' '));
};

exports.default = stylesLog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsImhlYWRQYWRkaW5nIiwiYmFzZSIsInRvdGFsTGVuIiwic3RyaXBwZWRMZW4iLCJub25QcmludGFibGVMZW4iLCJwYWRFbmQiLCJmaWd1cmVzIiwicG9pbnRlciIsIm1hcCIsImkiLCJzaG93QmFkZ2UiLCJiYWRnZSIsInNob3dMYWJlbCIsImxhYmVsIiwidW5kZXJsaW5lIiwiX19jYWNoZV9fIiwibG9uZ2VzdExhYmVsIiwiRXJyb3JPYmplY3QiLCJlcnJvckNvZGUiLCJlcnJvckZpZWxkIiwiZXJyb3JEYXRhIiwid2FybiIsIm5leHRMaW5lQ2hhciIsInNob3dFcnJvckNvZGVFcnJvckRhdGEiLCJwYWRTdGFydCIsImdyYXkiLCJlcnJvckRhdGFTdHJpbmciLCJ0cmltIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibGluZXMiLCJzcGxpdCIsInIiLCJsaW5lIiwicHJlQ2hhciIsInN0YWNrIiwibmFtZSIsInJlc3QiLCJmb3JFYWNoIiwibCIsImdyZXkiLCJzcGxpY2UiLCJpbmRleE9mIiwiX2RlZmF1bHRMb2ciLCJkYXRhIiwiX19kaXNhYmxlZExvZ3NfXyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXNMb2ciLCJPYmplY3QiLCJrZXlzIiwic3R5bGVz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RUFBc0JDLElBQXRCLFNBQStCeUUsSUFBL0IsRUFBWjtBQUNEO0FBQ0YsQ0FKRDs7QUFNQSxJQUFNSSxZQUFZLEVBQWxCOztBQUVBQyxPQUFPQyxJQUFQLENBQVlDLGdCQUFaLEVBQW9CYixPQUFwQixDQUE0QixVQUFDYyxHQUFELEVBQVM7QUFDbkNKLFlBQVVJLEdBQVYsSUFBaUJULFlBQVlVLElBQVosQ0FBaUIsSUFBakIsRUFBdUJGLGlCQUFPQyxHQUFQLENBQXZCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQUosVUFBVU0sYUFBVixHQUEwQixVQUFDcEYsTUFBRDtBQUFBLHFDQUFZMEUsSUFBWjtBQUFZQSxRQUFaO0FBQUE7O0FBQUEsU0FBcUJFLFFBQVFDLEdBQVIsQ0FBWUgsS0FBS2hFLElBQUwsQ0FBVSxHQUFWLENBQVosQ0FBckI7QUFBQSxDQUExQjs7a0JBRWVvRSxTIiwiZmlsZSI6InRlcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjIvMDUvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnO1xuXG5pbXBvcnQgeyBFcnJvck9iamVjdCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge1xuICB1bmRlZmluZWRPck51bGwsXG4gIGdldFVUQ05vdyxcbiAgZ2V0Q2FsbGVyRmlsZW5hbWUsXG59IGZyb20gJy4uL3Rvb2xzJztcblxuaW1wb3J0IHtcbiAgc3RyaXBDb2xvcnMsXG59IGZyb20gJy4uL2NvbG9ycy90b29scyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5cbmNvbnN0IGdldFN0ckNvbG9yID0gKHN0ciwgY29sb3IpID0+ICghdW5kZWZpbmVkT3JOdWxsKHN0cltjb2xvcl0pID8gc3RyW2NvbG9yXSA6IHN0ci5pbmZvKTtcblxuY29uc3QgYnVpbGRUZXJtaW5hbCA9IChwYXJlbnQsIHR5cGUsIC4uLmFyZ3MpID0+IHtcbiAgbGV0IG1zZyA9IHt9O1xuICBsZXQgYWRkaXRpb25hbCA9IHt9O1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsKSB7XG4gICAgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgW21zZ10gPSBhcmdzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbeyBwcmVmaXgsIG1lc3NhZ2UsIHN1ZmZpeCB9XSA9IGFyZ3M7XG4gICAgICBtc2cgPSBtZXNzYWdlO1xuICAgICAgYWRkaXRpb25hbCA9IHsgc3VmZml4LCBwcmVmaXggfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gYXJncy5qb2luKCcgJyk7XG4gIH1cblxuICBsZXQgbXNnQmFzZSA9IFtdO1xuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0RhdGVUaW1lKSB7XG4gICAgbXNnQmFzZS5wdXNoKGBbJHtnZXRVVENOb3coKS53aGl0ZS5kaW19XWApO1xuICB9XG5cbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dGaWxlbmFtZSkge1xuICAgIG1zZ0Jhc2UucHVzaChgWyR7Z2V0Q2FsbGVyRmlsZW5hbWUoKS52ZXJib3NlLmJvbGR9XWApO1xuICB9XG5cbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50Ll9fY29uZmlnX18uc2NvcGUpKSB7XG4gICAgICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2NvcGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgWyR7cGFyZW50Ll9fY29uZmlnX18uc2NvcGVbMF0ud2hpdGV9XWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gcGFyZW50Ll9fY29uZmlnX18uc2NvcGUuZmlsdGVyKHggPT4geC5sZW5ndGggIT09IDApO1xuICAgICAgICBtc2dCYXNlLnB1c2goYFske3Njb3Blcy5yZWR1Y2UoKGEsIGIpID0+IGAke2Eud2hpdGV9IOKeoSAke2Iud2hpdGV9YCl9XWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtc2dCYXNlLnB1c2goYFske3BhcmVudC5fX2NvbmZpZ19fLnNjb3BlLndoaXRlfV1gKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYWRkaXRpb25hbC5wcmVmaXgpIHtcbiAgICBtc2dCYXNlLnB1c2goYDoke2FkZGl0aW9uYWwucHJlZml4LndoaXRlLmRpbX06YCk7XG4gIH1cblxuICBpZiAoIXVuZGVmaW5lZE9yTnVsbChwYXJlbnQuX19jb25maWdfXy5oZWFkUGFkZGluZykpIHtcbiAgICBjb25zdCBiYXNlID0gbXNnQmFzZS5qb2luKCcgJyk7XG4gICAgY29uc3QgdG90YWxMZW4gPSBiYXNlLmxlbmd0aDtcbiAgICBjb25zdCBzdHJpcHBlZExlbiA9IHN0cmlwQ29sb3JzKGJhc2UpLmxlbmd0aDtcbiAgICBjb25zdCBub25QcmludGFibGVMZW4gPSB0b3RhbExlbiAtIHN0cmlwcGVkTGVuO1xuICAgIG1zZ0Jhc2UubGVuZ3RoID0gMDtcbiAgICBtc2dCYXNlLnB1c2goYmFzZS5wYWRFbmQocGFyZW50Ll9fY29uZmlnX18uaGVhZFBhZGRpbmcgKyBub25QcmludGFibGVMZW4pKTtcbiAgfVxuXG4gIGlmIChtc2dCYXNlLmxlbmd0aCAhPT0gMCkge1xuICAgIG1zZ0Jhc2UucHVzaChmaWd1cmVzLnBvaW50ZXIpO1xuICAgIG1zZ0Jhc2UgPSBtc2dCYXNlLm1hcChpID0+IGkuaW5mbyk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0JhZGdlICYmIHR5cGUuYmFkZ2UpIHtcbiAgICBtc2dCYXNlLnB1c2goZ2V0U3RyQ29sb3IodHlwZS5iYWRnZS5wYWRFbmQodHlwZS5iYWRnZS5sZW5ndGggKyAxKSwgdHlwZS5jb2xvcikpO1xuICB9XG5cbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dMYWJlbCAmJiB0eXBlLmxhYmVsKSB7XG4gICAgbXNnQmFzZS5wdXNoKGAke2dldFN0ckNvbG9yKHR5cGUubGFiZWwudW5kZXJsaW5lLCB0eXBlLmNvbG9yKS5wYWRFbmQocGFyZW50Ll9fY2FjaGVfXy5sb25nZXN0TGFiZWwgKyAyMil9YCk7XG4gIH1cblxuICBpZiAobXNnIGluc3RhbmNlb2YgRXJyb3JPYmplY3QpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvckNvZGUsXG4gICAgICBlcnJvckZpZWxkLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGVycm9yRGF0YSxcbiAgICB9ID0gbXNnO1xuICAgIGNvbnN0IGJhc2UgPSBtc2dCYXNlLmpvaW4oJyAnKTtcbiAgICBjb25zdCBzdHJpcHBlZExlbiA9IHN0cmlwQ29sb3JzKGJhc2UpLmxlbmd0aDtcbiAgICBtc2dCYXNlLnB1c2goYCR7J+KVlCcud2hpdGV9ICR7Z2V0U3RyQ29sb3IoYCgkeyhlcnJvckNvZGUgfHwgJycpLndhcm4uYm9sZH0pICR7bWVzc2FnZX1gLCB0eXBlLmNvbG9yKX1cXG5gKTtcblxuICAgIGNvbnN0IG5leHRMaW5lQ2hhciA9IHBhcmVudC5fX2NvbmZpZ19fLnNob3dFcnJvckNvZGVFcnJvckRhdGEgPyAn4pWgJy53aGl0ZSA6ICfilZonLndoaXRlO1xuXG4gICAgbXNnQmFzZS5wdXNoKGAkeycnLnBhZFN0YXJ0KHN0cmlwcGVkTGVuIC0gMSl9ICR7bmV4dExpbmVDaGFyfSAgICAkeydFcnJvciBGaWVsZCcud2hpdGUuYm9sZH06ICR7KGVycm9yRmllbGQgfHwgJycpfVxcbmAuZ3JheSk7XG4gICAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dFcnJvckNvZGVFcnJvckRhdGEpIHtcbiAgICAgIGNvbnN0IGVycm9yRGF0YVN0cmluZyA9ICF1bmRlZmluZWRPck51bGwoZXJyb3JEYXRhKSAmJiBlcnJvckRhdGEudHJpbSgpLmxlbmd0aCAhPT0gMCA/XG4gICAgICAgIGAke0pTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoZXJyb3JEYXRhKSwgbnVsbCwgMil9YCA6XG4gICAgICAgICdudWxsJy53YXJuLmJvbGQ7XG4gICAgICBjb25zdCBsaW5lcyA9IGVycm9yRGF0YVN0cmluZy5zcGxpdCgnXFxuJykuZmlsdGVyKHIgPT4gci5sZW5ndGggPiAwKTtcbiAgICAgIC8vIG1zZ0Jhc2UucHVzaChgXFxuICAgICR7J0Vycm9yRGF0YScud2hpdGUuYm9sZH06ICR7ZXJyb3JEYXRhU3RyaW5nfWAuZ3JheSk7XG4gICAgICBtc2dCYXNlLnB1c2goYCR7JycucGFkU3RhcnQoc3RyaXBwZWRMZW4gLSAxKX0gJHsn4pWgJy53aGl0ZX0gICAgJHsnRXJyb3IgRGF0YScud2hpdGUuYm9sZH06IFxcbmApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIG1zZ0Jhc2UucHVzaCgnJy5wYWRTdGFydChzdHJpcHBlZExlbiAtIDEpKTtcbiAgICAgICAgY29uc3QgcHJlQ2hhciA9IGkgPT09IGxpbmVzLmxlbmd0aCAtIDEgPyAn4pWaJy53aGl0ZSA6ICfilaAnLndoaXRlO1xuICAgICAgICBtc2dCYXNlLnB1c2goYCR7cHJlQ2hhcn0gICAgICAgICR7bGluZS5ncmF5fVxcbmApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIGNvbnN0IFtuYW1lLCAuLi5yZXN0XSA9IG1zZy5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3QgbGluZXMgPSBbZ2V0U3RyQ29sb3IobmFtZSwgdHlwZS5jb2xvcildO1xuICAgIHJlc3QuZm9yRWFjaCgobCkgPT4geyBsaW5lcy5wdXNoKGwuZ3JleSk7IH0pO1xuICAgIGNvbnN0IGJhc2UgPSBtc2dCYXNlLmpvaW4oJyAnKTtcbiAgICBjb25zdCBzdHJpcHBlZExlbiA9IHN0cmlwQ29sb3JzKGJhc2UpLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9PT0gJ1xcdTAwMWJbMzltJykge1xuICAgICAgbGluZXNbbGluZXMubGVuZ3RoIC0gMl0gKz0gJ1xcdTAwMWJbMzltJztcbiAgICAgIGxpbmVzLnNwbGljZShsaW5lcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgY29uc3QgcHJlQ2hhciA9IGkgPT09IGxpbmVzLmxlbmd0aCAtIDEgPyAn4pWaJy53aGl0ZSA6ICfilaAnLndoaXRlO1xuICAgICAgICBtc2dCYXNlLnB1c2goJycucGFkU3RhcnQoc3RyaXBwZWRMZW4gLSAxKSk7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgJHtwcmVDaGFyfSAke2xpbmV9XFxuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2dCYXNlLnB1c2goYCR7J+KVlCcud2hpdGV9ICR7bGluZX1cXG5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICBjb25zdCBiYXNlID0gbXNnQmFzZS5qb2luKCcgJyk7XG4gICAgY29uc3Qgc3RyaXBwZWRMZW4gPSBzdHJpcENvbG9ycyhiYXNlKS5sZW5ndGg7XG4gICAgY29uc3QgbGluZXMgPSBtc2cuc3BsaXQoJ1xcbicpLmZpbHRlcihyID0+IHIubGVuZ3RoID4gMCk7XG5cbiAgICBpZiAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gPT09ICdcXHUwMDFiWzM5bScpIHtcbiAgICAgIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDJdICs9ICdcXHUwMDFiWzM5bSc7XG4gICAgICBsaW5lcy5zcGxpY2UobGluZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGNvbnN0IHByZUNoYXIgPSBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gJ+KVmicud2hpdGUgOiAn4pWgJy53aGl0ZTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKCcnLnBhZFN0YXJ0KHN0cmlwcGVkTGVuIC0gMSkpO1xuICAgICAgICBtc2dCYXNlLnB1c2goYCR7cHJlQ2hhcn0gJHtnZXRTdHJDb2xvcihsaW5lLCB0eXBlLmNvbG9yKX1cXG5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgJHsn4pWUJy53aGl0ZX0gJHtnZXRTdHJDb2xvcihsaW5lLCB0eXBlLmNvbG9yKX1cXG5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKG1zZywgdHlwZS5jb2xvcikpO1xuICB9XG4gIGlmICghdW5kZWZpbmVkT3JOdWxsKGFkZGl0aW9uYWwuc3VmZml4KSkge1xuICAgIG1zZ0Jhc2UucHVzaChhZGRpdGlvbmFsLnN1ZmZpeCk7XG4gIH1cblxuICByZXR1cm4gbXNnQmFzZS5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBfZGVmYXVsdExvZyA9ICh0eXBlLCBwYXJlbnQsIC4uLmRhdGEpID0+IHtcbiAgaWYgKHBhcmVudC5fX2Rpc2FibGVkTG9nc19fLmluZGV4T2YodHlwZS5uYW1lKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLmxvZyhidWlsZFRlcm1pbmFsKHBhcmVudCwgdHlwZSwgLi4uZGF0YSkpO1xuICB9XG59O1xuXG5jb25zdCBzdHlsZXNMb2cgPSB7fTtcblxuT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChzdGwpID0+IHtcbiAgc3R5bGVzTG9nW3N0bF0gPSBfZGVmYXVsdExvZy5iaW5kKG51bGwsIHN0eWxlc1tzdGxdKTtcbn0pO1xuXG5zdHlsZXNMb2cuX19ub3JtYWxMb2dfXyA9IChwYXJlbnQsIC4uLmRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEuam9pbignICcpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzTG9nO1xuIl19