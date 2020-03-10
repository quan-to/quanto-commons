"use strict";
/* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 25/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const tools_2 = require("../colors/tools");
const FullSizeLUT = {
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
    $: '＄',
};
const BClipLut = [
    '                    ',
    '       ▄████▄       ',
    '      ▐▌    ▐▌      ',
    '   ▄▀▀█▀    ▐▌      ',
    '   ▄ ▐▄     ▐▌▀▀▄   ',
    ' ▐▀ ▄▄ ▀▌ ▄▀▀ ▀▄ ▀  ',
    ' ▐ ▀██▀ ▌▐ ▄██▄ ▌   ',
    '  ▀▄ ▄▄▀ ▐  ▀▀  ▌   ',
    '     █    ▀▄▄ ▄▀    ',
    '     █ █    █ ▐     ',
    '     █ █   ▐▌ █     ',
    '     █ █   ▐▌ █     ',
    '     ▐▌▐▌   █ █     ',
    '     ▐▌ █▄ ▐▌ █     ',
    '      █  ▀▀▀  ▐▌    ',
    '      ▐▌      █     ',
    '       █▄    ▄█     ',
    '        ▀████▀      ',
    '                    ',
];
const BClipEmpty = '                    ';
exports.toFullSize = (msg) => msg
    .split('')
    .map(c => (!tools_1.undefinedOrNull(FullSizeLUT[c]) ? FullSizeLUT[c] : c))
    .join('');
exports.boxMessage = (msg) => {
    const lines = msg.split('\n');
    const outLines = [];
    const maxWidth = lines
        .map(l => tools_2.stripColors(l).length)
        .reduce((a, b) => (a > b ? a : b));
    outLines.push(` ${'╔'.white}${'═'.repeat(maxWidth + 2).white}${'╗'.white}`);
    lines
        .map(l => ` ${'║'.white} ${l}${' '.repeat(maxWidth - tools_2.stripColors(l).length)} ${'║'.white}`)
        .forEach((l) => {
        outLines.push(l);
    });
    outLines.push(` ${'╚'.white}${'═'.repeat(maxWidth + 2).white}${'╝'.white}`);
    return outLines.join('\n');
};
exports.bclipMessage = (title, msg) => {
    const lines = msg.split('\n');
    const titleFull = title; // toFullSize(title); :(( broken on box
    const outLines = [];
    let curClipLine = 0;
    const maxWidth = lines
        .map(l => (tools_2.stripColors(l).length + '    '.length))
        .reduce((a, b) => (a > b ? a : b));
    const titlePadding = (maxWidth - tools_2.stripColors(titleFull).length) / 2;
    outLines.push(`${BClipLut[curClipLine++]}`);
    outLines.push(`${BClipLut[curClipLine++]}${' '.repeat(titlePadding)}${titleFull}${' '.repeat(titlePadding)}`);
    outLines.push(`${BClipLut[curClipLine++]}`);
    outLines.push(`${BClipLut[curClipLine++]}`);
    lines.forEach((l) => {
        const bclipLine = curClipLine > (BClipLut.length - 1) ? BClipEmpty : BClipLut[curClipLine];
        outLines.push(`${bclipLine}    ${l}`);
        curClipLine += 1;
    });
    for (let i = curClipLine; i < BClipLut.length; i++) {
        outLines.push(BClipLut[i]);
    }
    return outLines.join('\n');
};
exports.bclipError = (excpt) => {
    const [name, ...rest] = (excpt.stack || '').split('\n');
    // @ts-ignore
    const title = name.red.bold;
    const lines = rest;
    if (lines[lines.length - 1] === '\u001b[39m') {
        lines[lines.length - 2] += '\u001b[39m';
        lines.splice(lines.length - 1, 1);
    }
    const outLines = [];
    outLines.push('Looks like your app is crash.'.warn);
    outLines.push('Do you need any help?'.warn.bold);
    outLines.push('');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (tools_2.stripColors(line).length > 80) {
            let curLine = line;
            outLines.push(`${curLine.substr(0, 80)}  `);
            curLine = curLine.substr(80);
            while (curLine.length !== 0) {
                outLines.push(`        ${curLine.substr(0, 80)}  `);
                curLine = curLine.substr(80);
            }
        }
        else {
            outLines.push(line);
        }
    }
    return exports.bclipMessage(title, outLines.join('\n'));
};
//# sourceMappingURL=bclip.js.map