/**
 * Created by Lucas Teske on 18/05/18.
 */

import {isRunningInNodeJS} from '../tools';
import {AnsiColor} from "./ansi";

const stripColors = (str: string) => str.replace(/\x1B\[\d+m/g, '');
const applyStyle = (color: AnsiColor, str: string) => `${color.openTag}${str.replace(color.closeRegex, color.openTag)}${color.closeTag}`;

const applyStyleByName = (getColor: (name: string) => AnsiColor, colorName: string, str: string) => applyStyle(getColor(colorName), str);
const applyIteratorFuncStyle = (itFunc: any, str: string) => str
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
