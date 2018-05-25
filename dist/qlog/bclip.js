'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bclipError = exports.bclipMessage = exports.boxMessage = exports.toFullSize = undefined;

var _tools = require('../tools');

var _tools2 = require('../colors/tools');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); } /* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 25/05/18.
 * 
 */

var FullSizeLUT = {
  // region Numbers
  0: '０',
  1: '１',
  2: '２',
  3: '３',
  4: '４',
  5: '５',
  6: '６',
  7: '７',
  8: '８',
  9: '９',
  // endregion
  // region Upper Case
  A: 'Ａ',
  B: 'Ｂ',
  C: 'Ｃ',
  D: 'Ｄ',
  E: 'Ｅ',
  F: 'Ｆ',
  G: 'Ｇ',
  H: 'Ｈ',
  I: 'Ｉ',
  J: 'Ｊ',
  K: 'Ｋ',
  L: 'Ｌ',
  M: 'Ｍ',
  N: 'Ｎ',
  O: 'Ｏ',
  P: 'Ｐ',
  Q: 'Ｑ',
  R: 'Ｒ',
  S: 'Ｓ',
  T: 'Ｔ',
  U: 'Ｕ',
  V: 'Ｖ',
  W: 'Ｗ',
  X: 'Ｘ',
  Y: 'Ｙ',
  Z: 'Ｚ',
  // endregion
  // region Lower Case
  a: 'ａ',
  b: 'ｂ',
  c: 'ｃ',
  d: 'ｄ',
  e: 'ｅ',
  f: 'ｆ',
  g: 'ｇ',
  h: 'ｈ',
  i: 'ｉ',
  j: 'ｊ',
  k: 'ｋ',
  l: 'ｌ',
  m: 'ｍ',
  n: 'ｎ',
  o: 'ｏ',
  p: 'ｐ',
  q: 'ｑ',
  r: 'ｒ',
  s: 'ｓ',
  t: 'ｔ',
  u: 'ｕ',
  v: 'ｖ',
  w: 'ｗ',
  x: 'ｘ',
  y: 'ｙ',
  z: 'ｚ',
  // endregion
  // region Meta
  ',': '，',
  '.': '．',
  ':': '：',
  ';': '；',
  '!': '！',
  '?': '？',
  '"': '＂',
  '\'': '＇',
  '`': '｀',
  '^': '＾',
  '~': '～',
  _: '＿',
  '&': '＆',
  '@': '＠',
  '#': '＃',
  '%': '％',
  '+': '＋',
  '-': '－',
  '*': '＊',
  '=': '＝',
  '<': '＜',
  '>': '＞',
  '(': '（',
  ')': '）',
  '[': '［',
  ']': '］',
  '{': '｛',
  '}': '｝',
  '|': '｜',
  '/': '／',
  '\\': '＼',
  $: '＄'
  // endregion
};

var BClipLut = ['                    ', '       ▄████▄       ', '      ▐▌    ▐▌      ', '   ▄▀▀█▀    ▐▌      ', '   ▄ ▐▄     ▐▌▀▀▄   ', ' ▐▀ ▄▄ ▀▌ ▄▀▀ ▀▄ ▀  ', ' ▐ ▀██▀ ▌▐ ▄██▄ ▌   ', '  ▀▄ ▄▄▀ ▐  ▀▀  ▌   ', '     █    ▀▄▄ ▄▀    ', '     █ █    █ ▐     ', '     █ █   ▐▌ █     ', '     █ █   ▐▌ █     ', '     ▐▌▐▌   █ █     ', '     ▐▌ █▄ ▐▌ █     ', '      █  ▀▀▀  ▐▌    ', '      ▐▌      █     ', '       █▄    ▄█     ', '        ▀████▀      ', '                    '];

var BClipEmpty = '                    ';

var toFullSize = exports.toFullSize = function toFullSize(msg) {
  return msg.split('').map(function (c) {
    return !(0, _tools.undefinedOrNull)(FullSizeLUT[c]) ? FullSizeLUT[c] : c;
  }).join('');
};

