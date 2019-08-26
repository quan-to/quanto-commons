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
export default TemplateProcess;
//# sourceMappingURL=template.js.map