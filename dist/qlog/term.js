"use strict";
/**
 * Created by Lucas Teske on 22/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const figures = require("figures");
const models_1 = require("../models");
const tools_1 = require("../tools");
const tools_2 = require("../colors/tools");
const styles_1 = require("./styles");
const getStrColor = (str, color) => (!tools_1.undefinedOrNull(str[color.toString()]) ? str[color.toString()] : str.info);
const buildTerminal = (parent, type, ...args) => {
    let msg = {};
    let additional = {};
    if (args.length === 1 && typeof (args[0]) === 'object' && args[0] !== null) {
        if (args[0] instanceof Error) {
            [msg] = args;
        }
        else {
            const [{ prefix, message, suffix }] = args;
            msg = message || '';
            additional = { suffix, prefix };
        }
    }
    else {
        msg = args.join(' ');
    }
    let msgBase = [];
    if (parent.__config__.showDateTime) {
        msgBase.push(`[${tools_1.getUTCNow().white.dim}]`);
    }
    if (parent.__config__.showFilename) {
        msgBase.push(`[${tools_1.getCallerFilename().verbose.bold}]`);
    }
    if (parent.__config__.scope) {
        if (Array.isArray(parent.__config__.scope)) {
            if (parent.__config__.scope.length === 1) {
                msgBase.push(`[${parent.__config__.scope[0].white}]`);
            }
            else {
                const scopes = parent.__config__.scope.filter((x) => x.length !== 0);
                msgBase.push(`[${scopes.reduce((a, b) => `${a.white} ➡ ${b.white}`)}]`);
            }
        }
        else {
            msgBase.push(`[${parent.__config__.scope.white}]`);
        }
    }
    if (additional.prefix) {
        msgBase.push(`:${additional.prefix.white.dim}:`);
    }
    if (!tools_1.undefinedOrNull(parent.__config__.headPadding)) {
        const base = msgBase.join(' ');
        const totalLen = base.length;
        const strippedLen = tools_2.stripColors(base).length;
        const nonPrintableLen = totalLen - strippedLen;
        msgBase.length = 0;
        msgBase.push(base.padEnd(parent.__config__.headPadding + nonPrintableLen));
    }
    if (msgBase.length !== 0) {
        msgBase.push(figures.pointer);
        msgBase = msgBase.map(i => i.info);
    }
    if (parent.__config__.showBadge && type.badge) {
        msgBase.push(getStrColor(type.badge.padEnd(type.badge.length + 1), type.color));
    }
    if (parent.__config__.showLabel && type.label) {
        msgBase.push(`${getStrColor(type.label.underline.toString(), type.color).padEnd(parent.__cache__.longestLabel + 22)}`);
    }
    if (msg instanceof models_1.ErrorObject) {
        const { errorCode, errorField, message, errorData, } = msg;
        const base = msgBase.join(' ');
        const strippedLen = tools_2.stripColors(base).length;
        msgBase.push(`${'╔'.white} ${getStrColor(`(${(errorCode || '').warn.bold}) ${message}`, type.color)}\n`);
        const nextLineChar = parent.__config__.showErrorCodeErrorData ? '╠'.white : '╚'.white;
        msgBase.push(`${''.padStart(strippedLen - 1)} ${nextLineChar}    ${'Error Field'.white.bold}: ${(errorField || '')}\n`.gray);
        if (parent.__config__.showErrorCodeErrorData) {
            const errorDataString = !tools_1.undefinedOrNull(errorData) && errorData.trim().length !== 0 ?
                `${JSON.stringify(JSON.parse(errorData), null, 2)}` :
                // @ts-ignore
                ('null'.warn.bold);
            const lines = errorDataString.split('\n').filter(r => r.length > 0);
            // msgBase.push(`\n    ${'ErrorData'.white.bold}: ${errorDataString}`.gray);
            msgBase.push(`${''.padStart(strippedLen - 1)} ${'╠'.white}    ${'Error Data'.white.bold}: \n`);
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                msgBase.push(''.padStart(strippedLen - 1));
                const preChar = i === lines.length - 1 ? '╚'.white : '╠'.white;
                msgBase.push(`${preChar}        ${line.gray}\n`);
            }
        }
    }
    else if (msg instanceof Error) {
        const [name, ...rest] = (msg.stack || '').split('\n');
        const lines = [getStrColor(name, type.color)];
        rest.forEach((l) => {
            lines.push(l.grey);
        });
        const base = msgBase.join(' ');
        const strippedLen = tools_2.stripColors(base).length;
        if (lines[lines.length - 1] === '\u001b[39m') {
            lines[lines.length - 2] += '\u001b[39m';
            lines.splice(lines.length - 1, 1);
        }
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (i > 0) {
                const preChar = i === lines.length - 1 ? '╚'.white : '╠'.white;
                msgBase.push(''.padStart(strippedLen - 1));
                msgBase.push(`${preChar} ${line}\n`);
            }
            else {
                msgBase.push(`${'╔'.white} ${line}\n`);
            }
        }
    }
    else if (msg.indexOf('\n') > -1) {
        const base = msgBase.join(' ');
        const strippedLen = tools_2.stripColors(base).length;
        const lines = msg.split('\n').filter((r) => r.length > 0);
        if (lines[lines.length - 1] === '\u001b[39m') {
            lines[lines.length - 2] += '\u001b[39m';
            lines.splice(lines.length - 1, 1);
        }
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (i > 0) {
                const preChar = i === lines.length - 1 ? '╚'.white : '╠'.white;
                msgBase.push(''.padStart(strippedLen - 1));
                msgBase.push(`${preChar} ${getStrColor(line, type.color)}\n`);
            }
            else {
                msgBase.push(`${'╔'.white} ${getStrColor(line, type.color)}\n`);
            }
        }
    }
    else {
        msgBase.push(getStrColor(msg, type.color));
    }
    if (additional.suffix) {
        msgBase.push(additional.suffix);
    }
    return msgBase.join(' ');
};
const _defaultLog = (parent, type, ...args) => {
    parent.__disabledLogs__ = parent.__disabledLogs__ || [];
    if (parent.__disabledLogs__.indexOf(type.name) === -1) {
        console.log(buildTerminal(parent, type, ...args));
    }
};
const stylesLog = {};
Object.keys(styles_1.default).forEach((stl) => {
    stylesLog[stl] = function () {
        return _defaultLog(arguments[0], styles_1.default[stl], ...Array.from(arguments).slice(1));
    };
});
stylesLog.__normalLog__ = (parent, ...data) => console.log(data.join(' '));
exports.default = stylesLog;
//# sourceMappingURL=term.js.map