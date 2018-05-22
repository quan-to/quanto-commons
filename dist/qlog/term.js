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
  } else {
    msgBase.push(getStrColor(msg, type.color).replace(/\n/g, '\n    '));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsImhlYWRQYWRkaW5nIiwiYmFzZSIsInRvdGFsTGVuIiwic3RyaXBwZWRMZW4iLCJub25QcmludGFibGVMZW4iLCJwYWRFbmQiLCJwb2ludGVyIiwibWFwIiwiaSIsInNob3dCYWRnZSIsImJhZGdlIiwic2hvd0xhYmVsIiwibGFiZWwiLCJ1bmRlcmxpbmUiLCJfX2NhY2hlX18iLCJsb25nZXN0TGFiZWwiLCJlcnJvckNvZGUiLCJlcnJvckZpZWxkIiwiZXJyb3JEYXRhIiwid2FybiIsImdyYXkiLCJzaG93RXJyb3JDb2RlRXJyb3JEYXRhIiwiZXJyb3JEYXRhU3RyaW5nIiwidHJpbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInJlcGxhY2UiLCJzdGFjayIsInNwbGl0IiwibmFtZSIsInJlc3QiLCJsIiwiZ3JleSIsIl9kZWZhdWx0TG9nIiwiZGF0YSIsIl9fZGlzYWJsZWRMb2dzX18iLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsInN0eWxlc0xvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3RsIiwiYmluZCIsIl9fbm9ybWFsTG9nX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs4UUFBQTs7Ozs7QUFLQTs7OztBQUVBOztBQUNBOztBQU1BOztB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O0FBQ3ZDRSxZQUFRRyxJQUFSLENBQWFWLFdBQVdLLE1BQXhCO0FBQ0Q7O0FBRUQsU0FBT0UsUUFBUUQsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNELENBeEZEOztBQTBGQSxJQUFNcUQsY0FBYyxTQUFkQSxXQUFjLENBQUM5RCxJQUFELEVBQU9ELE1BQVAsRUFBMkI7QUFBQSxxQ0FBVGdFLElBQVM7QUFBVEEsUUFBUztBQUFBOztBQUM3QyxNQUFJaEUsT0FBT2lFLGdCQUFQLENBQXdCQyxPQUF4QixDQUFnQ2pFLEtBQUswRCxJQUFyQyxNQUErQyxDQUFDLENBQXBELEVBQXVEO0FBQ3JEUSxZQUFRQyxHQUFSLENBQVlyRSxnQ0FBY0MsTUFBZCxFQUFzQkMsSUFBdEIsU0FBK0IrRCxJQUEvQixFQUFaO0FBQ0Q7QUFDRixDQUpEOztBQU1BLElBQU1LLFlBQVksRUFBbEI7O0FBRUFDLE9BQU9DLElBQVAsbUJBQW9CQyxPQUFwQixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDbkNKLFlBQVVJLEdBQVYsSUFBaUJWLFlBQVlXLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsaUJBQU9ELEdBQVAsQ0FBdkIsQ0FBakI7QUFDRCxDQUZEOztBQUlBSixVQUFVTSxhQUFWLEdBQTBCLFVBQUMzRSxNQUFEO0FBQUEscUNBQVlnRSxJQUFaO0FBQVlBLFFBQVo7QUFBQTs7QUFBQSxTQUFxQkcsUUFBUUMsR0FBUixDQUFZSixLQUFLdEQsSUFBTCxDQUFVLEdBQVYsQ0FBWixDQUFyQjtBQUFBLENBQTFCOztrQkFFZTJELFMiLCJmaWxlIjoidGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5cbmltcG9ydCB7IEVycm9yT2JqZWN0IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbiAgZ2V0VVRDTm93LFxuICBnZXRDYWxsZXJGaWxlbmFtZSxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5pbXBvcnQge1xuICBzdHJpcENvbG9ycyxcbn0gZnJvbSAnLi4vY29sb3JzL3Rvb2xzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgZ2V0U3RyQ29sb3IgPSAoc3RyLCBjb2xvcikgPT4gKCF1bmRlZmluZWRPck51bGwoc3RyW2NvbG9yXSkgPyBzdHJbY29sb3JdIDogc3RyLmluZm8pO1xuXG5jb25zdCBidWlsZFRlcm1pbmFsID0gKHBhcmVudCwgdHlwZSwgLi4uYXJncykgPT4ge1xuICBsZXQgbXNnID0ge307XG4gIGxldCBhZGRpdGlvbmFsID0ge307XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiAoYXJnc1swXSkgPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwpIHtcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBbbXNnXSA9IGFyZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFt7IHByZWZpeCwgbWVzc2FnZSwgc3VmZml4IH1dID0gYXJncztcbiAgICAgIG1zZyA9IG1lc3NhZ2U7XG4gICAgICBhZGRpdGlvbmFsID0geyBzdWZmaXgsIHByZWZpeCB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2cgPSBhcmdzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGxldCBtc2dCYXNlID0gW107XG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RGF0ZVRpbWUpIHtcbiAgICBtc2dCYXNlLnB1c2goYFske2dldFVUQ05vdygpLndoaXRlLmRpbX1dYCk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0ZpbGVuYW1lKSB7XG4gICAgbXNnQmFzZS5wdXNoKGBbJHtnZXRDYWxsZXJGaWxlbmFtZSgpLnZlcmJvc2UuYm9sZH1dYCk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2NvcGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQuX19jb25maWdfXy5zY29wZSkpIHtcbiAgICAgIGNvbnN0IHNjb3BlcyA9IHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlLmZpbHRlcih4ID0+IHgubGVuZ3RoICE9PSAwKTtcbiAgICAgIG1zZ0Jhc2UucHVzaChgWyR7c2NvcGVzLnJlZHVjZSgoYSwgYikgPT4gYCR7YS53aGl0ZS5kaW19IOKeoSAke2Iud2hpdGUuZGltfWApfV1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnQmFzZS5wdXNoKGBbJHtwYXJlbnQuX19jb25maWdfXy5zY29wZS53aGl0ZS5kaW19XWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhZGRpdGlvbmFsLnByZWZpeCkge1xuICAgIG1zZ0Jhc2UucHVzaChgOiR7YWRkaXRpb25hbC5wcmVmaXgud2hpdGUuZGltfTpgKTtcbiAgfVxuXG4gIGlmICghdW5kZWZpbmVkT3JOdWxsKHBhcmVudC5fX2NvbmZpZ19fLmhlYWRQYWRkaW5nKSkge1xuICAgIGNvbnN0IGJhc2UgPSBtc2dCYXNlLmpvaW4oJyAnKTtcbiAgICBjb25zdCB0b3RhbExlbiA9IGJhc2UubGVuZ3RoO1xuICAgIGNvbnN0IHN0cmlwcGVkTGVuID0gc3RyaXBDb2xvcnMoYmFzZSkubGVuZ3RoO1xuICAgIGNvbnN0IG5vblByaW50YWJsZUxlbiA9IHRvdGFsTGVuIC0gc3RyaXBwZWRMZW47XG4gICAgbXNnQmFzZS5sZW5ndGggPSAwO1xuICAgIG1zZ0Jhc2UucHVzaChiYXNlLnBhZEVuZChwYXJlbnQuX19jb25maWdfXy5oZWFkUGFkZGluZyArIG5vblByaW50YWJsZUxlbikpO1xuICB9XG5cbiAgaWYgKG1zZ0Jhc2UubGVuZ3RoICE9PSAwKSB7XG4gICAgbXNnQmFzZS5wdXNoKGZpZ3VyZXMucG9pbnRlcik7XG4gICAgbXNnQmFzZSA9IG1zZ0Jhc2UubWFwKGkgPT4gaS5pbmZvKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93QmFkZ2UgJiYgdHlwZS5iYWRnZSkge1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcih0eXBlLmJhZGdlLnBhZEVuZCh0eXBlLmJhZGdlLmxlbmd0aCArIDEpLCB0eXBlLmNvbG9yKSk7XG4gIH1cblxuICBpZiAocGFyZW50Ll9fY29uZmlnX18uc2hvd0xhYmVsICYmIHR5cGUubGFiZWwpIHtcbiAgICBtc2dCYXNlLnB1c2goYCR7Z2V0U3RyQ29sb3IodHlwZS5sYWJlbC51bmRlcmxpbmUsIHR5cGUuY29sb3IpLnBhZEVuZChwYXJlbnQuX19jYWNoZV9fLmxvbmdlc3RMYWJlbCArIDIyKX1gKTtcbiAgfVxuXG4gIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvck9iamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVycm9yQ29kZSxcbiAgICAgIGVycm9yRmllbGQsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXJyb3JEYXRhLFxuICAgIH0gPSBtc2c7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKGAoJHsoZXJyb3JDb2RlIHx8ICcnKS53YXJuLmJvbGR9KSAke21lc3NhZ2V9YCwgdHlwZS5jb2xvcikpO1xuICAgIG1zZ0Jhc2UucHVzaChgXFxuICAgICR7J0Vycm9yRmllbGQnLndoaXRlLmJvbGR9OiAkeyhlcnJvckZpZWxkIHx8ICcnKX1gLmdyYXkpO1xuICAgIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhKSB7XG4gICAgICBjb25zdCBlcnJvckRhdGFTdHJpbmcgPSAhdW5kZWZpbmVkT3JOdWxsKGVycm9yRGF0YSkgJiYgZXJyb3JEYXRhLnRyaW0oKS5sZW5ndGggIT09IDAgP1xuICAgICAgICBgXFxuICAgICAgICAke0pTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoZXJyb3JEYXRhKSwgbnVsbCwgMikucmVwbGFjZSgvXFxuL2csICdcXG4gICAgICAgICcpfWAgOlxuICAgICAgICAnbnVsbCcud2Fybi5ib2xkO1xuICAgICAgbXNnQmFzZS5wdXNoKGBcXG4gICAgJHsnRXJyb3JEYXRhJy53aGl0ZS5ib2xkfTogJHtlcnJvckRhdGFTdHJpbmd9YC5ncmF5KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBtc2cuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIG1zZ0Jhc2UucHVzaChnZXRTdHJDb2xvcihuYW1lLCB0eXBlLmNvbG9yKSk7XG4gICAgbXNnQmFzZS5wdXNoKHJlc3QubWFwKGwgPT4gbC5yZXBsYWNlKC9eLywgJ1xcbicpKS5qb2luKCcnKS5ncmV5KTtcbiAgfSBlbHNlIHtcbiAgICBtc2dCYXNlLnB1c2goZ2V0U3RyQ29sb3IobXNnLCB0eXBlLmNvbG9yKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnXFxuICAgICcpKTtcbiAgfVxuICBpZiAoIXVuZGVmaW5lZE9yTnVsbChhZGRpdGlvbmFsLnN1ZmZpeCkpIHtcbiAgICBtc2dCYXNlLnB1c2goYWRkaXRpb25hbC5zdWZmaXgpO1xuICB9XG5cbiAgcmV0dXJuIG1zZ0Jhc2Uuam9pbignICcpO1xufTtcblxuY29uc3QgX2RlZmF1bHRMb2cgPSAodHlwZSwgcGFyZW50LCAuLi5kYXRhKSA9PiB7XG4gIGlmIChwYXJlbnQuX19kaXNhYmxlZExvZ3NfXy5pbmRleE9mKHR5cGUubmFtZSkgPT09IC0xKSB7XG4gICAgY29uc29sZS5sb2coYnVpbGRUZXJtaW5hbChwYXJlbnQsIHR5cGUsIC4uLmRhdGEpKTtcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzTG9nID0ge307XG5cbk9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoc3RsKSA9PiB7XG4gIHN0eWxlc0xvZ1tzdGxdID0gX2RlZmF1bHRMb2cuYmluZChudWxsLCBzdHlsZXNbc3RsXSk7XG59KTtcblxuc3R5bGVzTG9nLl9fbm9ybWFsTG9nX18gPSAocGFyZW50LCAuLi5kYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhLmpvaW4oJyAnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlc0xvZztcbiJdfQ==