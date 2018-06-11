'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Lucas Teske on 22/05/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _tools = require('../tools');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _term = require('./term');

var _term2 = _interopRequireDefault(_term);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QLog = function () {
  function QLog() {
    _classCallCheck(this, QLog);

    var parent = this;
    this.__config__ = {
      showDateTime: true,
      showBadge: true,
      showLabel: false,
      showErrorCodeErrorData: true,
      showFilename: false,
      showScope: true,
      scope: null,
      headPadding: null
    };

    this.__cache__ = {
      longestLabel: 0
    };

    this.__disabledLogs__ = ['debug', 'warn'];

    Object.keys(_styles2.default).forEach(function (stl) {
      var style = _styles2.default[stl];
      parent.__cache__.longestLabel = Math.max(parent.__cache__.longestLabel, style.label ? style.label.length : 0);
    });

    if ((0, _tools.isRunningInNodeJS)()) {
      Object.keys(_term2.default).forEach(function (k) {
        parent[k] = _term2.default[k].bind(null, parent);
      });
    } else {
      console.log('Chrome version not implemented. Ignoring');
      Object.keys(_term2.default).forEach(function (k) {
        parent[k] = console.log; // Placeholder for non NodeJS
      });
    }
  }

  _createClass(QLog, [{
    key: 'bclip',
    value: function bclip() {}
  }, {
    key: 'slash',
    value: function slash() {
      this.__normalLog__('─────────────────────────────────────────────────────────────────────────────────────────────');
    }
  }, {
    key: '_enableLog',
    value: function _enableLog(logName) {
      var idx = this.__disabledLogs__.indexOf(logName);
      if (idx !== -1) {
        this.__disabledLogs__.splice(idx, 1);
      }
    }
  }, {
    key: '_disableLog',
    value: function _disableLog(logName) {
      var idx = this.__disabledLogs__.indexOf(logName);
      if (idx === -1) {
        this.__disabledLogs__.push(logName);
      }
    }
  }, {
    key: 'enableLogs',
    value: function enableLogs() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (arg) {
        if (Array.isArray(arg)) {
          arg.forEach(function (a) {
            _this._enableLog(a);
          });
        } else {
          _this._enableLog(arg);
        }
      });
    }
  }, {
    key: 'disableLogs',
    value: function disableLogs() {
      var _this2 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (arg) {
        if (Array.isArray(arg)) {
          arg.forEach(function (a) {
            _this2._disableLog(a);
          });
        } else {
          _this2._disableLog(arg);
        }
      });
    }
  }, {
    key: 'scope',
    value: function scope() {
      var newQLogScope = new QLog();
      newQLogScope.__config__ = JSON.parse(JSON.stringify(this.__config__));
      newQLogScope.__cache__ = JSON.parse(JSON.stringify(this.__cache__));
      newQLogScope.__disabledLogs__ = this.__disabledLogs__;

      for (var _len3 = arguments.length, name = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        name[_key3] = arguments[_key3];
      }

      newQLogScope.__config__.scope = name;

      return newQLogScope;
    }
  }, {
    key: 'headPadding',
    set: function set(value) {
      this.__config__.headPadding = value;
    },
    get: function get() {
      return this.__config__.headPadding;
    }
  }, {
    key: 'showDateTime',
    set: function set(value) {
      this.__config__.showDateTime = value;
    },
    get: function get() {
      return this.__config__.showDateTime;
    }
  }, {
    key: 'showScope',
    set: function set(value) {
      this.__config__.showScope = value;
    },
    get: function get() {
      return this.__config__.showScope;
    }
  }, {
    key: 'showBadge',
    set: function set(value) {
      this.__config__.showBadge = value;
    },
    get: function get() {
      return this.__config__.showBadge;
    }
  }, {
    key: 'showLabel',
    set: function set(value) {
      this.__config__.showLabel = value;
    },
    get: function get() {
      return this.__config__.showLabel;
    }
  }, {
    key: 'showErrorCodeErrorData',
    set: function set(value) {
      this.__config__.showErrorCodeErrorData = value;
    },
    get: function get() {
      return this.__config__.showErrorCodeErrorData;
    }
  }, {
    key: 'showFilename',
    set: function set(value) {
      this.__config__.showFilename = value;
    },
    get: function get() {
      return this.__config__.showFilename;
    }
  }]);

  return QLog;
}();

