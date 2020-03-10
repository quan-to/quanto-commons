"use strict";
/**
 * Created by Lucas Teske on 09/05/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Applies data to a template string
 * @param templateStr
 * @param templateData
 * @returns {string}
 */
const TemplateProcess = (templateStr, templateData) => {
    let formatted = templateStr;
    if (templateData !== undefined && templateData !== null) {
        const keys = Object.keys(templateData);
        for (let i = 0; i < keys.length; i++) {
            formatted = formatted.replace(new RegExp(`{${keys[i].toUpperCase()}}`, 'g'), templateData[keys[i]]);
        }
    }
    return formatted;
};
exports.default = TemplateProcess;
//# sourceMappingURL=template.js.map