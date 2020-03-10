"use strict";
/**
 * Created by Lucas Teske on 07/09/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("../../tools");
exports.isFinite = (value) => typeof value === 'number' && Number.isFinite(value);
exports.isInteger = (value) => (typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value);
exports.uint8arr2hex = (u8arr) => Array.from(u8arr).map(v => v.toString(16).padLeft(2, '0'));
exports.validateHex = /^[0-9A-Fa-f]+$/;
exports.default = {
    isFinite: exports.isFinite,
    isInteger: exports.isInteger,
    uint8arr2hex: exports.uint8arr2hex,
    validateHex: exports.validateHex,
};
//# sourceMappingURL=helpers.js.map