exports.default = Object.assign(new QLog(), {});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL2luZGV4LmpzIl0sIm5hbWVzIjpbIlFMb2ciLCJwYXJlbnQiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwic2hvd0JhZGdlIiwic2hvd0xhYmVsIiwic2hvd0Vycm9yQ29kZUVycm9yRGF0YSIsInNob3dGaWxlbmFtZSIsInNob3dTY29wZSIsInNjb3BlIiwiaGVhZFBhZGRpbmciLCJfX2NhY2hlX18iLCJsb25nZXN0TGFiZWwiLCJfX2Rpc2FibGVkTG9nc19fIiwiT2JqZWN0Iiwia2V5cyIsInN0eWxlcyIsImZvckVhY2giLCJzdGwiLCJzdHlsZSIsIk1hdGgiLCJtYXgiLCJsYWJlbCIsImxlbmd0aCIsInRlcm1TdHlsZXMiLCJrIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJfX25vcm1hbExvZ19fIiwibG9nTmFtZSIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiYXJncyIsImFyZyIsIkFycmF5IiwiaXNBcnJheSIsImEiLCJfZW5hYmxlTG9nIiwiX2Rpc2FibGVMb2ciLCJuZXdRTG9nU2NvcGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuYW1lIiwidmFsdWUiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7Ozs7O0FBS0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7SUFFTUEsSTtBQUNKLGtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsU0FBUyxJQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQjtBQUNoQkMsb0JBQWMsSUFERTtBQUVoQkMsaUJBQVcsSUFGSztBQUdoQkMsaUJBQVcsS0FISztBQUloQkMsOEJBQXdCLElBSlI7QUFLaEJDLG9CQUFjLEtBTEU7QUFNaEJDLGlCQUFXLElBTks7QUFPaEJDLGFBQU8sSUFQUztBQVFoQkMsbUJBQWE7QUFSRyxLQUFsQjs7QUFXQSxTQUFLQyxTQUFMLEdBQWlCO0FBQ2ZDLG9CQUFjO0FBREMsS0FBakI7O0FBSUEsU0FBS0MsZ0JBQUwsR0FBd0IsQ0FB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LFlBQWhCLEdBQStCd0MsS0FBL0I7QUFDRCxLO3dCQUVrQjtBQUNqQixhQUFPLEtBQUs3QyxVQUFMLENBQWdCSyxZQUF2QjtBQUNEOzs7Ozs7a0JBR1lPLE9BQU9rQyxNQUFQLENBQWMsSUFBSWhELElBQUosRUFBZCxFQUEwQixFQUExQixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDIyLzA1LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgeyBpc1J1bm5pbmdJbk5vZGVKUyB9IGZyb20gJy4uL3Rvb2xzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5pbXBvcnQgdGVybVN0eWxlcyBmcm9tICcuL3Rlcm0nO1xuXG5jbGFzcyBRTG9nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcztcbiAgICB0aGlzLl9fY29uZmlnX18gPSB7XG4gICAgICBzaG93RGF0ZVRpbWU6IHRydWUsXG4gICAgICBzaG93QmFkZ2U6IHRydWUsXG4gICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgc2hvd0Vycm9yQ29kZUVycm9yRGF0YTogdHJ1ZSxcbiAgICAgIHNob3dGaWxlbmFtZTogZmFsc2UsXG4gICAgICBzaG93U2NvcGU6IHRydWUsXG4gICAgICBzY29wZTogbnVsbCxcbiAgICAgIGhlYWRQYWRkaW5nOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLl9fY2FjaGVfXyA9IHtcbiAgICAgIGxvbmdlc3RMYWJlbDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVkTG9nc19fID0gWydkZWJ1ZycsICd3YXJuJ107XG5cbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHN0bCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXNbc3RsXTtcbiAgICAgIHBhcmVudC5fX2NhY2hlX18ubG9uZ2VzdExhYmVsID0gTWF0aC5tYXgocGFyZW50Ll9fY2FjaGVfXy5sb25nZXN0TGFiZWwsIHN0eWxlLmxhYmVsID8gc3R5bGUubGFiZWwubGVuZ3RoIDogMCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nSW5Ob2RlSlMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGVybVN0eWxlcykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBwYXJlbnRba10gPSB0ZXJtU3R5bGVzW2tdLmJpbmQobnVsbCwgcGFyZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQ2hyb21lIHZlcnNpb24gbm90IGltcGxlbWVudGVkLiBJZ25vcmluZycpO1xuICAgICAgT2JqZWN0LmtleXModGVybVN0eWxlcykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBwYXJlbnRba10gPSBjb25zb2xlLmxvZzsgLy8gUGxhY2Vob2xkZXIgZm9yIG5vbiBOb2RlSlNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJjbGlwKC4uLmFyZ3MpIHtcblxuICB9XG5cbiAgc2xhc2goKSB7XG4gICAgdGhpcy5fX25vcm1hbExvZ19fKCfilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAnKTtcbiAgfVxuXG4gIF9lbmFibGVMb2cobG9nTmFtZSkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuX19kaXNhYmxlZExvZ3NfXy5pbmRleE9mKGxvZ05hbWUpO1xuICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICB0aGlzLl9fZGlzYWJsZWRMb2dzX18uc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuICB9XG5cbiAgX2Rpc2FibGVMb2cobG9nTmFtZSkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuX19kaXNhYmxlZExvZ3NfXy5pbmRleE9mKGxvZ05hbWUpO1xuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICB0aGlzLl9fZGlzYWJsZWRMb2dzX18ucHVzaChsb2dOYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaGVhZFBhZGRpbmcodmFsdWUpIHtcbiAgICB0aGlzLl9fY29uZmlnX18uaGVhZFBhZGRpbmcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBoZWFkUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLmhlYWRQYWRkaW5nO1xuICB9XG5cbiAgZW5hYmxlTG9ncyguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgYXJnLmZvckVhY2goKGEpID0+IHsgdGhpcy5fZW5hYmxlTG9nKGEpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUxvZyhhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZUxvZ3MoLi4uYXJncykge1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIGFyZy5mb3JFYWNoKChhKSA9PiB7IHRoaXMuX2Rpc2FibGVMb2coYSk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUxvZyhhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2NvcGUoLi4ubmFtZSkge1xuICAgIGNvbnN0IG5ld1FMb2dTY29wZSA9IG5ldyBRTG9nKCk7XG4gICAgbmV3UUxvZ1Njb3BlLl9fY29uZmlnX18gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX19jb25maWdfXykpO1xuICAgIG5ld1FMb2dTY29wZS5fX2NhY2hlX18gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX19jYWNoZV9fKSk7XG4gICAgbmV3UUxvZ1Njb3BlLl9fZGlzYWJsZWRMb2dzX18gPSB0aGlzLl9fZGlzYWJsZWRMb2dzX187XG4gICAgbmV3UUxvZ1Njb3BlLl9fY29uZmlnX18uc2NvcGUgPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5ld1FMb2dTY29wZTtcbiAgfVxuXG4gIHNldCBzaG93RGF0ZVRpbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0RhdGVUaW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0RhdGVUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uc2hvd0RhdGVUaW1lO1xuICB9XG5cbiAgc2V0IHNob3dTY29wZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93U2NvcGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93U2NvcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93U2NvcGU7XG4gIH1cblxuICBzZXQgc2hvd0JhZGdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fX2NvbmZpZ19fLnNob3dCYWRnZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLnNob3dCYWRnZTtcbiAgfVxuXG4gIHNldCBzaG93TGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0xhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uc2hvd0xhYmVsO1xuICB9XG5cbiAgc2V0IHNob3dFcnJvckNvZGVFcnJvckRhdGEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0Vycm9yQ29kZUVycm9yRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvckNvZGVFcnJvckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhO1xuICB9XG5cbiAgc2V0IHNob3dGaWxlbmFtZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93RmlsZW5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93RmlsZW5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93RmlsZW5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihuZXcgUUxvZygpLCB7fSk7XG4iXX0=