/**
 * Created by Lucas Teske on 22/05/18.
 */
declare type QLogConfig = {
    showDateTime: boolean;
    showBadge: boolean;
    showLabel: boolean;
    showErrorCodeErrorData: boolean;
    showFilename: boolean;
    showScope: boolean;
    scope: string | null;
    headPadding: number | null;
};
declare class QLog {
    __config__: QLogConfig;
    __cache__: {
        longestLabel: number;
    };
    __disabledLogs__: string[];
    constructor();
    bclip(...args: any[]): void;
    slash(): void;
    _enableLog(logName: string): void;
    _disableLog(logName: string): void;
    headPadding: any;
    enableLogs(...args: string[]): void;
    disableLogs(...args: string[]): void;
    scope(...name: string[]): QLog;
    showDateTime: boolean;
    showScope: boolean;
    showBadge: boolean;
    showLabel: boolean;
    showErrorCodeErrorData: boolean;
    showFilename: boolean;
}
declare const _default: QLog;
export default _default;
