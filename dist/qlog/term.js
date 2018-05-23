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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsImhlYWRQYWRkaW5nIiwiYmFzZSIsInRvdGFsTGVuIiwic3RyaXBwZWRMZW4iLCJub25QcmludGFibGVMZW4iLCJwYWRFbmQiLCJwb2ludGVyIiwibWFwIiwiaSIsInNob3dCYWRnZSIsImJhZGdlIiwic2hvd0xhYmVsIiwibGFiZWwiLCJ1bmRlcmxpbmUiLCJfX2NhY2hlX18iLCJsb25nZXN0TGFiZWwiLCJlcnJvckNvZGUiLCJlcnJvckZpZWxkIiwiZXJyb3JEYXRhIiwid2FybiIsIm5leHRMaW5lQ2hhciIsInNob3dFcnJvckNvZGVFcnJvckRhdGEiLCJwYWRTdGFydCIsImdyYXkiLCJlcnJvckRhdGFTdHJpbmciLCJ0cmltIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibGluZXMiLCJzcGxpdCIsInIiLCJsaW5lIiwicHJlQ2hhciIsInN0YWNrIiwibmFtZSIsInJlc3QiLCJmb3JFYWNoIiwibCIsImdyZXkiLCJzcGxpY2UiLCJpbmRleE9mIiwiX2RlZmF1bHRMb2ciLCJkYXRhIiwiX19kaXNhYmxlZExvZ3NfXyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXNMb2ciLCJPYmplY3QiLCJrZXlzIiwic3RsIiwiYmluZCIsIl9fbm9ybWFsTG9nX18iXSwi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QUpEOztBQU1BLElBQU1JLFlBQVksRUFBbEI7O0FBRUFDLE9BQU9DLElBQVAsbUJBQW9CWixPQUFwQixDQUE0QixVQUFDYSxHQUFELEVBQVM7QUFDbkNILFlBQVVHLEdBQVYsSUFBaUJSLFlBQVlTLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsaUJBQU9ELEdBQVAsQ0FBdkIsQ0FBakI7QUFDRCxDQUZEOztBQUlBSCxVQUFVSyxhQUFWLEdBQTBCLFVBQUNqRixNQUFEO0FBQUEscUNBQVl3RSxJQUFaO0FBQVlBLFFBQVo7QUFBQTs7QUFBQSxTQUFxQkUsUUFBUUMsR0FBUixDQUFZSCxLQUFLOUQsSUFBTCxDQUFVLEdBQVYsQ0FBWixDQUFyQjtBQUFBLENBQTFCOztrQkFFZWtFLFMiLCJmaWxlIjoidGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5cbmltcG9ydCB7IEVycm9yT2JqZWN0IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbiAgZ2V0VVRDTm93LFxuICBnZXRDYWxsZXJGaWxlbmFtZSxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5pbXBvcnQge1xuICBzdHJpcENvbG9ycyxcbn0gZnJvbSAnLi4vY29sb3JzL3Rvb2xzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgZ2V0U3RyQ29sb3IgPSAoc3RyLCBjb2xvcikgPT4gKCF1bmRlZmluZWRPck51bGwoc3RyW2NvbG9yXSkgPyBzdHJbY29sb3JdIDogc3RyLmluZm8pO1xuXG5jb25zdCBidWlsZFRlcm1pbmFsID0gKHBhcmVudCwgdHlwZSwgLi4uYXJncykgPT4ge1xuICBsZXQgbXNnID0ge307XG4gIGxldCBhZGRpdGlvbmFsID0ge307XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiAoYXJnc1swXSkgPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwpIHtcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBbbXNnXSA9IGFyZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFt7IHByZWZpeCwgbWVzc2FnZSwgc3VmZml4IH1dID0gYXJncztcbiAgICAgIG1zZyA9IG1lc3NhZ2U7XG4gICAgICBhZGRpdGlvbmFsID0geyBzdWZmaXgsIHByZWZpeCB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2cgPSBhcmdzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGxldCBtc2dCYXNlID0gW107XG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RGF0ZVRpbWUpIHtcbiAgICBtc2dCYXNlLnB1c2goYFske2dldFVUQ05vdygpLndoaXRlLmRpbX1dYCk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0ZpbGVuYW1lKSB7XG4gICAgbXNnQmFzZS5wdXNoKGBbJHtnZXRDYWxsZXJGaWxlbmFtZSgpLnZlcmJvc2UuYm9sZH1dYCk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2NvcGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQuX19jb25maWdfXy5zY29wZSkpIHtcbiAgICAgIGlmIChwYXJlbnQuX19jb25maWdfXy5zY29wZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGBbJHtwYXJlbnQuX19jb25maWdfXy5zY29wZVswXS53aGl0ZX1dYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY29wZXMgPSBwYXJlbnQuX19jb25maWdfXy5zY29wZS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCAhPT0gMCk7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgWyR7c2NvcGVzLnJlZHVjZSgoYSwgYikgPT4gYCR7YS53aGl0ZX0g4p6hICR7Yi53aGl0ZX1gKX1dYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ0Jhc2UucHVzaChgWyR7cGFyZW50Ll9fY29uZmlnX18uc2NvcGUud2hpdGV9XWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhZGRpdGlvbmFsLnByZWZpeCkge1xuICAgIG1zZ0Jhc2UucHVzaChgOiR7YWRkaXRpb25hbC5wcmVmaXgud2hpdGUuZGltfTpgKTtcbiAgfVxuXG4gIGlmICghdW5kZWZpbmVkT3JOdWxsKHBhcmVudC5fX2NvbmZpZ19fLmhlYWRQYWRkaW5nKSkge1xuICAgIGNvbnN0IGJhc2UgPSBtc2dCYXNlLmpvaW4oJyAnKTtcbiAgICBjb25zdCB0b3RhbExlbiA9IGJhc2UubGVuZ3RoO1xuICAgIGNvbnN0IHN0cmlwcGVkTGVuID0gc3RyaXBDb2xvcnMoYmFzZSkubGVuZ3RoO1xuICAgIGNvbnN0IG5vblByaW50YWJsZUxlbiA9IHRvdGFsTGVuIC0gc3RyaXBwZWRMZW47XG4gICAgbXNnQmFzZS5sZW5ndGggPSAwO1xuICAgIG1zZ0Jhc2UucHVzaChiYXNlLnBhZEVuZChwYXJlbnQuX19jb25maWdfXy5oZWFkUGFkZGluZyArIG5vblByaW50YWJsZUxlbikpO1xuICB9XG5cbiAgaWYgKG1zZ0Jhc2UubGVuZ3RoICE9PSAwKSB7XG4gICAgbXNnQmFzZS5wdXNoKGZpZ3VyZXMucG9pbnRlcik7XG4gICAgbXNnQmFzZSA9IG1zZ0Jhc2UubWFwKGkgPT4gaS5pbmZvKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93QmFkZ2UgJiYgdHlwZS5iYWRnZSkge1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcih0eXBlLmJhZGdlLnBhZEVuZCh0eXBlLmJhZGdlLmxlbmd0aCArIDEpLCB0eXBlLmNvbG9yKSk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0xhYmVsICYmIHR5cGUubGFiZWwpIHtcbiAgICBtc2dCYXNlLnB1c2goYCR7Z2V0U3RyQ29sb3IodHlwZS5sYWJlbC51bmRlcmxpbmUsIHR5cGUuY29sb3IpLnBhZEVuZChwYXJlbnQuX19jYWNoZV9fLmxvbmdlc3RMYWJlbCArIDIyKX1gKTtcbiAgfVxuXG4gIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvck9iamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVycm9yQ29kZSxcbiAgICAgIGVycm9yRmllbGQsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXJyb3JEYXRhLFxuICAgIH0gPSBtc2c7XG4gICAgY29uc3QgYmFzZSA9IG1zZ0Jhc2Uuam9pbignICcpO1xuICAgIGNvbnN0IHN0cmlwcGVkTGVuID0gc3RyaXBDb2xvcnMoYmFzZSkubGVuZ3RoO1xuICAgIG1zZ0Jhc2UucHVzaChgJHsn4pWUJy53aGl0ZX0gJHtnZXRTdHJDb2xvcihgKCR7KGVycm9yQ29kZSB8fCAnJykud2Fybi5ib2xkfSkgJHttZXNzYWdlfWAsIHR5cGUuY29sb3IpfVxcbmApO1xuXG4gICAgY29uc3QgbmV4dExpbmVDaGFyID0gcGFyZW50Ll9fY29uZmlnX18uc2hvd0Vycm9yQ29kZUVycm9yRGF0YSA/ICfilaAnLndoaXRlIDogJ+KVmicud2hpdGU7XG5cbiAgICBtc2dCYXNlLnB1c2goYCR7JycucGFkU3RhcnQoc3RyaXBwZWRMZW4gLSAxKX0gJHtuZXh0TGluZUNoYXJ9ICAgICR7J0Vycm9yIEZpZWxkJy53aGl0ZS5ib2xkfTogJHsoZXJyb3JGaWVsZCB8fCAnJyl9XFxuYC5ncmF5KTtcbiAgICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0Vycm9yQ29kZUVycm9yRGF0YSkge1xuICAgICAgY29uc3QgZXJyb3JEYXRhU3RyaW5nID0gIXVuZGVmaW5lZE9yTnVsbChlcnJvckRhdGEpICYmIGVycm9yRGF0YS50cmltKCkubGVuZ3RoICE9PSAwID9cbiAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShlcnJvckRhdGEpLCBudWxsLCAyKX1gIDpcbiAgICAgICAgJ251bGwnLndhcm4uYm9sZDtcbiAgICAgIGNvbnN0IGxpbmVzID0gZXJyb3JEYXRhU3RyaW5nLnNwbGl0KCdcXG4nKS5maWx0ZXIociA9PiByLmxlbmd0aCA+IDApO1xuICAgICAgLy8gbXNnQmFzZS5wdXNoKGBcXG4gICAgJHsnRXJyb3JEYXRhJy53aGl0ZS5ib2xkfTogJHtlcnJvckRhdGFTdHJpbmd9YC5ncmF5KTtcbiAgICAgIG1zZ0Jhc2UucHVzaChgJHsnJy5wYWRTdGFydChzdHJpcHBlZExlbiAtIDEpfSAkeyfilaAnLndoaXRlfSAgICAkeydFcnJvciBEYXRhJy53aGl0ZS5ib2xkfTogXFxuYCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKCcnLnBhZFN0YXJ0KHN0cmlwcGVkTGVuIC0gMSkpO1xuICAgICAgICBjb25zdCBwcmVDaGFyID0gaSA9PT0gbGluZXMubGVuZ3RoIC0gMSA/ICfilZonLndoaXRlIDogJ+KVoCcud2hpdGU7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgJHtwcmVDaGFyfSAgICAgICAgJHtsaW5lLmdyYXl9XFxuYCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKG1zZyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY29uc3QgW25hbWUsIC4uLnJlc3RdID0gbXNnLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBsaW5lcyA9IFtnZXRTdHJDb2xvcihuYW1lLCB0eXBlLmNvbG9yKV07XG4gICAgcmVzdC5mb3JFYWNoKChsKSA9PiB7IGxpbmVzLnB1c2gobC5ncmV5KTsgfSk7XG4gICAgY29uc3QgYmFzZSA9IG1zZ0Jhc2Uuam9pbignICcpO1xuICAgIGNvbnN0IHN0cmlwcGVkTGVuID0gc3RyaXBDb2xvcnMoYmFzZSkubGVuZ3RoO1xuXG4gICAgaWYgKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdID09PSAnXFx1MDAxYlszOW0nKSB7XG4gICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAyXSArPSAnXFx1MDAxYlszOW0nO1xuICAgICAgbGluZXMuc3BsaWNlKGxpbmVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBjb25zdCBwcmVDaGFyID0gaSA9PT0gbGluZXMubGVuZ3RoIC0gMSA/ICfilZonLndoaXRlIDogJ+KVoCcud2hpdGU7XG4gICAgICAgIG1zZ0Jhc2UucHVzaCgnJy5wYWRTdGFydChzdHJpcHBlZExlbiAtIDEpKTtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGAke3ByZUNoYXJ9ICR7bGluZX1cXG5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgJHsn4pWUJy53aGl0ZX0gJHtsaW5lfVxcbmApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChtc2cuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgIGNvbnN0IGJhc2UgPSBtc2dCYXNlLmpvaW4oJyAnKTtcbiAgICBjb25zdCBzdHJpcHBlZExlbiA9IHN0cmlwQ29sb3JzKGJhc2UpLmxlbmd0aDtcbiAgICBjb25zdCBsaW5lcyA9IG1zZy5zcGxpdCgnXFxuJykuZmlsdGVyKHIgPT4gci5sZW5ndGggPiAwKTtcblxuICAgIGlmIChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9PT0gJ1xcdTAwMWJbMzltJykge1xuICAgICAgbGluZXNbbGluZXMubGVuZ3RoIC0gMl0gKz0gJ1xcdTAwMWJbMzltJztcbiAgICAgIGxpbmVzLnNwbGljZShsaW5lcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgY29uc3QgcHJlQ2hhciA9IGkgPT09IGxpbmVzLmxlbmd0aCAtIDEgPyAn4pWaJy53aGl0ZSA6ICfilaAnLndoaXRlO1xuICAgICAgICBtc2dCYXNlLnB1c2goJycucGFkU3RhcnQoc3RyaXBwZWRMZW4gLSAxKSk7XG4gICAgICAgIG1zZ0Jhc2UucHVzaChgJHtwcmVDaGFyfSAke2dldFN0ckNvbG9yKGxpbmUsIHR5cGUuY29sb3IpfVxcbmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnQmFzZS5wdXNoKGAkeyfilZQnLndoaXRlfSAke2dldFN0ckNvbG9yKGxpbmUsIHR5cGUuY29sb3IpfVxcbmApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2dCYXNlLnB1c2goZ2V0U3RyQ29sb3IobXNnLCB0eXBlLmNvbG9yKSk7XG4gIH1cbiAgaWYgKCF1bmRlZmluZWRPck51bGwoYWRkaXRpb25hbC5zdWZmaXgpKSB7XG4gICAgbXNnQmFzZS5wdXNoKGFkZGl0aW9uYWwuc3VmZml4KTtcbiAgfVxuXG4gIHJldHVybiBtc2dCYXNlLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IF9kZWZhdWx0TG9nID0gKHR5cGUsIHBhcmVudCwgLi4uZGF0YSkgPT4ge1xuICBpZiAocGFyZW50Ll9fZGlzYWJsZWRMb2dzX18uaW5kZXhPZih0eXBlLm5hbWUpID09PSAtMSkge1xuICAgIGNvbnNvbGUubG9nKGJ1aWxkVGVybWluYWwocGFyZW50LCB0eXBlLCAuLi5kYXRhKSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0eWxlc0xvZyA9IHt9O1xuXG5PYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHN0bCkgPT4ge1xuICBzdHlsZXNMb2dbc3RsXSA9IF9kZWZhdWx0TG9nLmJpbmQobnVsbCwgc3R5bGVzW3N0bF0pO1xufSk7XG5cbnN0eWxlc0xvZy5fX25vcm1hbExvZ19fID0gKHBhcmVudCwgLi4uZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YS5qb2luKCcgJykpO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXNMb2c7XG4iXX0=