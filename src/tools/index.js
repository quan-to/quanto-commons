/**
 * Created by Lucas Teske on 02/06/17.
 */

export {
  printQuantoHeader,
  QuantoColors,
} from './QuantoTools';
export {
  isRunningInNodeJS,
  validateEmail,
  validateCPF,
  validateCNPJ,
  undefinedOrNull,
  validateField,
  validateDateFormat,
  validateStringLength,
  calcDvMod11,
  calcDvMod11Sub11,
  calcDvAgencia,
  calcDvConta,
  calcDvMod10,
  cleanUndefinedMembers,
} from './validation';
export {
  FormatValue,
  basename,
} from './format';
export {
  getCallerFilename,
  getLocaleNowTime,
  getLocaleNowDate,
  getUTCNow,
} from './manageTools';
export removeDiactrics from './removeDiactrics';
export TemplateProcess from './template';
