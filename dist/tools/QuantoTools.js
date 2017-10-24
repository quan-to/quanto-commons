'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuantoColors = exports.printQuantoHeader = undefined;

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_colors2.default.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
}); /**
     * Created by Lucas Teske on 02/05/17.
     */

var lineLength = '                                                                    '.length;

var printQuantoHeader = exports.printQuantoHeader = function printQuantoHeader(app, app2) {
  var title = app === undefined || app === null ? '' : app;

  // eslint-disable-next-line no-bitwise
  var preZeros = (lineLength - title.length) / 2 | 0;
  var posZeros = lineLength - title.length - preZeros;
  var titleLine = '' + new Array(preZeros).join(' ') + title + new Array(posZeros).join(' ');

  console.log(' ---------------------------------------------------------------- '.bold);
  console.log('|   ____            _           ___                    _         |'.bold);
  console.log('|  / ___|___  _ __ | |_ __ _   / _ \\ _   _  __ _ _ __ | |_ ___   |'.bold);
  console.log("| | |   / _ \\| '_ \\| __/ _` | | | | | | | |/ _` | '_ \\| __/ _ \\  |".bold);
  console.log('| | |__| (_) | | | | || (_| | | |_| | |_| | (_| | | | | || (_) | |'.bold);
  console.log('|  \\____\\___/|_| |_|\\__\\__,_|  \\__\\_\\\\__,_|\\__,_|_| |_|\\__\\___/  |'.bold);
  console.log('|                                                                |'.bold);
  console.log(' ---------------------------------------------------------------- '.bold);
  console.log('                                                                  '.inverse);
  console.log(titleLine.inverse);

  if (app2 !== undefined && app2 !== undefined) {
    // eslint-disable-next-line no-bitwise
    var preZeros2 = (lineLength - app2.length) / 2 | 0;
    var posZeros2 = lineLength - app2.length - preZeros2;
    var titleLine2 = '' + new Array(preZeros2).join(' ') + app2 + new Array(posZeros2).join(' ');
    console.log(titleLine2.inverse);
  }

  console.log('                                                                  '.inverse);
  console.log('');
};

