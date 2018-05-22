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
    msgBase.push('[' + (0, _tools.getLocaleNow)().white.dim + ']');
  }

  if (parent.__config__.showFilename) {
    msgBase.push('[' + (0, _tools.getCallerFilename)().verbose.bold + ']');
  }

  if (parent.__config__.scope) {
    if (Array.isArray(parent.__config__.scope)) {
      var scopes = parent.__config__.scope.filter(function (x) {
        return x.length !== 0;
      });
      msgBase.push('[' + scopes.reduce(function (a, b) {
        return a.white.dim + ' \u27A1 ' + b.white.dim;
      }) + ']');
    } else {
      msgBase.push('[' + parent.__config__.scope.white.dim + ']');
    }
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

    msgBase.push(getStrColor('(' + (errorCode || '').warn.bold + ') ' + _message, type.color));
    msgBase.push(('\n    ' + 'ErrorField'.white.bold + ': ' + (errorField || '')).gray);
    if (parent.__config__.showErrorCodeErrorData) {
      var errorDataString = !(0, _tools.undefinedOrNull)(errorData) && errorData.trim().length !== 0 ? '\n        ' + JSON.stringify(JSON.parse(errorData), null, 2).replace(/\n/g, '\n        ') : 'null'.warn.bold;
      msgBase.push(('\n    ' + 'ErrorData'.white.bold + ': ' + errorDataString).gray);
    }
  } else if (msg instanceof Error) {
    var _msg$stack$split = msg.stack.split('\n'),
        _msg$stack$split2 = _toArray(_msg$stack$split),
        name = _msg$stack$split2[0],
        rest = _msg$stack$split2.slice(1);

    msgBase.push(getStrColor(name, type.color));
    msgBase.push(rest.map(function (l) {
      return l.replace(/^/, '\n');
    }).join('').grey);
  }

  msgBase.push(getStrColor(msg, type.color));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsInBvaW50ZXIiLCJtYXAiLCJpIiwic2hvd0JhZGdlIiwiYmFkZ2UiLCJwYWRFbmQiLCJzaG93TGFiZWwiLCJsYWJlbCIsInVuZGVybGluZSIsIl9fY2FjaGVfXyIsImxvbmdlc3RMYWJlbCIsImVycm9yQ29kZSIsImVycm9yRmllbGQiLCJlcnJvckRhdGEiLCJ3YXJuIiwiZ3JheSIsInNob3dFcnJvckNvZGVFcnJvckRhdGEiLCJlcnJvckRhdGFTdHJpbmciLCJ0cmltIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwicmVwbGFjZSIsInN0YWNrIiwic3BsaXQiLCJuYW1lIiwicmVzdCIsImwiLCJncmV5IiwiX2RlZmF1bHRMb2ciLCJkYXRhIiwiX19kaXNhYmxlZExvZ3NfXyIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzTG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdGwiLCJiaW5kIiwiX19ub3JtYWxMb2dfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzhRQUFBOzs7OztBQUtBOzs7O0FBRUE7O0FBQ0E7O0FBTUE7Ozs7Ozs7O0FBR0EsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFNBQWlC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RSxNQUFEO0FBQUEscUNBQVkyRCxJQUFaO0FBQVlBLFFBQVo7QUFBQTs7QUFBQSxTQUFxQkcsUUFBUUMsR0FBUixDQUFZSixLQUFLakQsSUFBTCxDQUFVLEdBQVYsQ0FBWixDQUFyQjtBQUFBLENBQTFCOztrQkFFZXNELFMiLCJmaWxlIjoidGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5cbmltcG9ydCB7IEVycm9yT2JqZWN0IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbiAgZ2V0TG9jYWxlTm93LFxuICBnZXRDYWxsZXJGaWxlbmFtZSxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuXG5jb25zdCBnZXRTdHJDb2xvciA9IChzdHIsIGNvbG9yKSA9PiAoIXVuZGVmaW5lZE9yTnVsbChzdHJbY29sb3JdKSA/IHN0cltjb2xvcl0gOiBzdHIuaW5mbyk7XG5cbmNvbnN0IGJ1aWxkVGVybWluYWwgPSAocGFyZW50LCB0eXBlLCAuLi5hcmdzKSA9PiB7XG4gIGxldCBtc2cgPSB7fTtcbiAgbGV0IGFkZGl0aW9uYWwgPSB7fTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIChhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCkge1xuICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIFttc2ddID0gYXJncztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgW3sgcHJlZml4LCBtZXNzYWdlLCBzdWZmaXggfV0gPSBhcmdzO1xuICAgICAgbXNnID0gbWVzc2FnZTtcbiAgICAgIGFkZGl0aW9uYWwgPSB7IHN1ZmZpeCwgcHJlZml4IH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IGFyZ3Muam9pbignICcpO1xuICB9XG5cbiAgbGV0IG1zZ0Jhc2UgPSBbXTtcbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dEYXRlVGltZSkge1xuICAgIG1zZ0Jhc2UucHVzaChgWyR7Z2V0TG9jYWxlTm93KCkud2hpdGUuZGltfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RmlsZW5hbWUpIHtcbiAgICBtc2dCYXNlLnB1c2goYFske2dldENhbGxlckZpbGVuYW1lKCkudmVyYm9zZS5ib2xkfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zY29wZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlKSkge1xuICAgICAgY29uc3Qgc2NvcGVzID0gcGFyZW50Ll9fY29uZmlnX18uc2NvcGUuZmlsdGVyKHggPT4geC5sZW5ndGggIT09IDApO1xuICAgICAgbXNnQmFzZS5wdXNoKGBbJHtzY29wZXMucmVkdWNlKChhLCBiKSA9PiBgJHthLndoaXRlLmRpbX0g4p6hICR7Yi53aGl0ZS5kaW19YCl9XWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dCYXNlLnB1c2goYFske3BhcmVudC5fX2NvbmZpZ19fLnNjb3BlLndoaXRlLmRpbX1dYCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1zZ0Jhc2UubGVuZ3RoICE9PSAwKSB7XG4gICAgbXNnQmFzZS5wdXNoKGZpZ3VyZXMucG9pbnRlcik7XG4gICAgbXNnQmFzZSA9IG1zZ0Jhc2UubWFwKGkgPT4gaS5pbmZvKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93QmFkZ2UgJiYgdHlwZS5iYWRnZSkge1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcih0eXBlLmJhZGdlLnBhZEVuZCh0eXBlLmJhZGdlLmxlbmd0aCArIDEpLCB0eXBlLmNvbG9yKSk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0xhYmVsICYmIHR5cGUubGFiZWwpIHtcbiAgICBtc2dCYXNlLnB1c2goYCR7Z2V0U3RyQ29sb3IodHlwZS5sYWJlbC51bmRlcmxpbmUsIHR5cGUuY29sb3IpLnBhZEVuZChwYXJlbnQuX19jYWNoZV9fLmxvbmdlc3RMYWJlbCArIDIyKX1gKTtcbiAgfVxuXG4gIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvck9iamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVycm9yQ29kZSxcbiAgICAgIGVycm9yRmllbGQsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXJyb3JEYXRhLFxuICAgIH0gPSBtc2c7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKGAoJHsoZXJyb3JDb2RlIHx8ICcnKS53YXJuLmJvbGR9KSAke21lc3NhZ2V9YCwgdHlwZS5jb2xvcikpO1xuICAgIG1zZ0Jhc2UucHVzaChgXFxuICAgICR7J0Vycm9yRmllbGQnLndoaXRlLmJvbGR9OiAkeyhlcnJvckZpZWxkIHx8ICcnKX1gLmdyYXkpO1xuICAgIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhKSB7XG4gICAgICBjb25zdCBlcnJvckRhdGFTdHJpbmcgPSAhdW5kZWZpbmVkT3JOdWxsKGVycm9yRGF0YSkgJiYgZXJyb3JEYXRhLnRyaW0oKS5sZW5ndGggIT09IDAgP1xuICAgICAgICBgXFxuICAgICAgICAke0pTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoZXJyb3JEYXRhKSwgbnVsbCwgMikucmVwbGFjZSgvXFxuL2csICdcXG4gICAgICAgICcpfWAgOlxuICAgICAgICAnbnVsbCcud2Fybi5ib2xkO1xuICAgICAgbXNnQmFzZS5wdXNoKGBcXG4gICAgJHsnRXJyb3JEYXRhJy53aGl0ZS5ib2xkfTogJHtlcnJvckRhdGFTdHJpbmd9YC5ncmF5KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBtc2cuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcihuYW1lLCB0eXBlLmNvbG9yKSk7XG4gICAgbXNnQmFzZS5wdXNoKHJlc3QubWFwKGwgPT4gbC5yZXBsYWNlKC9eLywgJ1xcbicpKS5qb2luKCcnKS5ncmV5KTtcbiAgfVxuXG4gIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcihtc2csIHR5cGUuY29sb3IpKTtcblxuICBpZiAoIXVuZGVmaW5lZE9yTnVsbChhZGRpdGlvbmFsLnN1ZmZpeCkpIHtcbiAgICBtc2dCYXNlLnB1c2goYWRkaXRpb25hbC5zdWZmaXgpO1xuICB9XG5cbiAgcmV0dXJuIG1zZ0Jhc2Uuam9pbignICcpO1xufTtcblxuY29uc3QgX2RlZmF1bHRMb2cgPSAodHlwZSwgcGFyZW50LCAuLi5kYXRhKSA9PiB7XG4gIGlmIChwYXJlbnQuX19kaXNhYmxlZExvZ3NfXy5pbmRleE9mKHR5cGUubmFtZSkgPT09IC0xKSB7XG4gICAgY29uc29sZS5sb2coYnVpbGRUZXJtaW5hbChwYXJlbnQsIHR5cGUsIC4uLmRhdGEpKTtcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzTG9nID0ge307XG5cbk9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoc3RsKSA9PiB7XG4gIHN0eWxlc0xvZ1tzdGxdID0gX2RlZmF1bHRMb2cuYmluZChudWxsLCBzdHlsZXNbc3RsXSk7XG59KTtcblxuc3R5bGVzTG9nLl9fbm9ybWFsTG9nX18gPSAocGFyZW50LCAuLi5kYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhLmpvaW4oJyAnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlc0xvZztcbiJdfQ==