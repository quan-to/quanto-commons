'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _figures = require('figures');

var _figures2 = _interopRequireDefault(_figures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Same styles as https://github.com/klauscfhq/signale/

var styles = {
  error: {
    badge: _figures2.default.cross,
    color: 'red',
    label: 'Error'
  },
  fatal: {
    badge: _figures2.default.cross,
    color: 'red',
    label: 'Fatal'
  },
  fav: {
    badge: '♥',
    color: 'magenta',
    label: 'Favorite'
  },
  info: {
    badge: _figures2.default.info,
    color: 'blue',
    label: 'Info'
  },
  star: {
    badge: '⭑',
    color: 'yellow',
    label: 'Star'
  },
  success: {
    badge: _figures2.default.tick,
    color: 'green',
    label: 'Success'
  },
  warn: {
    badge: _figures2.default.warning,
    color: 'yellow',
    label: 'Warning'
  },
  complete: {
    badge: _figures2.default.checkboxOn,
    color: 'cyan',
    label: 'Complete'
  },
  pending: {
    badge: _figures2.default.checkboxOff,
    color: 'magenta',
    label: 'Pending'
  },
  note: {
    badge: _figures2.default.circleFilled,
    color: 'blue',
    label: 'Note'
  },
  start: {
    badge: '►',
    color: 'green',
    label: 'Start'
  },
  pause: {
    badge: _figures2.default.squareSmallFilled,
    color: 'yellow',
    label: 'Pause'
  },
  debug: {
    badge: _figures2.default.circleFilled,
    color: 'red',
    label: 'Debug'
  },
  await: {
    badge: _figures2.default.ellipsis,
    color: 'blue',
    label: 'Awaiting'
  },
  watch: {
    badge: '👁',
    color: 'yellow',
    label: 'Watching'
  },
  log: {
    badge: '🖹',
    color: '',
    label: 'Log'
  }
}; /**
    * Created by Lucas Teske on 22/05/18.
    * 
    */

Object.keys(styles).forEach(function (k) {
  styles[k].name = k;
});

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJlcnJvciIsImJhZGdlIiwiY3Jvc3MiLCJjb2xvciIsImxhYmVsIiwiZmF0YWwiLCJmYXYiLCJpbmZvIiwic3RhciIsInN1Y2Nlc3MiLCJ0aWNrIiwid2FybiIsIndhcm5pbmciLCJjb21wbGV0ZSIsImNoZWNrYm94T24iLCJwZW5kaW5nIiwiY2hlY2tib3hPZmYiLCJub3RlIiwiY2lyY2xlRmlsbGVkIiwic3RhcnQiLCJwYXVzZSIsInNxdWFyZVNtYWxsRmlsbGVkIiwiZGVidWciLCJhd2FpdCIsImVsbGlwc2lzIiwid2F0Y2giLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsU0FBUztBQUNiQyxTQUFPO0FBQ0xDLFdBQU8sa0JBQVFDLEtBRFY7QUFFTEMsV0FBTyxLQUZGO0FBR0xDLFdBQU87QUFIRixHQURNO0FBTWJDLFNBQU87QUFDTEosV0FBTyxrQkFBUUMsS0FEVjtBQUVMQyxXQUFPLEtBRkY7QUFHTEMsV0FBTztBQUhGLEdBTk07QUFXYkUsT0FBSztBQUNITCxXQUFPLEdBREo7QUFFSEUsV0FBTyxTQUZKO0FBR0hDLFdBQU87QUFISixHQVhRO0FBZ0JiRyxRQUFNO0FBQ0pOLFdBQU8sa0JBQVFNLElBRFg7QUFFSkosV0FBTyxNQUZIO0FBR0pDLFdBQU87QUFISCxHQWhCTztBQXFCYkksUUFBTTtBQUNKUCxXQUFPLEdBREg7QUFFSkUsV0FBTyxRQUZIO0FBR0pDLFdBQU87QUFISCxHQXJCTztBQTBCYkssV0FBUztBQUNQUixXQUFPLGtCQUFRUyxJQURSO0FBRVBQLFdBQU8sT0FGQTtBQUdQQyxXQUFPO0FBSEEsR0ExQkk7QUErQmJPLFFBQU07QUFDSlYsV0FBTyxrQkFBUVcsT0FEWDtBQUVKVCxXQUFPLFFBRkg7QUFHSkMsV0FBTztBQUhILEdBL0JPO0FBb0NiUyxZQUFVO0FBQ1JaLFdBQU8sa0JBQVFhLFVBRFA7QUFFUlgsV0FBTyxNQUZDO0FBR1JDLFdBQU87QUFIQyxHQXBDRztBQXlDYlcsV0FBUztBQUNQZCxXQUFPLGtCQUFRZSxXQURSO0FBRVBiLFdBQU8sU0FGQTtBQUdQQyxXQUFPO0FBSEEsR0F6Q0k7QUE4Q2JhLFFBQU07QUFDSmhCLFdBQU8sa0JBQVFpQixZQURYO0FBRUpmLFdBQU8sTUFGSDtBQUdKQyxXQUFPO0FBSEgsR0E5Q087QUFtRGJlLFNBQU87QUFDTGxCLFdBQU8sR0FERjtBQUVMRSxXQUFPLE9BRkY7QUFHTEMsV0FBTztBQUhGLEdBbkRNO0FBd0RiZ0IsU0FBTztBQUNMbkIsV0FBTyxrQkFBUW9CLGlCQURWO0FBRUxsQixXQUFPLFFBRkY7QUFHTEMsV0FBTztBQUhGLEdBeERNO0FBNkRia0IsU0FBTztBQUNMckIsV0FBTyxrQkFBUWlCLFlBRFY7QUFFTGYsV0FBTyxLQUZGO0FBR0xDLFdBQU87QUFIRixHQTdETTtBQWtFYm1CLFNBQU87QUFDTHRCLFdBQU8sa0JBQVF1QixRQURWO0FBRUxyQixXQUFPLE1BRkY7QUFHTEMsV0FBTztBQUhGLEdBbEVNO0FBdUVicUIsU0FBTztBQUNMeEIsV0FBTyxJQURGO0FBRUxFLFdBQU8sUUFGRjtBQUdMQyxXQUFPO0FBSEYsR0F2RU07QUE0RWJzQixPQUFLO0FBQ0h6QixXQUFPLElBREo7QUFFSEUsV0FBTyxFQUZKO0FBR0hDLFdBQU87QUFISjtBQTVFUSxDQUFmLEMsQ0FUQTs7Ozs7QUE0RkF1QixPQUFPQyxJQUFQLENBQVk3QixNQUFaLEVBQW9COEIsT0FBcEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFPO0FBQUUvQixTQUFPK0IsQ0FBUCxFQUFVQyxJQUFWLEdBQWlCRCxDQUFqQjtBQUFxQixDQUExRDs7a0JBRWUvQixNIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5cbi8vIFNhbWUgc3R5bGVzIGFzIGh0dHBzOi8vZ2l0aHViLmNvbS9rbGF1c2NmaHEvc2lnbmFsZS9cblxuY29uc3Qgc3R5bGVzID0ge1xuICBlcnJvcjoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNyb3NzLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBsYWJlbDogJ0Vycm9yJyxcbiAgfSxcbiAgZmF0YWw6IHtcbiAgICBiYWRnZTogZmlndXJlcy5jcm9zcyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgbGFiZWw6ICdGYXRhbCcsXG4gIH0sXG4gIGZhdjoge1xuICAgIGJhZGdlOiAn4pmlJyxcbiAgICBjb2xvcjogJ21hZ2VudGEnLFxuICAgIGxhYmVsOiAnRmF2b3JpdGUnLFxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFkZ2U6IGZpZ3VyZXMuaW5mbyxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIGxhYmVsOiAnSW5mbycsXG4gIH0sXG4gIHN0YXI6IHtcbiAgICBiYWRnZTogJ+KtkScsXG4gICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgIGxhYmVsOiAnU3RhcicsXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWRnZTogZmlndXJlcy50aWNrLFxuICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgIGxhYmVsOiAnU3VjY2VzcycsXG4gIH0sXG4gIHdhcm46IHtcbiAgICBiYWRnZTogZmlndXJlcy53YXJuaW5nLFxuICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICBsYWJlbDogJ1dhcm5pbmcnLFxuICB9LFxuICBjb21wbGV0ZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNoZWNrYm94T24sXG4gICAgY29sb3I6ICdjeWFuJyxcbiAgICBsYWJlbDogJ0NvbXBsZXRlJyxcbiAgfSxcbiAgcGVuZGluZzoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNoZWNrYm94T2ZmLFxuICAgIGNvbG9yOiAnbWFnZW50YScsXG4gICAgbGFiZWw6ICdQZW5kaW5nJyxcbiAgfSxcbiAgbm90ZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNpcmNsZUZpbGxlZCxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIGxhYmVsOiAnTm90ZScsXG4gIH0sXG4gIHN0YXJ0OiB7XG4gICAgYmFkZ2U6ICfilronLFxuICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgIGxhYmVsOiAnU3RhcnQnLFxuICB9LFxuICBwYXVzZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLnNxdWFyZVNtYWxsRmlsbGVkLFxuICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICBsYWJlbDogJ1BhdXNlJyxcbiAgfSxcbiAgZGVidWc6IHtcbiAgICBiYWRnZTogZmlndXJlcy5jaXJjbGVGaWxsZWQsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGxhYmVsOiAnRGVidWcnLFxuICB9LFxuICBhd2FpdDoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmVsbGlwc2lzLFxuICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgbGFiZWw6ICdBd2FpdGluZycsXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgYmFkZ2U6ICfwn5GBJyxcbiAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgbGFiZWw6ICdXYXRjaGluZycsXG4gIH0sXG4gIGxvZzoge1xuICAgIGJhZGdlOiAn8J+WuScsXG4gICAgY29sb3I6ICcnLFxuICAgIGxhYmVsOiAnTG9nJyxcbiAgfSxcbn07XG5cbk9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoaykgPT4geyBzdHlsZXNba10ubmFtZSA9IGs7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=