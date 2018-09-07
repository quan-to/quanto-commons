/**
 * Created by Lucas Teske on 07/09/18.
 * @flow
 */

import '../../tools';

export const isFinite = value => typeof value === 'number' && isFinite(value);
export const isInteger = value => (typeof value === 'number' && isFinite(value) && Math.floor(value) === value);
export const uint8arr2hex = u8arr => Array.from(u8arr).map(v => v.toString(16).padLeft(2, '0'));
export const validateHex = /[0-9A-Fa-f]{6}/g;

export default {
  isFinite,
  isInteger,
  uint8arr2hex,
  validateHex,
};
