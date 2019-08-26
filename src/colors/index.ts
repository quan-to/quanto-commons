/**
 * Created by Lucas Teske on 18/05/18.
 * 
 */

import {
  ansiSupported,
  applyStyleByName,
  applyIteratorFuncStyle,
} from './tools';

import {
  getColor,
  getColorsName,
  getRainbowColor,
} from './ansi';


// eslint-disable-next-line no-extend-native
const setStringGetter = (name: string, value: any) => Object.defineProperty(String.prototype, name, {
  enumerable: false,
  configurable: false,
  get: value,
});

// @ts-ignore
const genColorGet = colorName => (ansiSupported() ? function applyStyleString() {
// @ts-ignore
  return applyStyleByName(getColor, colorName, this);
} : function dummy() {
// @ts-ignore
  return this;
});


function rainbow() {
// @ts-ignore
  return ansiSupported() ? applyIteratorFuncStyle(getRainbowColor, this) : this;
}

const colorMap = {
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
};

Object.keys(colorMap)
// @ts-ignore
  .forEach(k => setStringGetter(k, genColorGet(colorMap[k])));
getColorsName()
// @ts-ignore
  .forEach(k => setStringGetter(k, genColorGet(k)));

setStringGetter('rainbow', rainbow);
setStringGetter('silly', rainbow);
