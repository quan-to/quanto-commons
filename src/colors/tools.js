/**
 * Created by Lucas Teske on 18/05/18.
 * @flow
 */

import { isRunningInNodeJS } from '../tools/validation';

const stripColors = str => str.replace(/\x1B\[\d+m/g, '');
const applyStyle = (color, str) => `${color.openTag}${str.replace(color.closeRegex, color.openTag)}${color.closeTag}`;

const applyStyleByName = (getColor, colorName, str) => applyStyle(getColor(colorName), str);
const applyIteratorFuncStyle = (itFunc, str) => str
  .split('')
  .map((l, i) => applyStyle(itFunc(i), l))
  .reduce((a, b) => `${a}${b}`);

const ansiSupported = () => isRunningInNodeJS(); // TODO: More strict checking

export {
  stripColors,
  applyStyle,
  applyStyleByName,
  ansiSupported,
  applyIteratorFuncStyle,
};