var boxMessage = exports.boxMessage = function boxMessage(msg) {
  var lines = msg.split('\n');
  var outLines = [];
  var maxWidth = lines.map(function (l) {
    return (0, _tools2.stripColors)(l).length;
  }).reduce(function (a, b) {
    return a > b ? a : b;
  });

  outLines.push(' ' + '╔'.white + '═'.repeat(maxWidth + 2).white + '╗'.white);

  lines.map(function (l) {
    return ' ' + '║'.white + ' ' + l + ' '.repeat(maxWidth - (0, _tools2.stripColors)(l).length) + ' ' + '║'.white;
  }).forEach(function (l) {
    outLines.push(l);
  });

  outLines.push(' ' + '╚'.white + '═'.repeat(maxWidth + 2).white + '╝'.white);

  return outLines.join('\n');
};

var bclipMessage = exports.bclipMessage = function bclipMessage(title, msg) {
  var lines = msg.split('\n');
  var titleFull = title; // toFullSize(title); :(( broken on box
  var outLines = [];
  var curClipLine = 0;

  var maxWidth = lines.map(function (l) {
    return (0, _tools2.stripColors)(l).length + '    '.length;
  }).reduce(function (a, b) {
    return a > b ? a : b;
  });

  var titlePadding = (maxWidth - (0, _tools2.stripColors)(titleFull).length) / 2;

  outLines.push('' + BClipLut[curClipLine++]);
  outLines.push('' + BClipLut[curClipLine++] + ' '.repeat(titlePadding) + titleFull + ' '.repeat(titlePadding));
  outLines.push('' + BClipLut[curClipLine++]);
  outLines.push('' + BClipLut[curClipLine++]);

  lines.forEach(function (l) {
    var bclipLine = curClipLine > BClipLut.length - 1 ? BClipEmpty : BClipLut[curClipLine];
    outLines.push(bclipLine + '    ' + l);
    curClipLine += 1;
  });

  for (var i = curClipLine; i < BClipLut.length; i++) {
    outLines.push(BClipLut[i]);
  }

  return outLines.join('\n');
};

