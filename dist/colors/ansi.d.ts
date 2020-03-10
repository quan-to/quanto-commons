/**
 * Created by Lucas Teske on 18/05/18.
 */
export declare type AnsiColor = {
    name: string;
    value: [number, number];
    openTag: string;
    closeTag: string;
    closeRegex: RegExp;
};
declare const getColor: (name: string) => AnsiColor;
declare const getColorsName: () => string[];
declare const getRainbowColor: (n: number) => AnsiColor;
export { getColor, getColorsName, getRainbowColor, };
