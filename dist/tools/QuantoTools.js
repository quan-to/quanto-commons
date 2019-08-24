/**
 * Created by Lucas Teske on 02/05/17.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuantoColors = exports.printQuantoHeader = undefined;

require('../colors');

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
  console.log(('QuantoColors()'.warn + ' is now deprecated and does nothing now.').verbose.bold);
}; // Stub
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9RdWFudG9Ub29scy5qcyJdLCJuYW1lcyI6WyJsaW5lTGVuZ3RoIiwibGVuZ3RoIiwicHJpbnRRdWFudG9IZWFkZXIiLCJhcHAiLCJhcHAyIiwidGl0bGUiLCJ1bmRlZmluZWQiLCJwcmVaZXJvcyIsInBvc1plcm9zIiwidGl0bGVMaW5lIiwiQXJyYXkiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImJvbGQiLCJpbnZlcnNlIiwicHJlWmVyb3MyIiwicG9zWmVyb3MyIiwidGl0bGVMaW5lMiIsIlF1YW50b0NvbG9ycyIsIndhcm4iLCJ2ZXJib3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBRUEsSUFBTUEsYUFBYSx1RUFBdUVDLE1BQTFGLEMsQ0FOQTs7OztBQVFPLElBQU1DLGdEQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQzlDLE1BQU1DLFFBQVNGLFFBQVFHLFNBQVIsSUFBcUJILFFBQVEsSUFBOUIsR0FBc0MsRUFBdEMsR0FBMkNBLEdBQXpEOztBQUVBO0FBQ0EsTUFBTUksV0FBWSxDQUFDUCxhQUFhSyxNQUFNSixNQUFwQixJQUE4QixDQUEvQixHQUFvQyxDQUFyRDtBQUNBLE1BQU1PLFdBQVdSLGFBQWFLLE1BQU1KLE1BQW5CLEdBQTRCTSxRQUE3QztBQUNBLE1BQU1FLGlCQUFlLElBQUlDLEtBQUosQ0FBVUgsUUFBVixFQUFvQkksSUFBcEIsQ0FBeUIsR0FBekIsQ0FBZixHQUErQ04sS0FBL0MsR0FBdUQsSUFBSUssS0FBSixDQUFVRixRQUFWLEVBQW9CRyxJQUFwQixDQUF5QixHQUF6QixDQUE3RDs7QUFFQUMsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUMsSUFBakY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUMsSUFBakY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHNFQUFzRUMsSUFBbEY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHlFQUF5RUMsSUFBckY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUMsSUFBakY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLGdGQUFnRkMsSUFBNUY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUMsSUFBakY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUMsSUFBakY7QUFDQUYsVUFBUUMsR0FBUixDQUFZLHFFQUFxRUUsT0FBakY7QUFDQUgsVUFBUUMsR0FBUixDQUFZSixVQUFVTSxPQUF0Qjs7QUFFQSxNQUFJWCxTQUFTRSxTQUFULElBQXNCRixTQUFTRSxTQUFuQyxFQUE4QztBQUM1QztBQUNBLFFBQU1VLFlBQWEsQ0FBQ2hCLGFBQWFJLEtBQUtILE1BQW5CLElBQTZCLENBQTlCLEdBQW1DLENBQXJEO0FBQ0EsUUFBTWdCLFlBQVlqQixhQUFhSSxLQUFLSCxNQUFsQixHQUEyQmUsU0FBN0M7QUFDQSxRQUFNRSxrQkFBZ0IsSUFBSVIsS0FBSixDQUFVTSxTQUFWLEVBQXFCTCxJQUFyQixDQUEwQixHQUExQixDQUFoQixHQUFpRFAsSUFBakQsR0FBd0QsSUFBSU0sS0FBSixDQUFVTyxTQUFWLEVBQXFCTixJQUFyQixDQUEwQixHQUExQixDQUE5RDtBQUNBQyxZQUFRQyxHQUFSLENBQVlLLFdBQVdILE9BQXZCO0FBQ0Q7O0FBRURILFVBQVFDLEdBQVIsQ0FBWSxxRUFBcUVFLE9BQWpGO0FBQ0FILFVBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsQ0E3Qk07O0FBK0JBLElBQU1NLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNoQ1AsVUFBUUMsR0FBUixDQUFZLENBQUcsaUJBQWlCTyxJQUFwQiwrQ0FBbUVDLE9BQW5FLENBQTJFUCxJQUF2RjtBQUNELENBRk0sQyxDQUVKIiwiZmlsZSI6IlF1YW50b1Rvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDAyLzA1LzE3LlxuICovXG5cbmltcG9ydCAnLi4vY29sb3JzJztcblxuY29uc3QgbGluZUxlbmd0aCA9ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgcHJpbnRRdWFudG9IZWFkZXIgPSAoYXBwLCBhcHAyKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gKGFwcCA9PT0gdW5kZWZpbmVkIHx8IGFwcCA9PT0gbnVsbCkgPyAnJyA6IGFwcDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICBjb25zdCBwcmVaZXJvcyA9ICgobGluZUxlbmd0aCAtIHRpdGxlLmxlbmd0aCkgLyAyKSB8IDA7XG4gIGNvbnN0IHBvc1plcm9zID0gbGluZUxlbmd0aCAtIHRpdGxlLmxlbmd0aCAtIHByZVplcm9zO1xuICBjb25zdCB0aXRsZUxpbmUgPSBgJHtuZXcgQXJyYXkocHJlWmVyb3MpLmpvaW4oJyAnKX0ke3RpdGxlfSR7bmV3IEFycmF5KHBvc1plcm9zKS5qb2luKCcgJyl9YDtcblxuICBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJy5ib2xkKTtcbiAgY29uc29sZS5sb2coJ3wgICBfX19fICAgICAgICAgICAgXyAgICAgICAgICAgX19fICAgICAgICAgICAgICAgICAgICBfICAgICAgICAgfCcuYm9sZCk7XG4gIGNvbnNvbGUubG9nKCd8ICAvIF9fX3xfX18gIF8gX18gfCB8XyBfXyBfICAgLyBfIFxcXFwgXyAgIF8gIF9fIF8gXyBfXyB8IHxfIF9fXyAgIHwnLmJvbGQpO1xuICBjb25zb2xlLmxvZyhcInwgfCB8ICAgLyBfIFxcXFx8ICdfIFxcXFx8IF9fLyBfYCB8IHwgfCB8IHwgfCB8IHwvIF9gIHwgJ18gXFxcXHwgX18vIF8gXFxcXCAgfFwiLmJvbGQpO1xuICBjb25zb2xlLmxvZygnfCB8IHxfX3wgKF8pIHwgfCB8IHwgfHwgKF98IHwgfCB8X3wgfCB8X3wgfCAoX3wgfCB8IHwgfCB8fCAoXykgfCB8Jy5ib2xkKTtcbiAgY29uc29sZS5sb2coJ3wgIFxcXFxfX19fXFxcXF9fXy98X3wgfF98XFxcXF9fXFxcXF9fLF98ICBcXFxcX19cXFxcX1xcXFxcXFxcX18sX3xcXFxcX18sX3xffCB8X3xcXFxcX19cXFxcX19fLyAgfCcuYm9sZCk7XG4gIGNvbnNvbGUubG9nKCd8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwnLmJvbGQpO1xuICBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJy5ib2xkKTtcbiAgY29uc29sZS5sb2coJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuaW52ZXJzZSk7XG4gIGNvbnNvbGUubG9nKHRpdGxlTGluZS5pbnZlcnNlKTtcblxuICBpZiAoYXBwMiAhPT0gdW5kZWZpbmVkICYmIGFwcDIgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgY29uc3QgcHJlWmVyb3MyID0gKChsaW5lTGVuZ3RoIC0gYXBwMi5sZW5ndGgpIC8gMikgfCAwO1xuICAgIGNvbnN0IHBvc1plcm9zMiA9IGxpbmVMZW5ndGggLSBhcHAyLmxlbmd0aCAtIHByZVplcm9zMjtcbiAgICBjb25zdCB0aXRsZUxpbmUyID0gYCR7bmV3IEFycmF5KHByZVplcm9zMikuam9pbignICcpfSR7YXBwMn0ke25ldyBBcnJheShwb3NaZXJvczIpLmpvaW4oJyAnKX1gO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlTGluZTIuaW52ZXJzZSk7XG4gIH1cblxuICBjb25zb2xlLmxvZygnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5pbnZlcnNlKTtcbiAgY29uc29sZS5sb2coJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1YW50b0NvbG9ycyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coYCR7J1F1YW50b0NvbG9ycygpJy53YXJufSBpcyBub3cgZGVwcmVjYXRlZCBhbmQgZG9lcyBub3RoaW5nIG5vdy5gLnZlcmJvc2UuYm9sZCk7XG59OyAvLyBTdHViXG4iXX0=