"use strict";
/**
 * Created by Lucas Teske on 18/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const stripColors = (str) => str.replace(/\x1B\[\d+m/g, '');
exports.stripColors = stripColors;
const applyStyle = (color, str) => `${color.openTag}${str.replace(color.closeRegex, color.openTag)}${color.closeTag}`;
exports.applyStyle = applyStyle;
const applyStyleByName = (getColor, colorName, str) => applyStyle(getColor(colorName), str);
exports.applyStyleByName = applyStyleByName;
const applyIteratorFuncStyle = (itFunc, str) => str
    .split('')
    .map((l, i) => applyStyle(itFunc(i), l))
    .reduce((a, b) => `${a}${b}`);
exports.applyIteratorFuncStyle = applyIteratorFuncStyle;
const ansiSupported = () => tools_1.isRunningInNodeJS(); // TODO: More strict checking
exports.ansiSupported = ansiSupported;
//# sourceMappingURL=tools.js.map