/**
 * Created by Lucas Teske on 18/05/18.
 */
import { AnsiColor } from "./ansi";
declare const stripColors: (str: string) => string;
declare const applyStyle: (color: AnsiColor, str: string) => string;
declare const applyStyleByName: (getColor: (name: string) => AnsiColor, colorName: string, str: string) => string;
declare const applyIteratorFuncStyle: (itFunc: any, str: string) => string;
declare const ansiSupported: () => any;
export { stripColors, applyStyle, applyStyleByName, ansiSupported, applyIteratorFuncStyle, };
