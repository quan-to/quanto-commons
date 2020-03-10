/**
 * Created by Lucas Teske on 20/04/17.
 */
export declare function isRunningInNodeJS(): any;
export declare function normalizeXMLJSObjectProperties(obj: any): any;
export declare function validateEmail(email: string): boolean;
export declare function validateCPF(cpfO: string): boolean;
export declare function validateCNPJ(cnpjO: string): boolean;
export declare function undefinedOrNull(field: any): boolean;
export declare function validateField(fieldValue: any, validationFn: any): boolean;
export declare function validateDateFormat(field: string, format: string): boolean;
export declare function validateStringLength(field: string, max: number, min: number | void): boolean;
export declare function calcDvMod11(data: string): number;
export declare function calcDvMod11Sub11(data: string): number;
export declare function calcDvAgencia(branchNumber: number | string): number;
export declare function calcDvConta(accountNumber: number | string): number;
export declare function calcDvMod10(data: string): number;
export declare function cleanUndefinedMembers(obj: any): any;