var bclipError = exports.bclipError = function bclipError(excpt) {
  var _excpt$stack$split = excpt.stack.split('\n'),
      _excpt$stack$split2 = _toArray(_excpt$stack$split),
      name = _excpt$stack$split2[0],
      rest = _excpt$stack$split2.slice(1);

  var title = name.red.bold;
  var lines = rest;

  if (lines[lines.length - 1] === '\x1B[39m') {
    lines[lines.length - 2] += '\x1B[39m';
    lines.splice(lines.length - 1, 1);
  }

  var outLines = [];
  outLines.push('Looks like your app is crash.'.warn);
  outLines.push('Do you need any help?'.warn.bold);
  outLines.push('');

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if ((0, _tools2.stripColors)(line).length > 80) {
      var curLine = line;
      outLines.push(curLine.substr(0, 80) + '  ');
      curLine = curLine.substr(80);
      while (curLine.length !== 0) {
        outLines.push('        ' + curLine.substr(0, 80) + '  ');
        curLine = curLine.substr(80);
      }
    } else {
      outLines.push(line);
    }
  }

  return bclipMessage(title, outLines.join('\n'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xbG9nL2JjbGlwLmpzIl0sIm5hbWVzIjpbIkZ1bGxTaXplTFVUIiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkgiLCJJIiwiSiIsIksiLCJMIiwiTSIsIk4iLCJPIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJVIiwiViIsIlciLCJYIiwiWSIsIloiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwicSIsInIiLCJzIiwidCIsInUiLCJ2IiwidyIsIngiLCJ5IiwieiIsIl8iLCIkIiwiQkNsaXBMdXQiLCJCQ2xpcEVtcHR5IiwidG9GdWxsU2l6ZSIsIm1zZyIsInNwbGl0IiwibWFwIiwiam9pbiIsImJveE1lc3NhZ2UiLCJsaW5lcyIsIm91dExpbmVzIiwibWF4V2lkdGgiLCJsZW5ndGgiLCJyZWR1Y2UiLCJwdXNoIiwid2hpdGUiLCJyZXBlYXQiLCJmb3JFYWNoIiwiYmNsaXBNZXNzYWdlIiwidGl0bGUiLCJ0aXRsZUZ1bGwiLCJjdXJDbGlwTGluZSIsInRpdGxlUGFkZGluZyIsImJjbGlwTGluZSIsImJjbGlwRXJyb3IiLCJleGNwdCIsInN0YWNrIiwibmFtZSIsInJlc3QiLCJyZWQiLCJib2xkIiwic3BsaWNlIiwid2FybiIsImxpbmUiLCJjdXJMaW5lIiwic3Vic3RyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7O0FBSUE7OzhFQVZBO0FBQ0E7Ozs7O0FBYUEsSUFBTUEsY0FBYztBQUNsQjtBQUNBLEtBQUcsR0FGZTtBQUdsQixLQUFHLEdBSGU7QUFJbEIsS0FBRyxHQUplO0FBS2xCLEtBQUcsR0FMZTtBQU1sQixLQUFHLEdBTmU7QUFPbEIsS0FBRyxHQVBlO0FBUWxCLEtBQUcsR0FSZTtBQVNsQixLQUFHLEdBVGU7QUFVbEIsS0FBRyxHQVZlO0FBV2xCLEtBQUcsR0FYZTtBQVlsQjtBQUNBO0FBQ0FDLEtBQUcsR0FkZTtBQWVsQkMsS0FBRyxHQWZlO0FBZ0Js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QU4sQ0FBYjtBQUNBLFFBQUkseUJBQVlvRCxJQUFaLEVBQWtCckIsTUFBbEIsR0FBMkIsRUFBL0IsRUFBbUM7QUFDakMsVUFBSXNCLFVBQVVELElBQWQ7QUFDQXZCLGVBQVNJLElBQVQsQ0FBaUJvQixRQUFRQyxNQUFSLENBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFqQjtBQUNBRCxnQkFBVUEsUUFBUUMsTUFBUixDQUFlLEVBQWYsQ0FBVjtBQUNBLGFBQU9ELFFBQVF0QixNQUFSLEtBQW1CLENBQTFCLEVBQTZCO0FBQzNCRixpQkFBU0ksSUFBVCxjQUF5Qm9CLFFBQVFDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLENBQXpCO0FBQ0FELGtCQUFVQSxRQUFRQyxNQUFSLENBQWUsRUFBZixDQUFWO0FBQ0Q7QUFDRixLQVJELE1BUU87QUFDTHpCLGVBQVNJLElBQVQsQ0FBY21CLElBQWQ7QUFDRDtBQUNGOztBQUVELFNBQU9mLGFBQWFDLEtBQWIsRUFBb0JULFNBQVNILElBQVQsQ0FBYyxJQUFkLENBQXBCLENBQVA7QUFDRCxDQWhDTSIsImZpbGUiOiJiY2xpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMjUvMDUvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7XG4gIHVuZGVmaW5lZE9yTnVsbCxcbn0gZnJvbSAnLi4vdG9vbHMnO1xuXG5pbXBvcnQge1xuICBzdHJpcENvbG9ycyxcbn0gZnJvbSAnLi4vY29sb3JzL3Rvb2xzJztcblxuY29uc3QgRnVsbFNpemVMVVQgPSB7XG4gIC8vIHJlZ2lvbiBOdW1iZXJzXG4gIDA6ICfvvJAnLFxuICAxOiAn77yRJyxcbiAgMjogJ++8kicsXG4gIDM6ICfvvJMnLFxuICA0OiAn77yUJyxcbiAgNTogJ++8lScsXG4gIDY6ICfvvJYnLFxuICA3OiAn77yXJyxcbiAgODogJ++8mCcsXG4gIDk6ICfvvJknLFxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uIFVwcGVyIENhc2VcbiAgQTogJ++8oScsXG4gIEI6ICfvvKInLFxuICBDOiAn77yjJyxcbiAgRDogJ++8pCcsXG4gIEU6ICfvvKUnLFxuICBGOiAn77ymJyxcbiAgRzogJ++8pycsXG4gIEg6ICfvvKgnLFxuICBJOiAn77ypJyxcbiAgSjogJ++8qicsXG4gIEs6ICfvvKsnLFxuICBMOiAn77ysJyxcbiAgTTogJ++8rScsXG4gIE46ICfvvK4nLFxuICBPOiAn77yvJyxcbiAgUDogJ++8sCcsXG4gIFE6ICfvvLEnLFxuICBSOiAn77yyJyxcbiAgUzogJ++8sycsXG4gIFQ6ICfvvLQnLFxuICBVOiAn77y1JyxcbiAgVjogJ++8ticsXG4gIFc6ICfvvLcnLFxuICBYOiAn77y4JyxcbiAgWTogJ++8uScsXG4gIFo6ICfvvLonLFxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uIExvd2VyIENhc2VcbiAgYTogJ++9gScsXG4gIGI6ICfvvYInLFxuICBjOiAn772DJyxcbiAgZDogJ++9hCcsXG4gIGU6ICfvvYUnLFxuICBmOiAn772GJyxcbiAgZzogJ++9hycsXG4gIGg6ICfvvYgnLFxuICBpOiAn772JJyxcbiAgajogJ++9iicsXG4gIGs6ICfvvYsnLFxuICBsOiAn772MJyxcbiAgbTogJ++9jScsXG4gIG46ICfvvY4nLFxuICBvOiAn772PJyxcbiAgcDogJ++9kCcsXG4gIHE6ICfvvZEnLFxuICByOiAn772SJyxcbiAgczogJ++9kycsXG4gIHQ6ICfvvZQnLFxuICB1OiAn772VJyxcbiAgdjogJ++9licsXG4gIHc6ICfvvZcnLFxuICB4OiAn772YJyxcbiAgeTogJ++9mScsXG4gIHo6ICfvvZonLFxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uIE1ldGFcbiAgJywnOiAn77yMJyxcbiAgJy4nOiAn77yOJyxcbiAgJzonOiAn77yaJyxcbiAgJzsnOiAn77ybJyxcbiAgJyEnOiAn77yBJyxcbiAgJz8nOiAn77yfJyxcbiAgJ1wiJzogJ++8gicsXG4gICdcXCcnOiAn77yHJyxcbiAgJ2AnOiAn772AJyxcbiAgJ14nOiAn77y+JyxcbiAgJ34nOiAn772eJyxcbiAgXzogJ++8vycsXG4gICcmJzogJ++8hicsXG4gICdAJzogJ++8oCcsXG4gICcjJzogJ++8gycsXG4gICclJzogJ++8hScsXG4gICcrJzogJ++8iycsXG4gICctJzogJ++8jScsXG4gICcqJzogJ++8iicsXG4gICc9JzogJ++8nScsXG4gICc8JzogJ++8nCcsXG4gICc+JzogJ++8nicsXG4gICcoJzogJ++8iCcsXG4gICcpJzogJ++8iScsXG4gICdbJzogJ++8uycsXG4gICddJzogJ++8vScsXG4gICd7JzogJ++9mycsXG4gICd9JzogJ++9nScsXG4gICd8JzogJ++9nCcsXG4gICcvJzogJ++8jycsXG4gICdcXFxcJzogJ++8vCcsXG4gICQ6ICfvvIQnLFxuICAvLyBlbmRyZWdpb25cbn07XG5cbmNvbnN0IEJDbGlwTHV0ID0gW1xuICAnICAgICAgICAgICAgICAgICAgICAnLFxuICAnICAgICAgIOKWhOKWiOKWiOKWiOKWiOKWhCAgICAgICAnLFxuICAnICAgICAg4paQ4paMICAgIOKWkOKWjCAgICAgICcsXG4gICcgICDiloTiloDiloDilojiloAgICAg4paQ4paMICAgICAgJyxcbiAgJyAgIOKWhCDilpDiloQgICAgIOKWkOKWjOKWgOKWgOKWhCAgICcsXG4gICcg4paQ4paAIOKWhOKWhCDiloDilowg4paE4paA4paAIOKWgOKWhCDiloAgICcsXG4gICcg4paQIOKWgOKWiOKWiOKWgCDilozilpAg4paE4paI4paI4paEIOKWjCAgICcsXG4gICcgIOKWgOKWhCDiloTiloTiloAg4paQICDiloDiloAgIOKWjCAgICcsXG4gICcgICAgIOKWiCAgICDiloDiloTiloQg4paE4paAICAgICcsXG4gICcgICAgIOKWiCDiloggICAg4paIIOKWkCAgICAgJyxcbiAgJyAgICAg4paIIOKWiCAgIOKWkOKWjCDiloggICAgICcsXG4gICcgICAgIOKWiCDiloggICDilpDilowg4paIICAgICAnLFxuICAnICAgICDilpDilozilpDilowgICDilogg4paIICAgICAnLFxuICAnICAgICDilpDilowg4paI4paEIOKWkOKWjCDiloggICAgICcsXG4gICcgICAgICDiloggIOKWgOKWgOKWgCAg4paQ4paMICAgICcsXG4gICcgICAgICDilpDilowgICAgICDiloggICAgICcsXG4gICcgICAgICAg4paI4paEICAgIOKWhOKWiCAgICAgJyxcbiAgJyAgICAgICAg4paA4paI4paI4paI4paI4paAICAgICAgJyxcbiAgJyAgICAgICAgICAgICAgICAgICAgJyxcbl07XG5cbmNvbnN0IEJDbGlwRW1wdHkgPSAnICAgICAgICAgICAgICAgICAgICAnO1xuXG5leHBvcnQgY29uc3QgdG9GdWxsU2l6ZSA9IG1zZyA9PiBtc2dcbiAgLnNwbGl0KCcnKVxuICAubWFwKGMgPT4gKCF1bmRlZmluZWRPck51bGwoRnVsbFNpemVMVVRbY10pID8gRnVsbFNpemVMVVRbY10gOiBjKSlcbiAgLmpvaW4oJycpO1xuXG5leHBvcnQgY29uc3QgYm94TWVzc2FnZSA9IChtc2cpID0+IHtcbiAgY29uc3QgbGluZXMgPSBtc2cuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBvdXRMaW5lcyA9IFtdO1xuICBjb25zdCBtYXhXaWR0aCA9IGxpbmVzXG4gICAgLm1hcChsID0+IHN0cmlwQ29sb3JzKGwpLmxlbmd0aClcbiAgICAucmVkdWNlKChhLCBiKSA9PiAoYSA+IGIgPyBhIDogYikpO1xuXG4gIG91dExpbmVzLnB1c2goYCAkeyfilZQnLndoaXRlfSR7J+KVkCcucmVwZWF0KG1heFdpZHRoICsgMikud2hpdGV9JHsn4pWXJy53aGl0ZX1gKTtcblxuICBsaW5lc1xuICAgIC5tYXAobCA9PiBgICR7J+KVkScud2hpdGV9ICR7bH0keycgJy5yZXBlYXQobWF4V2lkdGggLSBzdHJpcENvbG9ycyhsKS5sZW5ndGgpfSAkeyfilZEnLndoaXRlfWApXG4gICAgLmZvckVhY2goKGwpID0+IHsgb3V0TGluZXMucHVzaChsKTsgfSk7XG5cbiAgb3V0TGluZXMucHVzaChgICR7J+KVmicud2hpdGV9JHsn4pWQJy5yZXBlYXQobWF4V2lkdGggKyAyKS53aGl0ZX0keyfilZ0nLndoaXRlfWApO1xuXG4gIHJldHVybiBvdXRMaW5lcy5qb2luKCdcXG4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBiY2xpcE1lc3NhZ2UgPSAodGl0bGUsIG1zZykgPT4ge1xuICBjb25zdCBsaW5lcyA9IG1zZy5zcGxpdCgnXFxuJyk7XG4gIGNvbnN0IHRpdGxlRnVsbCA9IHRpdGxlOyAvLyB0b0Z1bGxTaXplKHRpdGxlKTsgOigoIGJyb2tlbiBvbiBib3hcbiAgY29uc3Qgb3V0TGluZXMgPSBbXTtcbiAgbGV0IGN1ckNsaXBMaW5lID0gMDtcblxuICBjb25zdCBtYXhXaWR0aCA9IGxpbmVzXG4gICAgLm1hcChsID0+IChzdHJpcENvbG9ycyhsKS5sZW5ndGggKyAnICAgICcubGVuZ3RoKSlcbiAgICAucmVkdWNlKChhLCBiKSA9PiAoYSA+IGIgPyBhIDogYikpO1xuXG4gIGNvbnN0IHRpdGxlUGFkZGluZyA9IChtYXhXaWR0aCAtIHN0cmlwQ29sb3JzKHRpdGxlRnVsbCkubGVuZ3RoKSAvIDI7XG5cbiAgb3V0TGluZXMucHVzaChgJHtCQ2xpcEx1dFtjdXJDbGlwTGluZSsrXX1gKTtcbiAgb3V0TGluZXMucHVzaChgJHtCQ2xpcEx1dFtjdXJDbGlwTGluZSsrXX0keycgJy5yZXBlYXQodGl0bGVQYWRkaW5nKX0ke3RpdGxlRnVsbH0keycgJy5yZXBlYXQodGl0bGVQYWRkaW5nKX1gKTtcbiAgb3V0TGluZXMucHVzaChgJHtCQ2xpcEx1dFtjdXJDbGlwTGluZSsrXX1gKTtcbiAgb3V0TGluZXMucHVzaChgJHtCQ2xpcEx1dFtjdXJDbGlwTGluZSsrXX1gKTtcblxuICBsaW5lcy5mb3JFYWNoKChsKSA9PiB7XG4gICAgY29uc3QgYmNsaXBMaW5lID0gY3VyQ2xpcExpbmUgPiAoQkNsaXBMdXQubGVuZ3RoIC0gMSkgPyBCQ2xpcEVtcHR5IDogQkNsaXBMdXRbY3VyQ2xpcExpbmVdO1xuICAgIG91dExpbmVzLnB1c2goYCR7YmNsaXBMaW5lfSAgICAke2x9YCk7XG4gICAgY3VyQ2xpcExpbmUgKz0gMTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IGN1ckNsaXBMaW5lOyBpIDwgQkNsaXBMdXQubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRMaW5lcy5wdXNoKEJDbGlwTHV0W2ldKTtcbiAgfVxuXG4gIHJldHVybiBvdXRMaW5lcy5qb2luKCdcXG4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBiY2xpcEVycm9yID0gKGV4Y3B0OiBFcnJvcikgPT4ge1xuICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBleGNwdC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gIGNvbnN0IHRpdGxlID0gbmFtZS5yZWQuYm9sZDtcbiAgY29uc3QgbGluZXMgPSByZXN0O1xuXG5cbiAgaWYgKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdID09PSAnXFx1MDAxYlszOW0nKSB7XG4gICAgbGluZXNbbGluZXMubGVuZ3RoIC0gMl0gKz0gJ1xcdTAwMWJbMzltJztcbiAgICBsaW5lcy5zcGxpY2UobGluZXMubGVuZ3RoIC0gMSwgMSk7XG4gIH1cblxuICBjb25zdCBvdXRMaW5lcyA9IFtdO1xuICBvdXRMaW5lcy5wdXNoKCdMb29rcyBsaWtlIHlvdXIgYXBwIGlzIGNyYXNoLicud2Fybik7XG4gIG91dExpbmVzLnB1c2goJ0RvIHlvdSBuZWVkIGFueSBoZWxwPycud2Fybi5ib2xkKTtcbiAgb3V0TGluZXMucHVzaCgnJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpZiAoc3RyaXBDb2xvcnMobGluZSkubGVuZ3RoID4gODApIHtcbiAgICAgIGxldCBjdXJMaW5lID0gbGluZTtcbiAgICAgIG91dExpbmVzLnB1c2goYCR7Y3VyTGluZS5zdWJzdHIoMCwgODApfSAgYCk7XG4gICAgICBjdXJMaW5lID0gY3VyTGluZS5zdWJzdHIoODApO1xuICAgICAgd2hpbGUgKGN1ckxpbmUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIG91dExpbmVzLnB1c2goYCAgICAgICAgJHtjdXJMaW5lLnN1YnN0cigwLCA4MCl9ICBgKTtcbiAgICAgICAgY3VyTGluZSA9IGN1ckxpbmUuc3Vic3RyKDgwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3V0TGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmNsaXBNZXNzYWdlKHRpdGxlLCBvdXRMaW5lcy5qb2luKCdcXG4nKSk7XG59O1xuIl19