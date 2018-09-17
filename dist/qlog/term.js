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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsImhlYWRQYWRkaW5nIiwiYmFzZSIsInRvdGFsTGVuIiwic3RyaXBwZWRMZW4iLCJub25QcmludGFibGVMZW4iLCJwYWRFbmQiLCJmaWd1cmVzIiwicG9pbnRlciIsIm1hcCIsImkiLCJzaG93QmFkZ2UiLCJiYWRnZSIsInNob3dMYWJlbCIsImxhYmVsIiwidW5kZXJsaW5lIiwiX19jYWNoZV9fIiwibG9uZ2VzdExhYmVsIiwiRXJyb3JPYmplY3QiLCJlcnJvckNvZGUiLCJlcnJvckZpZWxkIiwiZXJyb3JEYXRhIiwid2FybiIsIm5leHRMaW5lQ2hhciIsInNob3dFcnJvckNvZGVFcnJvckRhdGEiLCJwYWRTdGFydCIsImdyYXkiLCJlcnJvckRhdGFTdHJpbmciLCJ0cmltIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibGluZXMiLCJzcGxpdCIsInIiLCJsaW5lIiwicHJlQ2hhciIsInN0YWNrIiwibmFtZSIsInJlc3QiLCJmb3JFYWNoIiwibCIsImdyZXkiLCJzcGxpY2UiLCJpbmRleE9mIiwiX2RlZmF1bHRMb2ciLCJkYXRhIiwiX19kaXNhYmxlZExvZ3NfXyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXNMb2ciLCJPYmplY3QiLCJrZXlzIiwic3R5bGVz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RUFBc0JDLElBQXRCLFNBQStCeUUsSUFBL0IsRUFBWjtBQUNEO0FBQ0YsQ0FKRDs7QUFNQSxJQUFNSSxZQUFZLEVBQWxCOztBQUVBQyxPQUFPQyxJQUFQLENBQVlDLGdCQUFaLEVBQW9CYixPQUFwQixDQUE0QixVQUFDYyxHQUFELEVBQVM7QUFDbkNKLFlBQVVJLEdBQVYsSUFBaUJULFlBQVlVLElBQVosQ0FBaUIsSUFBakIsRUFBdUJGLGlCQUFPQyxHQUFQLENBQXZCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQUosVUFBVU0sYUFBVixHQUEwQixVQUFDcEYsTUFBRDtBQUFBLHFDQUFZMEUsSUFBWjtBQUFZQSxRQUFaO0FBQUE7O0FBQUEsU0FBcUJFLFFBQVFDLEdBQVIsQ0FBWUgsS0FBS2hFLElBQUwsQ0FBVSxHQUFWLENBQVosQ0FBckI7QUFBQSxDQUExQjs7a0JBRWVvRSxTIiwiZmlsZSI6InRlcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjIvMDUvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnO1xuXG5pbXBvcnQgeyBFcnJvck9iamVjdCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge1xuICB1bmRlZmluZWRPck51bGwsXG4gIGdldFVUQ05vdyxcbiAgZ2V0Q2FsbGVyRmlsZW5hbWUsXG59IGZyb20gJy4uL3Rvb2xzJztcblxuaW1wb3J0IHsgc3RyaXBDb2xvcnMgfSBmcm9tICcuLi9jb2xvcnMvdG9vbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuXG5jb25zdCBnZXRTdHJDb2xvciA9IChzdHIsIGNvbG9yKSA9PiAoIXVuZGVmaW5lZE9yTnVsbChzdHJbY29sb3JdKSA/IHN0cltjb2xvcl0gOiBzdHIuaW5mbyk7XG5cbmNvbnN0IGJ1aWxkVGVybWluYWwgPSAocGFyZW50LCB0eXBlLCAuLi5hcmdzKSA9PiB7XG4gIGxldCBtc2cgPSB7fTtcbiAgbGV0IGFkZGl0aW9uYWwgPSB7fTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIChhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCkge1xuICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIFttc2ddID0gYXJncztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgW3sgcHJlZml4LCBtZXNzYWdlLCBzdWZmaXggfV0gPSBhcmdzO1xuICAgICAgbXNnID0gbWVzc2FnZTtcbiAgICAgIGFkZGl0aW9uYWwgPSB7IHN1ZmZpeCwgcHJlZml4IH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IGFyZ3Muam9pbignICcpO1xuICB9XG5cbiAgbGV0IG1zZ0Jhc2UgPSBbXTtcbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dEYXRlVGltZSkge1xuICAgIG1zZ0Jhc2UucHVzaChgWyR7Z2V0VVRDTm93KCkud2hpdGUuZGltfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RmlsZW5hbWUpIHtcbiAgICBtc2dCYXNlLnB1c2goYFske2dldENhbGxlckZpbGVuYW1lKCkudmVyYm9zZS5ib2xkfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zY29wZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlKSkge1xuICAgICAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBtc2dCYXNlLnB1c2goYFske3BhcmVudC5fX2NvbmZpZ19fLnNjb3BlWzBdLndoaXRlfV1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlLmZpbHRlcih4ID0+IHgubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGBbJHtzY29wZXMucmVkdWNlKChhLCBiKSA9PiBgJHthLndoaXRlfSDinqEgJHtiLndoaXRlfWApfV1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbXNnQmFzZS5wdXNoKGBbJHtwYXJlbnQuX19jb25maWdfXy5zY29wZS53aGl0ZX1dYCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFkZGl0aW9uYWwucHJlZml4KSB7XG4gICAgbXNnQmFzZS5wdXNoKGA6JHthZGRpdGlvbmFsLnByZWZpeC53aGl0ZS5kaW19OmApO1xuICB9XG5cbiAgaWYgKCF1bmRlZmluZWRPck51bGwocGFyZW50Ll9fY29uZmlnX18uaGVhZFBhZGRpbmcpKSB7XG4gICAgY29uc3QgYmFzZSA9IG1zZ0Jhc2Uuam9pbignICcpO1xuICAgIGNvbnN0IHRvdGFsTGVuID0gYmFzZS5sZW5ndGg7XG4gICAgY29uc3Qgc3RyaXBwZWRMZW4gPSBzdHJpcENvbG9ycyhiYXNlKS5sZW5ndGg7XG4gICAgY29uc3Qgbm9uUHJpbnRhYmxlTGVuID0gdG90YWxMZW4gLSBzdHJpcHBlZExlbjtcbiAgICBtc2dCYXNlLmxlbmd0aCA9IDA7XG4gICAgbXNnQmFzZS5wdXNoKGJhc2UucGFkRW5kKHBhcmVudC5fX2NvbmZpZ19fLmhlYWRQYWRkaW5nICsgbm9uUHJpbnRhYmxlTGVuKSk7XG4gIH1cblxuICBpZiAobXNnQmFzZS5sZW5ndGggIT09IDApIHtcbiAgICBtc2dCYXNlLnB1c2goZmlndXJlcy5wb2ludGVyKTtcbiAgICBtc2dCYXNlID0gbXNnQmFzZS5tYXAoaSA9PiBpLmluZm8pO1xuICB9XG5cbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dCYWRnZSAmJiB0eXBlLmJhZGdlKSB7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKHR5cGUuYmFkZ2UucGFkRW5kKHR5cGUuYmFkZ2UubGVuZ3RoICsgMSksIHR5cGUuY29sb3IpKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93TGFiZWwgJiYgdHlwZS5sYWJlbCkge1xuICAgIG1zZ0Jhc2UucHVzaChgJHtnZXRTdHJDb2xvcih0eXBlLmxhYmVsLnVuZGVybGluZSwgdHlwZS5jb2xvcikucGFkRW5kKHBhcmVudC5fX2NhY2hlX18ubG9uZ2VzdExhYmVsICsgMjIpfWApO1xuICB9XG5cbiAgaWYgKG1zZyBpbnN0YW5jZW9mIEVycm9yT2JqZWN0KSB7XG4gICAgY29uc3Qge1xuICAgICAgZXJyb3JDb2RlLFxuICAgICAgZXJyb3JGaWVsZCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBlcnJvckRhdGEsXG4gICAgfSA9IG1zZztcbiAgICBjb25zdCBiYXNlID0gbXNnQmFzZS5qb2luKCcgJyk7XG4gICAgY29uc3Qgc3RyaXBwZWRMZW4gPSBzdHJpcENvbG9ycyhiYXNlKS5sZW5ndGg7XG4gICAgbXNnQmFzZS5wdXNoKGAkeyfilZQnLndoaXRlfSAke2dldFN0ckNvbG9yKGAoJHsoZXJyb3JDb2RlIHx8ICcnKS53YXJuLmJvbGR9KSAke21lc3NhZ2V9YCwgdHlwZS5jb2xvcil9XFxuYCk7XG5cbiAgICBjb25zdCBuZXh0TGluZUNoYXIgPSBwYXJlbnQuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhID8gJ+KVoCcud2hpdGUgOiAn4pWaJy53aGl0ZTtcblxuICAgIG1zZ0Jhc2UucHVzaChgJHsnJy5wYWRTdGFydChzdHJpcHBlZExlbiAtIDEpfSAke25leHRMaW5lQ2hhcn0gICAgJHsnRXJyb3IgRmllbGQnLndoaXRlLmJvbGR9OiAkeyhlcnJvckZpZWxkIHx8ICcnKX1cXG5gLmdyYXkpO1xuICAgIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhKSB7XG4gICAgICBjb25zdCBlcnJvckRhdGFTdHJpbmcgPSAhdW5kZWZpbmVkT3JOdWxsKGVycm9yRGF0YSkgJiYgZXJyb3JEYXRhLnRyaW0oKS5sZW5ndGggIT09IDAgP1xuICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKGVycm9yRGF0YSksIG51bGwsIDIpfWAgOlxuICAgICAgICAnbnVsbCcud2Fybi5ib2xkO1xuICAgICAgY29uc3QgbGluZXMgPSBlcnJvckRhdGFTdHJpbmcuc3BsaXQoJ1xcbicpLmZpbHRlcihyID0+IHIubGVuZ3RoID4gMCk7XG4gICAgICAvLyBtc2dCYXNlLnB1c2goYFxcbiAgICAkeydFcnJvckRhdGEnLndoaXRlLmJvbGR9OiAke2Vycm9yRGF0YVN0cmluZ31gLmdyYXkpO1xuICAgICAgbXNnQmFzZS5wdXNoKGAkeycnLnBhZFN0YXJ0KHN0cmlwcGVkTGVuIC0gMSl9ICR7J+KVoCcud2hpdGV9ICAgICR7J0Vycm9yIERhdGEnLndoaXRlLmJvbGR9OiBcXG5gKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBtc2dCYXNlLnB1c2goJycucGFkU3RhcnQoc3RyaXBwZWRMZW4gLSAxKSk7XG4gICAgICAgIGNvbnN0IHByZUNoYXIgPSBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gJ+KVmicud2hpdGUgOiAn4pWgJy53aGl0ZTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGAke3ByZUNoYXJ9ICAgICAgICAke2xpbmUuZ3JheX1cXG5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBtc2cuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IGxpbmVzID0gW2dldFN0ckNvbG9yKG5hbWUsIHR5cGUuY29sb3IpXTtcbiAgICByZXN0LmZvckVhY2goKGwpID0+IHsgbGluZXMucHVzaChsLmdyZXkpOyB9KTtcbiAgICBjb25zdCBiYXNlID0gbXNnQmFzZS5qb2luKCcgJyk7XG4gICAgY29uc3Qgc3RyaXBwZWRMZW4gPSBzdHJpcENvbG9ycyhiYXNlKS5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gPT09ICdcXHUwMDFiWzM5bScpIHtcbiAgICAgIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDJdICs9ICdcXHUwMDFiWzM5bSc7XG4gICAgICBsaW5lcy5zcGxpY2UobGluZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGNvbnN0IHByZUNoYXIgPSBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gJ+KVmicud2hpdGUgOiAn4pWgJy53aGl0ZTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKCcnLnBhZFN0YXJ0KHN0cmlwcGVkTGVuIC0gMSkpO1xuICAgICAgICBtc2dCYXNlLnB1c2goYCR7cHJlQ2hhcn0gJHtsaW5lfVxcbmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGAkeyfilZQnLndoaXRlfSAke2xpbmV9XFxuYCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKG1zZy5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgY29uc3QgYmFzZSA9IG1zZ0Jhc2Uuam9pbignICcpO1xuICAgIGNvbnN0IHN0cmlwcGVkTGVuID0gc3RyaXBDb2xvcnMoYmFzZSkubGVuZ3RoO1xuICAgIGNvbnN0IGxpbmVzID0gbXNnLnNwbGl0KCdcXG4nKS5maWx0ZXIociA9PiByLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdID09PSAnXFx1MDAxYlszOW0nKSB7XG4gICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAyXSArPSAnXFx1MDAxYlszOW0nO1xuICAgICAgbGluZXMuc3BsaWNlKGxpbmVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBjb25zdCBwcmVDaGFyID0gaSA9PT0gbGluZXMubGVuZ3RoIC0gMSA/ICfilZonLndoaXRlIDogJ+KVoCcud2hpdGU7XG4gICAgICAgIG1zZ0Jhc2UucHVzaCgnJy5wYWRTdGFydChzdHJpcHBlZExlbiAtIDEpKTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGAke3ByZUNoYXJ9ICR7Z2V0U3RyQ29sb3IobGluZSwgdHlwZS5jb2xvcil9XFxuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2dCYXNlLnB1c2goYCR7J+KVlCcud2hpdGV9ICR7Z2V0U3RyQ29sb3IobGluZSwgdHlwZS5jb2xvcil9XFxuYCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcihtc2csIHR5cGUuY29sb3IpKTtcbiAgfVxuICBpZiAoIXVuZGVmaW5lZE9yTnVsbChhZGRpdGlvbmFsLnN1ZmZpeCkpIHtcbiAgICBtc2dCYXNlLnB1c2goYWRkaXRpb25hbC5zdWZmaXgpO1xuICB9XG5cbiAgcmV0dXJuIG1zZ0Jhc2Uuam9pbignICcpO1xufTtcblxuY29uc3QgX2RlZmF1bHRMb2cgPSAodHlwZSwgcGFyZW50LCAuLi5kYXRhKSA9PiB7XG4gIGlmIChwYXJlbnQuX19kaXNhYmxlZExvZ3NfXy5pbmRleE9mKHR5cGUubmFtZSkgPT09IC0xKSB7XG4gICAgY29uc29sZS5sb2coYnVpbGRUZXJtaW5hbChwYXJlbnQsIHR5cGUsIC4uLmRhdGEpKTtcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzTG9nID0ge307XG5cbk9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoc3RsKSA9PiB7XG4gIHN0eWxlc0xvZ1tzdGxdID0gX2RlZmF1bHRMb2cuYmluZChudWxsLCBzdHlsZXNbc3RsXSk7XG59KTtcblxuc3R5bGVzTG9nLl9fbm9ybWFsTG9nX18gPSAocGFyZW50LCAuLi5kYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhLmpvaW4oJyAnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlc0xvZztcbiJdfQ==