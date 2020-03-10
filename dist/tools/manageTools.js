"use strict";
/**
 * Created by Lucas Teske on 22/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const format_1 = require("./format");
function getCallerFilename(level) {
    const lvl = level || 2;
    const _ = Error.prepareStackTrace;
    Error.prepareStackTrace = (error, stack) => stack;
    const { stack } = new Error();
    Error.prepareStackTrace = _;
    // @ts-ignore
    const callers = stack.map(x => format_1.basename(x.getFileName()));
    let callerI = callers;
    for (let i = 0; i < lvl; i++) {
        // @ts-ignore
        callerI = callerI.filter(x => x !== callers[i]);
    }
    return callerI[0];
}
exports.getCallerFilename = getCallerFilename;
function getLocaleNowTime() {
    return new Date().toLocaleTimeString();
}
exports.getLocaleNowTime = getLocaleNowTime;
function getLocaleNowDate() {
    return new Date().toLocaleDateString();
}
exports.getLocaleNowDate = getLocaleNowDate;
function getUTCNow() {
    return moment.utc().format('YYYYMMDD-HHmmss');
}
exports.getUTCNow = getUTCNow;
//# sourceMappingURL=manageTools.js.map