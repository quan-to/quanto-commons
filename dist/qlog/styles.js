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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJlcnJvciIsImJhZGdlIiwiZmlndXJlcyIsImNyb3NzIiwiY29sb3IiLCJsYWJlbCIsImZhdGFsIiwiZmF2IiwiaW5mbyIsInN0YXIiLCJzdWNjZXNzIiwidGljayIsIndhcm4iLCJ3YXJuaW5nIiwiY29tcGxldGUiLCJjaGVja2JveE9uIiwicGVuZGluZyIsImNoZWNrYm94T2ZmIiwibm90ZSIsImNpcmNsZUZpbGxlZCIsInN0YXJ0IiwicGF1c2UiLCJzcXVhcmVTbWFsbEZpbGxlZCIsImRlYnVnIiwiYXdhaXQiLCJlbGxpcHNpcyIsIndhdGNoIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7OztBQUVBOztBQUVBLElBQU1BLFNBQVM7QUFDYkMsU0FBTztBQUNMQyxXQUFPQyxrQkFBUUMsS0FEVjtBQUVMQyxXQUFPLEtBRkY7QUFHTEMsV0FBTztBQUhGLEdBRE07QUFNYkMsU0FBTztBQUNMTCxXQUFPQyxrQkFBUUMsS0FEVjtBQUVMQyxXQUFPLEtBRkY7QUFHTEMsV0FBTztBQUhGLEdBTk07QUFXYkUsT0FBSztBQUNITixXQUFPLEdBREo7QUFFSEcsV0FBTyxTQUZKO0FBR0hDLFdBQU87QUFISixHQVhRO0FBZ0JiRyxRQUFNO0FBQ0pQLFdBQU9DLGtCQUFRTSxJQURYO0FBRUpKLFdBQU8sTUFGSDtBQUdKQyxXQUFPO0FBSEgsR0FoQk87QUFxQmJJLFFBQU07QUFDSlIsV0FBTyxHQURIO0FBRUpHLFdBQU8sUUFGSDtBQUdKQyxXQUFPO0FBSEgsR0FyQk87QUEwQmJLLFdBQVM7QUFDUFQsV0FBT0Msa0JBQVFTLElBRFI7QUFFUFAsV0FBTyxPQUZBO0FBR1BDLFdBQU87QUFIQSxHQTFCSTtBQStCYk8sUUFBTTtBQUNKWCxXQUFPQyxrQkFBUVcsT0FEWDtBQUVKVCxXQUFPLFFBRkg7QUFHSkMsV0FBTztBQUhILEdBL0JPO0FBb0NiUyxZQUFVO0FBQ1JiLFdBQU9DLGtCQUFRYSxVQURQO0FBRVJYLFdBQU8sTUFGQztBQUdSQyxXQUFPO0FBSEMsR0FwQ0c7QUF5Q2JXLFdBQVM7QUFDUGYsV0FBT0Msa0JBQVFlLFdBRFI7QUFFUGIsV0FBTyxTQUZBO0FBR1BDLFdBQU87QUFIQSxHQXpDSTtBQThDYmEsUUFBTTtBQUNKakIsV0FBT0Msa0JBQVFpQixZQURYO0FBRUpmLFdBQU8sTUFGSDtBQUdKQyxXQUFPO0FBSEgsR0E5Q087QUFtRGJlLFNBQU87QUFDTG5CLFdBQU8sR0FERjtBQUVMRyxXQUFPLE9BRkY7QUFHTEMsV0FBTztBQUhGLEdBbkRNO0FBd0RiZ0IsU0FBTztBQUNMcEIsV0FBT0Msa0JBQVFvQixpQkFEVjtBQUVMbEIsV0FBTyxRQUZGO0FBR0xDLFdBQU87QUFIRixHQXhETTtBQTZEYmtCLFNBQU87QUFDTHRCLFdBQU9DLGtCQUFRaUIsWUFEVjtBQUVMZixXQUFPLEtBRkY7QUFHTEMsV0FBTztBQUhGLEdBN0RNO0FBa0VibUIsU0FBTztBQUNMdkIsV0FBT0Msa0JBQVF1QixRQURWO0FBRUxyQixXQUFPLE1BRkY7QUFHTEMsV0FBTztBQUhGLEdBbEVNO0FBdUVicUIsU0FBTztBQUNMekIsV0FBTyxJQURGO0FBRUxHLFdBQU8sUUFGRjtBQUdMQyxXQUFPO0FBSEYsR0F2RU07QUE0RWJzQixPQUFLO0FBQ0gxQixXQUFPLElBREo7QUFFSEcsV0FBTyxFQUZKO0FBR0hDLFdBQU87QUFISjtBQTVFUSxDQUFmLEMsQ0FUQTs7Ozs7QUE0RkF1QixPQUFPQyxJQUFQLENBQVk5QixNQUFaLEVBQW9CK0IsT0FBcEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFPO0FBQUVoQyxTQUFPZ0MsQ0FBUCxFQUFVQyxJQUFWLEdBQWlCRCxDQUFqQjtBQUFxQixDQUExRDs7a0JBRWVoQyxNIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyMi8wNS8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5cbi8vIFNhbWUgc3R5bGVzIGFzIGh0dHBzOi8vZ2l0aHViLmNvbS9rbGF1c2NmaHEvc2lnbmFsZS9cblxuY29uc3Qgc3R5bGVzID0ge1xuICBlcnJvcjoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNyb3NzLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBsYWJlbDogJ0Vycm9yJyxcbiAgfSxcbiAgZmF0YWw6IHtcbiAgICBiYWRnZTogZmlndXJlcy5jcm9zcyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgbGFiZWw6ICdGYXRhbCcsXG4gIH0sXG4gIGZhdjoge1xuICAgIGJhZGdlOiAn4pmlJyxcbiAgICBjb2xvcjogJ21hZ2VudGEnLFxuICAgIGxhYmVsOiAnRmF2b3JpdGUnLFxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFkZ2U6IGZpZ3VyZXMuaW5mbyxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIGxhYmVsOiAnSW5mbycsXG4gIH0sXG4gIHN0YXI6IHtcbiAgICBiYWRnZTogJ+KtkScsXG4gICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgIGxhYmVsOiAnU3RhcicsXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWRnZTogZmlndXJlcy50aWNrLFxuICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgIGxhYmVsOiAnU3VjY2VzcycsXG4gIH0sXG4gIHdhcm46IHtcbiAgICBiYWRnZTogZmlndXJlcy53YXJuaW5nLFxuICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICBsYWJlbDogJ1dhcm5pbmcnLFxuICB9LFxuICBjb21wbGV0ZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNoZWNrYm94T24sXG4gICAgY29sb3I6ICdjeWFuJyxcbiAgICBsYWJlbDogJ0NvbXBsZXRlJyxcbiAgfSxcbiAgcGVuZGluZzoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNoZWNrYm94T2ZmLFxuICAgIGNvbG9yOiAnbWFnZW50YScsXG4gICAgbGFiZWw6ICdQZW5kaW5nJyxcbiAgfSxcbiAgbm90ZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLmNpcmNsZUZpbGxlZCxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIGxhYmVsOiAnTm90ZScsXG4gIH0sXG4gIHN0YXJ0OiB7XG4gICAgYmFkZ2U6ICfilronLFxuICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgIGxhYmVsOiAnU3RhcnQnLFxuICB9LFxuICBwYXVzZToge1xuICAgIGJhZGdlOiBmaWd1cmVzLnNxdWFyZVNtYWxsRmlsbGVkLFxuICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICBsYWJlbDogJ1BhdXNlJyxcbiAgfSxcbiAgZGVidWc6IHtcbiAgICBiYWRnZTogZmlndXJlcy5jaXJjbGVGaWxsZWQsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGxhYmVsOiAnRGVidWcnLFxuICB9LFxuICBhd2FpdDoge1xuICAgIGJhZGdlOiBmaWd1cmVzLmVsbGlwc2lzLFxuICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgbGFiZWw6ICdBd2FpdGluZycsXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgYmFkZ2U6ICfwn5GBJyxcbiAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgbGFiZWw6ICdXYXRjaGluZycsXG4gIH0sXG4gIGxvZzoge1xuICAgIGJhZGdlOiAn8J+WuScsXG4gICAgY29sb3I6ICcnLFxuICAgIGxhYmVsOiAnTG9nJyxcbiAgfSxcbn07XG5cbk9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoaykgPT4geyBzdHlsZXNba10ubmFtZSA9IGs7IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXX0=