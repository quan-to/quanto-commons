interface String {
    format: (strFormat: string) => string;
    removeDiactrics: () => string;
    padLeft: (maxLength: number, fillString?: string) => string;
    titleCase: () => string;
    white: String;
    black: String;
    red: String;
    green: String;
    yellow: String;
    blue: String;
    magenta: String;
    cyan: String;
    gray: String;
    grey: String;
    reset: String;
    dim: String;
    italic: String;
    underline: String;
    inverse: String;
    hidden: String;
    strikethrough: String;
    warn: String;
    error: String;
    info: String;
    verbose: String;
}
interface Number {
    padLeft: (maxLength: number, fillString?: string) => string;
    toMoney: (decimals?: number, decimalSeparator?: string, separator?: string) => string;
    format: (strFormat: string) => string;
}
interface CallSite {
    getThis(): any;
    getTypeName(): string | null;
}
interface ErrorConstructor {
    prepareStackTrace(err: Error, callsites: Array<CallSite>): any;
    captureStackTrace(targetObject: any, constructor?: any): any;
}
