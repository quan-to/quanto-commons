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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3Rlcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyQ29sb3IiLCJzdHIiLCJjb2xvciIsImluZm8iLCJidWlsZFRlcm1pbmFsIiwicGFyZW50IiwidHlwZSIsImFyZ3MiLCJtc2ciLCJhZGRpdGlvbmFsIiwibGVuZ3RoIiwiRXJyb3IiLCJwcmVmaXgiLCJtZXNzYWdlIiwic3VmZml4Iiwiam9pbiIsIm1zZ0Jhc2UiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwicHVzaCIsIndoaXRlIiwiZGltIiwic2hvd0ZpbGVuYW1lIiwidmVyYm9zZSIsImJvbGQiLCJzY29wZSIsIkFycmF5IiwiaXNBcnJheSIsInNjb3BlcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJhIiwiYiIsImhlYWRQYWRkaW5nIiwiYmFzZSIsInRvdGFsTGVuIiwic3RyaXBwZWRMZW4iLCJub25QcmludGFibGVMZW4iLCJwYWRFbmQiLCJwb2ludGVyIiwibWFwIiwiaSIsInNob3dCYWRnZSIsImJhZGdlIiwic2hvd0xhYmVsIiwibGFiZWwiLCJ1bmRlcmxpbmUiLCJfX2NhY2hlX18iLCJsb25nZXN0TGFiZWwiLCJlcnJvckNvZGUiLCJlcnJvckZpZWxkIiwiZXJyb3JEYXRhIiwid2FybiIsImdyYXkiLCJzaG93RXJyb3JDb2RlRXJyb3JEYXRhIiwiZXJyb3JEYXRhU3RyaW5nIiwidHJpbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInJlcGxhY2UiLCJzdGFjayIsInNwbGl0IiwibmFtZSIsInJlc3QiLCJsIiwiZ3JleSIsIl9kZWZhdWx0TG9nIiwiZGF0YSIsIl9fZGlzYWJsZWRMb2dzX18iLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsInN0eWxlc0xvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3RsIiwiYmluZCIsIl9fbm9ybWFsTG9nX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs4UUFBQTs7Ozs7QUFLQTs7OztBQUVBOztBQUNBOztBQU1BOztB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RCxTQUFPRSxRQUFRRCxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0QsQ0F4RkQ7O0FBMEZBLElBQU1xRCxjQUFjLFNBQWRBLFdBQWMsQ0FBQzlELElBQUQsRUFBT0QsTUFBUCxFQUEyQjtBQUFBLHFDQUFUZ0UsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzdDLE1BQUloRSxPQUFPaUUsZ0JBQVAsQ0FBd0JDLE9BQXhCLENBQWdDakUsS0FBSzBELElBQXJDLE1BQStDLENBQUMsQ0FBcEQsRUFBdUQ7QUFDckRRLFlBQVFDLEdBQVIsQ0FBWXJFLGdDQUFjQyxNQUFkLEVBQXNCQyxJQUF0QixTQUErQitELElBQS9CLEVBQVo7QUFDRDtBQUNGLENBSkQ7O0FBTUEsSUFBTUssWUFBWSxFQUFsQjs7QUFFQUMsT0FBT0MsSUFBUCxtQkFBb0JDLE9BQXBCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNuQ0osWUFBVUksR0FBVixJQUFpQlYsWUFBWVcsSUFBWixDQUFpQixJQUFqQixFQUF1QixpQkFBT0QsR0FBUCxDQUF2QixDQUFqQjtBQUNELENBRkQ7O0FBSUFKLFVBQVVNLGFBQVYsR0FBMEIsVUFBQzNFLE1BQUQ7QUFBQSxxQ0FBWWdFLElBQVo7QUFBWUEsUUFBWjtBQUFBOztBQUFBLFNBQXFCRyxRQUFRQyxHQUFSLENBQVlKLEtBQUt0RCxJQUFMLENBQVUsR0FBVixDQUFaLENBQXJCO0FBQUEsQ0FBMUI7O2tCQUVlMkQsUyIsImZpbGUiOiJ0ZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDIyLzA1LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJztcblxuaW1wb3J0IHsgRXJyb3JPYmplY3QgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgdW5kZWZpbmVkT3JOdWxsLFxuICBnZXRVVENOb3csXG4gIGdldENhbGxlckZpbGVuYW1lLFxufSBmcm9tICcuLi90b29scyc7XG5cbmltcG9ydCB7XG4gIHN0cmlwQ29sb3JzLFxufSBmcm9tICcuLi9jb2xvcnMvdG9vbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuXG5jb25zdCBnZXRTdHJDb2xvciA9IChzdHIsIGNvbG9yKSA9PiAoIXVuZGVmaW5lZE9yTnVsbChzdHJbY29sb3JdKSA/IHN0cltjb2xvcl0gOiBzdHIuaW5mbyk7XG5cbmNvbnN0IGJ1aWxkVGVybWluYWwgPSAocGFyZW50LCB0eXBlLCAuLi5hcmdzKSA9PiB7XG4gIGxldCBtc2cgPSB7fTtcbiAgbGV0IGFkZGl0aW9uYWwgPSB7fTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIChhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCkge1xuICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIFttc2ddID0gYXJncztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgW3sgcHJlZml4LCBtZXNzYWdlLCBzdWZmaXggfV0gPSBhcmdzO1xuICAgICAgbXNnID0gbWVzc2FnZTtcbiAgICAgIGFkZGl0aW9uYWwgPSB7IHN1ZmZpeCwgcHJlZml4IH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IGFyZ3Muam9pbignICcpO1xuICB9XG5cbiAgbGV0IG1zZ0Jhc2UgPSBbXTtcbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dEYXRlVGltZSkge1xuICAgIG1zZ0Jhc2UucHVzaChgWyR7Z2V0VVRDTm93KCkud2hpdGUuZGltfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93RmlsZW5hbWUpIHtcbiAgICBtc2dCYXNlLnB1c2goYFske2dldENhbGxlckZpbGVuYW1lKCkudmVyYm9zZS5ib2xkfV1gKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zY29wZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudC5fX2NvbmZpZ19fLnNjb3BlKSkge1xuICAgICAgY29uc3Qgc2NvcGVzID0gcGFyZW50Ll9fY29uZmlnX18uc2NvcGUuZmlsdGVyKHggPT4geC5sZW5ndGggIT09IDApO1xuICAgICAgbXNnQmFzZS5wdXNoKGBbJHtzY29wZXMucmVkdWNlKChhLCBiKSA9PiBgJHthLndoaXRlLmRpbX0g4p6hICR7Yi53aGl0ZS5kaW19YCl9XWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dCYXNlLnB1c2goYFske3BhcmVudC5fX2NvbmZpZ19fLnNjb3BlLndoaXRlLmRpbX1dYCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFkZGl0aW9uYWwucHJlZml4KSB7XG4gICAgbXNnQmFzZS5wdXNoKGA6JHthZGRpdGlvbmFsLnByZWZpeC53aGl0ZS5kaW19OmApO1xuICB9XG5cbiAgaWYgKCF1bmRlZmluZWRPck51bGwocGFyZW50Ll9fY29uZmlnX18uaGVhZFBhZGRpbmcpKSB7XG4gICAgY29uc3QgYmFzZSA9IG1zZ0Jhc2Uuam9pbignICcpO1xuICAgIGNvbnN0IHRvdGFsTGVuID0gYmFzZS5sZW5ndGg7XG4gICAgY29uc3Qgc3RyaXBwZWRMZW4gPSBzdHJpcENvbG9ycyhiYXNlKS5sZW5ndGg7XG4gICAgY29uc3Qgbm9uUHJpbnRhYmxlTGVuID0gdG90YWxMZW4gLSBzdHJpcHBlZExlbjtcbiAgICBtc2dCYXNlLmxlbmd0aCA9IDA7XG4gICAgbXNnQmFzZS5wdXNoKGJhc2UucGFkRW5kKHBhcmVudC5fX2NvbmZpZ19fLmhlYWRQYWRkaW5nICsgbm9uUHJpbnRhYmxlTGVuKSk7XG4gIH1cblxuICBpZiAobXNnQmFzZS5sZW5ndGggIT09IDApIHtcbiAgICBtc2dCYXNlLnB1c2goZmlndXJlcy5wb2ludGVyKTtcbiAgICBtc2dCYXNlID0gbXNnQmFzZS5tYXAoaSA9PiBpLmluZm8pO1xuICB9XG5cbiAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dCYWRnZSAmJiB0eXBlLmJhZGdlKSB7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKHR5cGUuYmFkZ2UucGFkRW5kKHR5cGUuYmFkZ2UubGVuZ3RoICsgMSksIHR5cGUuY29sb3IpKTtcbiAgfVxuXG4gIGlmIChwYXJlbnQuX19jb25maWdfXy5zaG93TGFiZWwgJiYgdHlwZS5sYWJlbCkge1xuICAgIG1zZ0Jhc2UucHVzaChgJHtnZXRTdHJDb2xvcih0eXBlLmxhYmVsLnVuZGVybGluZSwgdHlwZS5jb2xvcikucGFkRW5kKHBhcmVudC5fX2NhY2hlX18ubG9uZ2VzdExhYmVsICsgMjIpfWApO1xuICB9XG5cbiAgaWYgKG1zZyBpbnN0YW5jZW9mIEVycm9yT2JqZWN0KSB7XG4gICAgY29uc3Qge1xuICAgICAgZXJyb3JDb2RlLFxuICAgICAgZXJyb3JGaWVsZCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBlcnJvckRhdGEsXG4gICAgfSA9IG1zZztcbiAgICBtc2dCYXNlLnB1c2goZ2V0U3RyQ29sb3IoYCgkeyhlcnJvckNvZGUgfHwgJycpLndhcm4uYm9sZH0pICR7bWVzc2FnZX1gLCB0eXBlLmNvbG9yKSk7XG4gICAgbXNnQmFzZS5wdXNoKGBcXG4gICAgJHsnRXJyb3JGaWVsZCcud2hpdGUuYm9sZH06ICR7KGVycm9yRmllbGQgfHwgJycpfWAuZ3JheSk7XG4gICAgaWYgKHBhcmVudC5fX2NvbmZpZ19fLnNob3dFcnJvckNvZGVFcnJvckRhdGEpIHtcbiAgICAgIGNvbnN0IGVycm9yRGF0YVN0cmluZyA9ICF1bmRlZmluZWRPck51bGwoZXJyb3JEYXRhKSAmJiBlcnJvckRhdGEudHJpbSgpLmxlbmd0aCAhPT0gMCA/XG4gICAgICAgIGBcXG4gICAgICAgICR7SlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShlcnJvckRhdGEpLCBudWxsLCAyKS5yZXBsYWNlKC9cXG4vZywgJ1xcbiAgICAgICAgJyl9YCA6XG4gICAgICAgICdudWxsJy53YXJuLmJvbGQ7XG4gICAgICBtc2dCYXNlLnB1c2goYFxcbiAgICAkeydFcnJvckRhdGEnLndoaXRlLmJvbGR9OiAke2Vycm9yRGF0YVN0cmluZ31gLmdyYXkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIGNvbnN0IFtuYW1lLCAuLi5yZXN0XSA9IG1zZy5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKG5hbWUsIHR5cGUuY29sb3IpKTtcbiAgICBtc2dCYXNlLnB1c2gocmVzdC5tYXAobCA9PiBsLnJlcGxhY2UoL14vLCAnXFxuJykpLmpvaW4oJycpLmdyZXkpO1xuICB9XG5cbiAgbXNnQmFzZS5wdXNoKGdldFN0ckNvbG9yKG1zZywgdHlwZS5jb2xvcikpO1xuXG4gIGlmICghdW5kZWZpbmVkT3JOdWxsKGFkZGl0aW9uYWwuc3VmZml4KSkge1xuICAgIG1zZ0Jhc2UucHVzaChhZGRpdGlvbmFsLnN1ZmZpeCk7XG4gIH1cblxuICByZXR1cm4gbXNnQmFzZS5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBfZGVmYXVsdExvZyA9ICh0eXBlLCBwYXJlbnQsIC4uLmRhdGEpID0+IHtcbiAgaWYgKHBhcmVudC5fX2Rpc2FibGVkTG9nc19fLmluZGV4T2YodHlwZS5uYW1lKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLmxvZyhidWlsZFRlcm1pbmFsKHBhcmVudCwgdHlwZSwgLi4uZGF0YSkpO1xuICB9XG59O1xuXG5jb25zdCBzdHlsZXNMb2cgPSB7fTtcblxuT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChzdGwpID0+IHtcbiAgc3R5bGVzTG9nW3N0bF0gPSBfZGVmYXVsdExvZy5iaW5kKG51bGwsIHN0eWxlc1tzdGxdKTtcbn0pO1xuXG5zdHlsZXNMb2cuX19ub3JtYWxMb2dfXyA9IChwYXJlbnQsIC4uLmRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEuam9pbignICcpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzTG9nO1xuIl19