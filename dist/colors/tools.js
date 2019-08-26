import { isRunningInNodeJS } from '../tools';
const stripColors = (str) => str.replace(/\x1B\[\d+m/g, '');
const applyStyle = (color, str) => `${color.openTag}${str.replace(color.closeRegex, color.openTag)}${color.closeTag}`;
const applyStyleByName = (getColor, colorName, str) => applyStyle(getColor(colorName), str);
const applyIteratorFuncStyle = (itFunc, str) => str
    .split('')
    .map((l, i) => applyStyle(itFunc(i), l))
    .reduce((a, b) => `${a}${b}`);
const ansiSupported = () => isRunningInNodeJS();
export { stripColors, applyStyle, applyStyleByName, ansiSupported, applyIteratorFuncStyle, };
//# sourceMappingURL=tools.js.map