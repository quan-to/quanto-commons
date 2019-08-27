import { undefinedOrNull, } from '../tools';
import { stripColors, } from '../colors/tools';
const FullSizeLUT = {
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
export const toFullSize = (msg) => msg
    .split('')
    .map(c => (!undefinedOrNull(FullSizeLUT[c]) ? FullSizeLUT[c] : c))
    .join('');
export const boxMessage = (msg) => {
    const lines = msg.split('\n');
    const outLines = [];
    const maxWidth = lines
        .map(l => stripColors(l).length)
        .reduce((a, b) => (a > b ? a : b));
    outLines.push(` ${'╔'.white}${'═'.repeat(maxWidth + 2).white}${'╗'.white}`);
    lines
        .map(l => ` ${'║'.white} ${l}${' '.repeat(maxWidth - stripColors(l).length)} ${'║'.white}`)
        .forEach((l) => {
        outLines.push(l);
    });
    outLines.push(` ${'╚'.white}${'═'.repeat(maxWidth + 2).white}${'╝'.white}`);
    return outLines.join('\n');
};
export const bclipMessage = (title, msg) => {
    const lines = msg.split('\n');
    const titleFull = title;
    const outLines = [];
    let curClipLine = 0;
    const maxWidth = lines
        .map(l => (stripColors(l).length + '    '.length))
        .reduce((a, b) => (a > b ? a : b));
    const titlePadding = (maxWidth - stripColors(titleFull).length) / 2;
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
export const bclipError = (excpt) => {
    const [name, ...rest] = (excpt.stack || '').split('\n');
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
        if (stripColors(line).length > 80) {
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
    return bclipMessage(title, outLines.join('\n'));
};
//# sourceMappingURL=bclip.js.map