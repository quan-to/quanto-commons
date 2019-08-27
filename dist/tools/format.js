import { undefinedOrNull } from './validation';
import removeDiactrics from './removeDiactrics';
const maskStartRegExp = /^([^#ANX]+)/;
const format = (str, mask) => {
    let data = str;
    if (undefinedOrNull(mask)) {
        return data;
    }
    if (data.length === 1 && maskStartRegExp.test(mask)) {
        const e = maskStartRegExp.exec(mask);
        if (e) {
            data = e[0] + data;
        }
    }
    let text = '';
    let cOffset = 0;
    for (let i = 0; i < mask.length; i++) {
        const m = mask.charAt(i);
        switch (m) {
            case '#': break;
            case 'A': break;
            case '?': break;
            case 'N': break;
            case 'X': break;
            default: data = data.replace(m, '');
        }
    }
    for (let i = 0, x = 1; x && i < mask.length; ++i) {
        const c = data.charAt(i - cOffset);
        const m = mask.charAt(i);
        switch (m) {
            case '#':
                if (/\d/.test(c)) {
                    text += c;
                }
                else {
                    x = 0;
                }
                break;
            case 'A':
                if (/[a-z]/i.test(c)) {
                    text += c;
                }
                else {
                    x = 0;
                }
                break;
            case 'N':
                if (/[a-z0-9]/i.test(c)) {
                    text += c;
                }
                else {
                    x = 0;
                }
                break;
            case '?':
                cOffset++;
                break;
            case 'X':
                text += c;
                break;
            default:
                text += m;
                if (c && c !== m) {
                    data = ` ${data}`;
                }
                break;
        }
    }
    return text;
};
Number.prototype.format = function formatNumber(strFormat) {
    return format(this.toString(), strFormat);
};
String.prototype.format = function formatStr(strFormat) {
    return format(this.toString(), strFormat);
};
String.prototype.removeDiactrics = function removeDiactricsStr() {
    return removeDiactrics(this.toString());
};
Number.prototype.toMoney = function toMoney(decimals, decimalSeparator, separator) {
    const c = Number.isNaN(Math.abs(decimals || 2)) ? 2 : Math.abs(decimals || 2);
    const d = undefinedOrNull(decimalSeparator) ? ',' : decimalSeparator;
    const t = undefinedOrNull(separator) ? '.' : separator;
    const s = this < 0 ? '-' : '';
    const iN = parseInt(Math.abs(Number(this) || 0).toFixed(c), 10);
    const i = String(iN);
    const j = i.length > 3 ? i.length % 3 : 0;
    return s +
        (j ? i.substr(0, j) + t : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) +
        (c ? d + Math.abs(Math.abs(this) - iN).toFixed(c).slice(2) : '');
};
Number.prototype.padLeft = function padLeft(n, chr) {
    return (this < 0 ? '-' : '') + new Array((n - String(Math.abs(this)).length) + 1).join(chr || '0') + (Math.abs(this));
};
String.prototype.padLeft = String.prototype.padStart;
String.prototype.titleCase = function titleCase() {
    return this.toLowerCase().split(' ').map((s) => `${s.charAt(0).toUpperCase()}${s.substr(1)}`).join(' ');
};
function basename(str, sep) {
    const bSep = sep || '\\/';
    return str.split(new RegExp(`[${bSep}]`)).pop();
}
const FormatValue = format;
export { FormatValue, basename, };
//# sourceMappingURL=format.js.map