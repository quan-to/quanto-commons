"use strict";
/**
 * Created by Lucas Teske on 18/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const ansi_1 = require("./ansi");
// eslint-disable-next-line no-extend-native
const setStringGetter = (name, value) => Object.defineProperty(String.prototype, name, {
    enumerable: false,
    configurable: false,
    get: value,
});
// @ts-ignore
const genColorGet = colorName => (tools_1.ansiSupported() ? function applyStyleString() {
    // @ts-ignore
    return tools_1.applyStyleByName(ansi_1.getColor, colorName, this);
} : function dummy() {
    // @ts-ignore
    return this;
});
function rainbow() {
    // @ts-ignore
    return tools_1.ansiSupported() ? tools_1.applyIteratorFuncStyle(ansi_1.getRainbowColor, this) : this;
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
ansi_1.getColorsName()
    // @ts-ignore
    .forEach(k => setStringGetter(k, genColorGet(k)));
setStringGetter('rainbow', rainbow);
setStringGetter('silly', rainbow);
//# sourceMappingURL=index.js.map