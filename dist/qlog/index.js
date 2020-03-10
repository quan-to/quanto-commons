"use strict";
/**
 * Created by Lucas Teske on 22/05/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const styles_1 = require("./styles");
const term_1 = require("./term");
class QLog {
    constructor() {
        this.__cache__ = {
            longestLabel: 0,
        };
        const parent = this;
        this.__config__ = {
            showDateTime: true,
            showBadge: true,
            showLabel: false,
            showErrorCodeErrorData: true,
            showFilename: false,
            showScope: true,
            scope: null,
            headPadding: null,
        };
        this.__disabledLogs__ = ['debug', 'warn'];
        Object.keys(styles_1.default).forEach((stl) => {
            const style = styles_1.default[stl];
            parent.__cache__.longestLabel = Math.max(parent.__cache__.longestLabel, style.label ? style.label.length : 0);
        });
        if (tools_1.isRunningInNodeJS()) {
            Object.keys(term_1.default).forEach((k) => {
                parent[k] = function () {
                    return term_1.default[k](parent, ...arguments);
                }; // termStyles[k].bind(null, parent);
            });
        }
        else {
            console.log('Chrome version not implemented. Ignoring');
            Object.keys(term_1.default).forEach((k) => {
                parent[k] = console.log; // Placeholder for non NodeJS
            });
        }
    }
    bclip(...args) {
    }
    slash() {
        this.__normalLog__('─────────────────────────────────────────────────────────────────────────────────────────────');
    }
    _enableLog(logName) {
        const idx = this.__disabledLogs__.indexOf(logName);
        if (idx !== -1) {
            this.__disabledLogs__.splice(idx, 1);
        }
    }
    _disableLog(logName) {
        const idx = this.__disabledLogs__.indexOf(logName);
        if (idx === -1) {
            this.__disabledLogs__.push(logName);
        }
    }
    set headPadding(value) {
        this.__config__.headPadding = value;
    }
    get headPadding() {
        return this.__config__.headPadding;
    }
    enableLogs(...args) {
        args.forEach((arg) => {
            if (Array.isArray(arg)) {
                arg.forEach((a) => {
                    this._enableLog(a);
                });
            }
            else {
                this._enableLog(arg);
            }
        });
    }
    disableLogs(...args) {
        args.forEach((arg) => {
            if (Array.isArray(arg)) {
                arg.forEach((a) => {
                    this._disableLog(a);
                });
            }
            else {
                this._disableLog(arg);
            }
        });
    }
    scope(...name) {
        const newQLogScope = new QLog();
        newQLogScope.__config__ = JSON.parse(JSON.stringify(this.__config__));
        newQLogScope.__cache__ = JSON.parse(JSON.stringify(this.__cache__));
        newQLogScope.__disabledLogs__ = this.__disabledLogs__;
        newQLogScope.__config__.scope = name.join(">");
        return newQLogScope;
    }
    set showDateTime(value) {
        this.__config__.showDateTime = value;
    }
    get showDateTime() {
        return this.__config__.showDateTime;
    }
    set showScope(value) {
        this.__config__.showScope = value;
    }
    get showScope() {
        return this.__config__.showScope;
    }
    set showBadge(value) {
        this.__config__.showBadge = value;
    }
    get showBadge() {
        return this.__config__.showBadge;
    }
    set showLabel(value) {
        this.__config__.showLabel = value;
    }
    get showLabel() {
        return this.__config__.showLabel;
    }
    set showErrorCodeErrorData(value) {
        this.__config__.showErrorCodeErrorData = value;
    }
    get showErrorCodeErrorData() {
        return this.__config__.showErrorCodeErrorData;
    }
    set showFilename(value) {
        this.__config__.showFilename = value;
    }
    get showFilename() {
        return this.__config__.showFilename;
    }
}
exports.default = new QLog();
//# sourceMappingURL=index.js.map