var QuantoColors = exports.QuantoColors = function QuantoColors() {
  return _colors2.default.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9RdWFudG9Ub29scy5qcyJdLCJuYW1lcyI6WyJzZXRUaGVtZSIsInNpbGx5IiwiaW5wdXQiLCJ2ZXJib3NlIiwicHJvbXB0IiwiaW5mbyIsImRhdGEiLCJoZWxwIiwid2FybiIsImRlYnVnIiwiZXJyb3IiLCJsaW5lTGVuZ3RoIiwibGVuZ3RoIiwicHJpbnRRdWFudG9IZWFkZXIiLCJhcHAiLCJhcHAyIiwidGl0bGUiLCJ1bmRlZmluZWQiLCJwcmVaZXJvcyIsInBvc1plcm9zIiwidGl0bGVMaW5lIiwiQXJyYXkiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImJvbGQiLCJpbnZlcnNlIiwicHJlWmVyb3MyIiwicG9zWmVyb3MyIiwidGl0bGVMaW5lMiIsIlF1YW50b0NvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7Ozs7QUFFQSxpQkFBT0EsUUFBUCxDQUFnQjtBQUNkQyxTQUFPLFNBRE87QUFFZEMsU0FBTyxNQUZPO0FBR2RDLFdBQVMsTUFISztBQUlkQyxVQUFRLE1BSk07QUFLZEMsUUFBTSxPQUxRO0FBTWRDLFFBQU0sTUFOUTtBQU9kQyxRQUFNLE1BUFE7QUFRZEMsUUFBTSxRQVJRO0FBU2RDLFNBQU8sTUFUTztBQVVkQyxTQUFPO0FBVk8sQ0FBaEIsRSxDQU5BOzs7O0FBbUJBLElBQU1DLGFBQWEsdUVBQXVFQyxNQUExRjs7QUFFTyxJQUFNQyxnREFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUM5QyxNQUFNQyxRQUFTRixRQUFRRyxTQUFSLElBQXFCSCxRQUFRLElBQTlCLEdBQXNDLEVBQXRDLEdBQTJDQSxHQUF6RDs7QUFFQTtBQUNBLE1BQU1JLFdBQVksQ0FBQ1AsYUFBYUssTUFBTUosTUFBcEIsSUFBOEIsQ0FBL0IsR0FBb0MsQ0FBckQ7QUFDQSxNQUFNTyxXQUFXUixhQUFhSyxNQUFNSixNQUFuQixHQUE0Qk0sUUFBN0M7QUFDQSxNQUFNRSxpQkFBZSxJQUFJQyxLQUFKLENBQVVILFFBQVYsRUFBb0JJLElBQXBCLENBQXlCLEdBQXpCLENBQWYsR0FBK0NOLEtBQS9DLEdBQXVELElBQUlLLEtBQUosQ0FBVUYsUUFBVixFQUFvQkcsSUFBcEIsQ0FBeUIsR0FBekIsQ0FBN0Q7O0FBRUFDLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVDLElBQWpGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVDLElBQWpGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxzRUFBc0VDLElBQWxGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSx5RUFBeUVDLElBQXJGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVDLElBQWpGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxnRkFBZ0ZDLElBQTVGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVDLElBQWpGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVDLElBQWpGO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVFLE9BQWpGO0FBQ0FILFVBQVFDLEdBQVIsQ0FBWUosVUFBVU0sT0FBdEI7O0FBRUEsTUFBSVgsU0FBU0UsU0FBVCxJQUFzQkYsU0FBU0UsU0FBbkMsRUFBOEM7QUFDNUM7QUFDQSxRQUFNVSxZQUFhLENBQUNoQixhQUFhSSxLQUFLSCxNQUFuQixJQUE2QixDQUE5QixHQUFtQyxDQUFyRDtBQUNBLFFBQU1nQixZQUFZakIsYUFBYUksS0FBS0gsTUFBbEIsR0FBMkJlLFNBQTdDO0FBQ0EsUUFBTUUsa0JBQWdCLElBQUlSLEtBQUosQ0FBVU0sU0FBVixFQUFxQkwsSUFBckIsQ0FBMEIsR0FBMUIsQ0FBaEIsR0FBaURQLElBQWpELEdBQXdELElBQUlNLEtBQUosQ0FBVU8sU0FBVixFQUFxQk4sSUFBckIsQ0FBMEIsR0FBMUIsQ0FBOUQ7QUFDQUMsWUFBUUMsR0FBUixDQUFZSyxXQUFXSCxPQUF2QjtBQUNEOztBQUVESCxVQUFRQyxHQUFSLENBQVkscUVBQXFFRSxPQUFqRjtBQUNBSCxVQUFRQyxHQUFSLENBQVksRUFBWjtBQUNELENBN0JNOztBQStCQSxJQUFNTSxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FBTSxpQkFBTzlCLFFBQVAsQ0FBZ0I7QUFDaERDLFdBQU8sU0FEeUM7QUFFaERDLFdBQU8sTUFGeUM7QUFHaERDLGFBQVMsTUFIdUM7QUFJaERDLFlBQVEsTUFKd0M7QUFLaERDLFVBQU0sT0FMMEM7QUFNaERDLFVBQU0sTUFOMEM7QUFPaERDLFVBQU0sTUFQMEM7QUFRaERDLFVBQU0sUUFSMEM7QUFTaERDLFdBQU8sTUFUeUM7QUFVaERDLFdBQU87QUFWeUMsR0FBaEIsQ0FBTjtBQUFBLENBQXJCIiwiZmlsZSI6IlF1YW50b1Rvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICovXG5cbmltcG9ydCBDb2xvcnMgZnJvbSAnY29sb3JzJztcblxuQ29sb3JzLnNldFRoZW1lKHtcbiAgc2lsbHk6ICdyYWluYm93JyxcbiAgaW5wdXQ6ICdncmV5JyxcbiAgdmVyYm9zZTogJ2N5YW4nLFxuICBwcm9tcHQ6ICdncmV5JyxcbiAgaW5mbzogJ2dyZWVuJyxcbiAgZGF0YTogJ2dyZXknLFxuICBoZWxwOiAnY3lhbicsXG4gIHdhcm46ICd5ZWxsb3cnLFxuICBkZWJ1ZzogJ2JsdWUnLFxuICBlcnJvcjogJ3JlZCcsXG59KTtcblxuY29uc3QgbGluZUxlbmd0aCA9ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgcHJpbnRRdWFudG9IZWFkZXIgPSAoYXBwLCBhcHAyKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gKGFwcCA9PT0gdW5kZWZpbmVkIHx8IGFwcCA9PT0gbnVsbCkgPyAnJyA6IGFwcDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICBjb25zdCBwcmVaZXJvcyA9ICgobGluZUxlbmd0aCAtIHRpdGxlLmxlbmd0aCkgLyAyKSB8IDA7XG4gIGNvbnN0IHBvc1plcm9zID0gbGluZUxlbmd0aCAtIHRpdGxlLmxlbmd0aCAtIHByZVplcm9zO1xuICBjb25zdCB0aXRsZUxpbmUgPSBgJHtuZXcgQXJyYXkocHJlWmVyb3MpLmpvaW4oJyAnKX0ke3RpdGxlfSR7bmV3IEFycmF5KHBvc1plcm9zKS5qb2luKCcgJyl9YDtcblxuICBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJy5ib2xkKTtcbiAgY29uc29sZS5sb2coJ3wgICBfX19fICAgICAgICAgICAgXyAgICAgICAgICAgX19fICAgICAgICAgICAgICAgICAgICBfICAgICAgICAgfCcuYm9sZCk7XG4gIGNvbnNvbGUubG9nKCd8ICAvIF9fX3xfX18gIF8gX18gfCB8XyBfXyBfICAgLyBfIFxcXFwgXyAgIF8gIF9fIF8gXyBfXyB8IHxfIF9fXyAgIHwnLmJvbGQpO1xuICBjb25zb2xlLmxvZyhcInwgfCB8ICAgLyBfIFxcXFx8ICdfIFxcXFx8IF9fLyBfYCB8IHwgfCB8IHwgfCB8IHwvIF9gIHwgJ18gXFxcXHwgX18vIF8gXFxcXCAgfFwiLmJvbGQpO1xuICBjb25zb2xlLmxvZygnfCB8IHxfX3wgKF8pIHwgfCB8IHwgfHwgKF98IHwgfCB8X3wgfCB8X3wgfCAoX3wgfCB8IHwgfCB8fCAoXykgfCB8Jy5ib2xkKTtcbiAgY29uc29sZS5sb2coJ3wgIFxcXFxfX19fXFxcXF9fXy98X3wgfF98XFxcXF9fXFxcXF9fLF98ICBcXFxcX19cXFxcX1xcXFxcXFxcX18sX3xcXFxcX18sX3xffCB8X3xcXFxcX19cXFxcX19fLyAgfCcuYm9sZCk7XG4gIGNvbnNvbGUubG9nKCd8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwnLmJvbGQpO1xuICBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJy5ib2xkKTtcbiAgY29uc29sZS5sb2coJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuaW52ZXJzZSk7XG4gIGNvbnNvbGUubG9nKHRpdGxlTGluZS5pbnZlcnNlKTtcblxuICBpZiAoYXBwMiAhPT0gdW5kZWZpbmVkICYmIGFwcDIgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgY29uc3QgcHJlWmVyb3MyID0gKChsaW5lTGVuZ3RoIC0gYXBwMi5sZW5ndGgpIC8gMikgfCAwO1xuICAgIGNvbnN0IHBvc1plcm9zMiA9IGxpbmVMZW5ndGggLSBhcHAyLmxlbmd0aCAtIHByZVplcm9zMjtcbiAgICBjb25zdCB0aXRsZUxpbmUyID0gYCR7bmV3IEFycmF5KHByZVplcm9zMikuam9pbignICcpfSR7YXBwMn0ke25ldyBBcnJheShwb3NaZXJvczIpLmpvaW4oJyAnKX1gO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlTGluZTIuaW52ZXJzZSk7XG4gIH1cblxuICBjb25zb2xlLmxvZygnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5pbnZlcnNlKTtcbiAgY29uc29sZS5sb2coJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1YW50b0NvbG9ycyA9ICgpID0+IENvbG9ycy5zZXRUaGVtZSh7XG4gIHNpbGx5OiAncmFpbmJvdycsXG4gIGlucHV0OiAnZ3JleScsXG4gIHZlcmJvc2U6ICdjeWFuJyxcbiAgcHJvbXB0OiAnZ3JleScsXG4gIGluZm86ICdncmVlbicsXG4gIGRhdGE6ICdncmV5JyxcbiAgaGVscDogJ2N5YW4nLFxuICB3YXJuOiAneWVsbG93JyxcbiAgZGVidWc6ICdibHVlJyxcbiAgZXJyb3I6ICdyZWQnLFxufSk7XG4iXX0=