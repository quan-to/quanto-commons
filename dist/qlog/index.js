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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL2luZGV4LmpzIl0sIm5hbWVzIjpbIlFMb2ciLCJwYXJlbnQiLCJfX2NvbmZpZ19fIiwic2hvd0RhdGVUaW1lIiwic2hvd0JhZGdlIiwic2hvd0xhYmVsIiwic2hvd0Vycm9yQ29kZUVycm9yRGF0YSIsInNob3dGaWxlbmFtZSIsInNob3dTY29wZSIsInNjb3BlIiwiaGVhZFBhZGRpbmciLCJfX2NhY2hlX18iLCJsb25nZXN0TGFiZWwiLCJfX2Rpc2FibGVkTG9nc19fIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdGwiLCJzdHlsZSIsIk1hdGgiLCJtYXgiLCJsYWJlbCIsImxlbmd0aCIsImsiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsIl9fbm9ybWFsTG9nX18iLCJsb2dOYW1lIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJhcmdzIiwiYXJnIiwiQXJyYXkiLCJpc0FycmF5IiwiYSIsIl9lbmFibGVMb2ciLCJfZGlzYWJsZUxvZyIsIm5ld1FMb2dTY29wZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm5hbWUiLCJ2YWx1ZSIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FqQkFBQTs7Ozs7QUFLQTs7QUFDQTs7OztBQUVBOzs7Ozs7OztJQUVNQSxJO0FBQ0osa0JBQWM7QUFBQTs7QUFDWixRQUFNQyxTQUFTLElBQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCO0FBQ2hCQyxvQkFBYyxJQURFO0FBRWhCQyxpQkFBVyxJQUZLO0FBR2hCQyxpQkFBVyxLQUhLO0FBSWhCQyw4QkFBd0IsSUFKUjtBQUtoQkMsb0JBQWMsS0FMRTtBQU1oQkMsaUJBQVcsSUFOSztBQU9oQkMsYUFBTyxJQVBTO0FBUWhCQyxtQkFBYTtBQVJHLEtBQWxCOztBQVdBLFNBQUtDLFNBQUwsR0FBaUI7QUFDZkMsb0JBQWM7QUFEQyxLQUFqQjs7QUFJQSxTQUFLQyxnQkFBTCxHQUF3QixDQUFDLE9BQUQsRUFBVSxNQUFWLENBQXhC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dkI7QUFDRDs7Ozs7O2tCQUdZTyxPQUFPZ0MsTUFBUCxDQUFjLElBQUk5QyxJQUFKLEVBQWQsRUFBMEIsRUFBMUIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHsgaXNSdW5uaW5nSW5Ob2RlSlMgfSBmcm9tICcuLi90b29scyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IHRlcm1TdHlsZXMgZnJvbSAnLi90ZXJtJztcblxuY2xhc3MgUUxvZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXM7XG4gICAgdGhpcy5fX2NvbmZpZ19fID0ge1xuICAgICAgc2hvd0RhdGVUaW1lOiB0cnVlLFxuICAgICAgc2hvd0JhZGdlOiB0cnVlLFxuICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgIHNob3dFcnJvckNvZGVFcnJvckRhdGE6IHRydWUsXG4gICAgICBzaG93RmlsZW5hbWU6IGZhbHNlLFxuICAgICAgc2hvd1Njb3BlOiB0cnVlLFxuICAgICAgc2NvcGU6IG51bGwsXG4gICAgICBoZWFkUGFkZGluZzogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5fX2NhY2hlX18gPSB7XG4gICAgICBsb25nZXN0TGFiZWw6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlZExvZ3NfXyA9IFsnZGVidWcnLCAnd2FybiddO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChzdGwpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW3N0bF07XG4gICAgICBwYXJlbnQuX19jYWNoZV9fLmxvbmdlc3RMYWJlbCA9IE1hdGgubWF4KHBhcmVudC5fX2NhY2hlX18ubG9uZ2VzdExhYmVsLCBzdHlsZS5sYWJlbCA/IHN0eWxlLmxhYmVsLmxlbmd0aCA6IDApO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzUnVubmluZ0luTm9kZUpTKCkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRlcm1TdHlsZXMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgcGFyZW50W2tdID0gdGVybVN0eWxlc1trXS5iaW5kKG51bGwsIHBhcmVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Nocm9tZSB2ZXJzaW9uIG5vdCBpbXBsZW1lbnRlZC4gSWdub3JpbmcnKTtcbiAgICAgIE9iamVjdC5rZXlzKHRlcm1TdHlsZXMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgcGFyZW50W2tdID0gY29uc29sZS5sb2c7IC8vIFBsYWNlaG9sZGVyIGZvciBub24gTm9kZUpTXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzbGFzaCgpIHtcbiAgICB0aGlzLl9fbm9ybWFsTG9nX18oJ+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCcpO1xuICB9XG5cbiAgX2VuYWJsZUxvZyhsb2dOYW1lKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5fX2Rpc2FibGVkTG9nc19fLmluZGV4T2YobG9nTmFtZSk7XG4gICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX19kaXNhYmxlZExvZ3NfXy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gIH1cblxuICBfZGlzYWJsZUxvZyhsb2dOYW1lKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5fX2Rpc2FibGVkTG9nc19fLmluZGV4T2YobG9nTmFtZSk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX19kaXNhYmxlZExvZ3NfXy5wdXNoKGxvZ05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBoZWFkUGFkZGluZyh2YWx1ZSkge1xuICAgIHRoaXMuX19jb25maWdfXy5oZWFkUGFkZGluZyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGhlYWRQYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uaGVhZFBhZGRpbmc7XG4gIH1cblxuICBlbmFibGVMb2dzKC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goKGFyZykgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICBhcmcuZm9yRWFjaCgoYSkgPT4geyB0aGlzLl9lbmFibGVMb2coYSk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW5hYmxlTG9nKGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlTG9ncyguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgYXJnLmZvckVhY2goKGEpID0+IHsgdGhpcy5fZGlzYWJsZUxvZyhhKTsgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kaXNhYmxlTG9nKGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzY29wZSguLi5uYW1lKSB7XG4gICAgY29uc3QgbmV3UUxvZ1Njb3BlID0gbmV3IFFMb2coKTtcbiAgICBuZXdRTG9nU2NvcGUuX19jb25maWdfXyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fX2NvbmZpZ19fKSk7XG4gICAgbmV3UUxvZ1Njb3BlLl9fY2FjaGVfXyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fX2NhY2hlX18pKTtcbiAgICBuZXdRTG9nU2NvcGUuX19kaXNhYmxlZExvZ3NfXyA9IHRoaXMuX19kaXNhYmxlZExvZ3NfXztcbiAgICBuZXdRTG9nU2NvcGUuX19jb25maWdfXy5zY29wZSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmV3UUxvZ1Njb3BlO1xuICB9XG5cbiAgc2V0IHNob3dEYXRlVGltZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93RGF0ZVRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93RGF0ZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93RGF0ZVRpbWU7XG4gIH1cblxuICBzZXQgc2hvd1Njb3BlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fX2NvbmZpZ19fLnNob3dTY29wZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dTY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLnNob3dTY29wZTtcbiAgfVxuXG4gIHNldCBzaG93QmFkZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9fY29uZmlnX18uc2hvd0JhZGdlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLl9fY29uZmlnX18uc2hvd0JhZGdlO1xuICB9XG5cbiAgc2V0IHNob3dMYWJlbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93TGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb25maWdfXy5zaG93TGFiZWw7XG4gIH1cblxuICBzZXQgc2hvd0Vycm9yQ29kZUVycm9yRGF0YSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX19jb25maWdfXy5zaG93RXJyb3JDb2RlRXJyb3JEYXRhID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9yQ29kZUVycm9yRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLnNob3dFcnJvckNvZGVFcnJvckRhdGE7XG4gIH1cblxuICBzZXQgc2hvd0ZpbGVuYW1lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fX2NvbmZpZ19fLnNob3dGaWxlbmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dGaWxlbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbmZpZ19fLnNob3dGaWxlbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKG5ldyBRTG9nKCksIHt9KTtcbiJdfQ==