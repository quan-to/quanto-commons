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
      scope: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL2luZGV4LmpzIl0sIm5hbWVzIjpbIlFMb2ciLCJwYXJlbnQiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwic2hvd0JhZGdlIiwic2hvd0xhYmVsIiwic2hvd0Vycm9yQ29kZUVycm9yRGF0YSIsInNob3dGaWxlbmFtZSIsInNob3dTY29wZSIsInNjb3BlIiwiX19jYWNoZV9fIiwibG9uZ2VzdExhYmVsIiwiX19kaXNhYmxlZExvZ3NfXyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3RsIiwic3R5bGUiLCJNYXRoIiwibWF4IiwibGFiZWwiLCJsZW5ndGgiLCJrIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJfX25vcm1hbExvZ19fIiwibG9nTmFtZSIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiYXJncyIsImFyZyIsIkFycmF5IiwiaXNBcnJheSIsImEiLCJfZW5hYmxlTG9nIiwiX2Rpc2FibGVMb2ciLCJuZXdRTG9nU2NvcGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuYW1lIiwidmFsdWUiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7Ozs7O0FBS0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7SUFFTUEsSTtBQUNKLGtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsU0FBUyxJQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQjtBQUNoQkMsb0JBQWMsSUFERTtBQUVoQkMsaUJBQVcsSUFGSztBQUdoQkMsaUJBQVcsS0FISztBQUloQkMsOEJBQXdCLElBSlI7QUFLaEJDLG9CQUFjLEtBTEU7QUFNaEJDLGlCQUFXLElBTks7QUFPaEJDLGFBQU87QUFQUyxLQUFsQjs7QUFVQSxTQUFLQyxTQUFMLEdBQWlCO0FBQ2ZDLG9CQUFjO0FBREMsS0FBakI7O0FBSUEsU0FBS0MsZ0JBQUwsR0FBd0IsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUF4Qjs7QUFFQUMsV0FBT0MsSUFBUCxtQkFBb0JDLE9BQXBC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LENBQXdCTyxLQUF4QixHQUFnQ2tDLElBQWhDOztBQUVBLGFBQU9KLFlBQVA7QUFDRDs7O3NCQUVnQkssSyxFQUFnQjtBQUMvQixXQUFLMUMsVUFBTCxDQUFnQkMsWUFBaEIsR0FBK0J5QyxLQUEvQjtBQUNELEs7d0JBRWtCO0FBQ2pCLGFBQU8sS0FBSzFDLFVBQUwsQ0FBZ0JDLFlBQXZCO0FBQ0Q7OztzQkFFYXlDLEssRUFBZ0I7QUFDNUIsV0FBSzFDLFVBQUwsQ0FBZ0JNLFNBQWhCLEdBQTRCb0MsS0FBNUI7QUFDRCxLO3dCQUVlO0FBQ2QsYUFBTyxLQUFLMUMsVUFBTCxDQUFnQk0sU0FBdkI7QUFDRDs7O3NCQUVhb0MsSyxFQUFnQjtBQUM1QixXQUFLMUMsVUFBTCxDQUFnQkUsU0FBaEIsR0FBNEJ3QyxLQUE1QjtBQUNELEs7d0JBRWU7QUFDZCxhQUFPLEtBQUsxQyxVQUFMLENBQWdCRSxTQUF2QjtBQUNEOzs7c0JBRWF3QyxLLEVBQWdCO0FBQzVCLFdBQUsxQyxVQUFMLENBQWdCRyxTQUFoQixHQUE0QnVDLEtBQTVCO0FBQ0QsSzt3QkFFZTtBQUNkLGFBQU8sS0FBSzFDLFVBQUwsQ0FBZ0JHLFNBQXZCO0FBQ0Q7OztzQkFFMEJ1QyxLLEVBQWdCO0FBQ3pDLFdBQUsxQyxVQUFMLENBQWdCSSxzQkFBaEIsR0FBeUNzQyxLQUF6QztBQUNELEs7d0JBRTRCO0FBQzNCLGFBQU8sS0FBSzFDLFVBQUwsQ0FBZ0JJLHNCQUF2QjtBQUNEOzs7c0JBRWdCc0MsSyxFQUFnQjtBQUMvQixXQUFLMUMsVUFBTCxDQUFnQkssWUFBaEIsR0FBK0JxQyxLQUEvQjtBQUNELEs7d0JBRWtCO0FBQ2pCLGFBQU8sS0FBSzFDLFVBQUwsQ0FBZ0JLLFlBQXZCO0FBQ0Q7Ozs7OztrQkFHWU0sT0FBT2dDLE1BQVAsQ0FBYyxJQUFJN0MsSUFBSixFQUFkLEVBQTBCLEVBQTFCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjIvMDUvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7IGlzUnVubmluZ0luTm9kZUpTIH0gZnJvbSAnLi4vdG9vbHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmltcG9ydCB0ZXJtU3R5bGVzIGZyb20gJy4vdGVybSc7XG5cbmNsYXNzIFFMb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzO1xuICAgIHRoaXMuX19jb25maWdfXyA9IHtcbiAgICAgIHNob3dEYXRlVGltZTogdHJ1ZSxcbiAgICAgIHNob3dCYWRnZTogdHJ1ZSxcbiAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICBzaG93RXJyb3JDb2RlRXJyb3JEYXRhOiB0cnVlLFxuICAgICAgc2hvd0ZpbGVuYW1lOiBmYWxzZSxcbiAgICAgIHNob3dTY29wZTogdHJ1ZSxcbiAgICAgIHNjb3BlOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLl9fY2FjaGVfXyA9IHtcbiAgICAgIGxvbmdlc3RMYWJlbDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVkTG9nc19fID0gWydkZWJ1ZycsICd3YXJuJ107XG5cbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHN0bCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXNbc3RsXTtcbiAgICAgIHBhcmVudC5fX2NhY2hlX18ubG9uZ2VzdExhYmVsID0gTWF0aC5tYXgocGFyZW50Ll9fY2FjaGVfXy5sb25nZXN0TGFiZWwsIHN0eWxlLmxhYmVsID8gc3R5bGUubGFiZWwubGVuZ3RoIDogMCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nSW5Ob2RlSlMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGVybVN0eWxlcykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBwYXJlbnRba10gPSB0ZXJtU3R5bGVzW2tdLmJpbmQobnVsbCwgcGFyZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQ2hyb21lIHZlcnNpb24gbm90IGltcGxlbWVudGVkLiBJZ25vcmluZycpO1xuICAgICAgT2JqZWN0LmtleXModGVybVN0eWxlcykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBwYXJlbnRba10gPSBjb25zb2xlLmxvZzsgLy8gUGxhY2Vob2xkZXIgZm9yIG5vbiBOb2RlSlNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNsYXNoKCkge1xuICAgIHRoaXMuX19ub3JtYWxMb2dfXygn4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAJyk7XG4gIH1cblxuICBfZW5hYmxlTG9nKGxvZ05hbWUpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLl9fZGlzYWJsZWRMb2dzX18uaW5kZXhPZihsb2dOYW1lKTtcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fX2Rpc2FibGVkTG9nc19fLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIF9kaXNhYmxlTG9nKGxvZ05hbWUpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLl9fZGlzYWJsZWRMb2dzX18uaW5kZXhPZihsb2dOYW1lKTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgdGhpcy5fX2Rpc2FibGVkTG9nc19fLnB1c2gobG9nTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlTG9ncyguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgYXJnLmZvckVhY2goKGEpID0+IHsgdGhpcy5fZW5hYmxlTG9nKGEpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUxvZyhhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZUxvZ3MoLi4uYXJncykge1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIGFyZy5mb3JFYWNoKChhKSA9PiB7IHRoaXMuX2Rpc2FibGVMb2coYSk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUxvZyhhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2NvcGUoLi4ubmFtZSkge1xuICAgIGNvbnN0IG5ld1FMb2dTY29wZSA9IG5ldyBRTG9nKCk7XG4gICAgbmV3UUxvZ1Njb3BlLl9fY29uZmlnX18gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX19jb25maWdfXykpO1xuICAgIG5ld1FMb2dTY29wZS5fX2NhY2hlX18gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX19jYWNoZV9fKSk7XG4gICAgbmV3UUxvZ1Njb3BlLl9fZGlzYWJsZWRMb2dzX18gPSB0aGlzLl9fZGlzYWJsZWRMb2dzX187XG4gICAgbmV3UUxvZ1Njb3BlLl9fY29uZmlnX18uc2NvcGUgPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5ld1FMb2dTY29wZTtcbiAgfVxuXG4gIHNldCBzaG93RGF0ZVRpbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0RhdGVUaW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0RhdGVUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uc2hvd0RhdGVUaW1lO1xuICB9XG5cbiAgc2V0IHNob3dTY29wZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93U2NvcGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93U2NvcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93U2NvcGU7XG4gIH1cblxuICBzZXQgc2hvd0JhZGdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fX2NvbmZpZ19fLnNob3dCYWRnZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLnNob3dCYWRnZTtcbiAgfVxuXG4gIHNldCBzaG93TGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0xhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uc2hvd0xhYmVsO1xuICB9XG5cbiAgc2V0IHNob3dFcnJvckNvZGVFcnJvckRhdGEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0Vycm9yQ29kZUVycm9yRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvckNvZGVFcnJvckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhO1xuICB9XG5cbiAgc2V0IHNob3dGaWxlbmFtZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93RmlsZW5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93RmlsZW5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93RmlsZW5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihuZXcgUUxvZygpLCB7fSk7XG4iXX0=