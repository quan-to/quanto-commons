/**
 * Created by Lucas Teske on 09/05/17.
 * @flow
 */


/**
 * Applies data to a template string
 * @param templateStr
 * @param templateData
 * @returns {string}
 */
const TemplateProcess = (templateStr: string, templateData: any) => {
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
