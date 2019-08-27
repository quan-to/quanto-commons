/**
 * Created by Lucas Teske on 07/09/18.
 */

import '../../tools';

export const isFinite = (value: any) => typeof value === 'number' && Number.isFinite(value);
export const isInteger = (value: any) => (typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value);
export const uint8arr2hex = (u8arr: [number] | Uint8Array) => Array.from(u8arr).map(v => v.toString(16).padLeft(2, '0'));
export const validateHex = /^[0-9A-Fa-f]+$/;

export default {
  isFinite,
  isInteger,
  uint8arr2hex,
  validateHex,
};
