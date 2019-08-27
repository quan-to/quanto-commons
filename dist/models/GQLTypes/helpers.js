import '../../tools';
export const isFinite = (value) => typeof value === 'number' && Number.isFinite(value);
export const isInteger = (value) => (typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value);
export const uint8arr2hex = (u8arr) => Array.from(u8arr).map(v => v.toString(16).padLeft(2, '0'));
export const validateHex = /^[0-9A-Fa-f]+$/;
export default {
    isFinite,
    isInteger,
    uint8arr2hex,
    validateHex,
};
//# sourceMappingURL=helpers.js.map