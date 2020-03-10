/**
 * Created by Lucas Teske on 07/09/18.
 */
import '../../tools';
export declare const isFinite: (value: any) => boolean;
export declare const isInteger: (value: any) => boolean;
export declare const uint8arr2hex: (u8arr: Uint8Array | [number]) => string[];
export declare const validateHex: RegExp;
declare const _default: {
    isFinite: (value: any) => boolean;
    isInteger: (value: any) => boolean;
    uint8arr2hex: (u8arr: Uint8Array | [number]) => string[];
    validateHex: RegExp;
};
export default _default;
