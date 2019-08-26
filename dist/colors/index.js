import { ansiSupported, applyStyleByName, applyIteratorFuncStyle, } from './tools';
import { getColor, getColorsName, getRainbowColor, } from './ansi';
const setStringGetter = (name, value) => Object.defineProperty(String.prototype, name, {
    enumerable: false,
    configurable: false,
    get: value,
});
const genColorGet = colorName => (ansiSupported() ? function applyStyleString() {
    return applyStyleByName(getColor, colorName, this);
} : function dummy() {
    return this;
});
function rainbow() {
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
    .forEach(k => setStringGetter(k, genColorGet(colorMap[k])));
getColorsName()
    .forEach(k => setStringGetter(k, genColorGet(k)));
setStringGetter('rainbow', rainbow);
setStringGetter('silly', rainbow);
//# sourceMappingURL=index.js.map