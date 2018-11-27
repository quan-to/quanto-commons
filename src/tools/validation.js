/* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 20/04/17.
 * @flow
 */

import moment from 'moment';

export function isRunningInNodeJS() { return typeof module !== 'undefined' && module.exports; }

export function normalizeXMLJSObjectProperties(obj: Object) : Object {
  const keys = Object.keys(obj);
  const nObj = {};
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    if (typeof obj[k] === 'object') {
      normalizeXMLJSObjectProperties(obj[k]);
    }
    const t = JSON.parse(JSON.stringify(obj[k][0]));
    if (t !== 'undefined') {
      nObj[k.toLowerCase()] = t !== 'NULL' ? t : null;
    }
  }

  return nObj;
}

export function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validateCPF(cpfO: string) : boolean {
  let sum = 0;
  let hash;

  if (cpfO === undefined || cpfO === null) {
    return false;
  }

  const cpf = cpfO.replace(/[^\d]+/g, '');

  if (cpf.length !== '00000000000'.length) {
    return false;
  }

  if (cpf === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  hash = (sum * 10) % 11;

  if ((hash === 10) || (hash === 11)) {
    hash = 0;
  }

  if (hash !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }

  // Verification digit
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }

  hash = (sum * 10) % 11;

  if ((hash === 10) || (hash === 11)) {
    hash = 0;
  }

  return hash === parseInt(cpf.substring(10, 11), 10);
}

export function validateCNPJ(cnpjO: string) : boolean {
  if (cnpjO === undefined || cnpjO === null || cnpjO.length !== 14) {
    return false;
  }

  const cnpj = cnpjO.replace(/[^\d]+/g, '');

  if (
    cnpj.length === 0 ||
    cnpj.length !== 14 ||
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (resultado !== parseInt(digits.charAt(0), 10)) {
    return false;
  }

  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return resultado === parseInt(digits.charAt(1), 10);
}

export function undefinedOrNull(field: any) {
  return field === undefined || field === null;
}

export function validateField(fieldValue: any, validationFn: any) : boolean {
  return validationFn(fieldValue);
}

export function validateDateFormat(field: string, format: string) {
  return moment(field, format, true).isValid();
}

export function validateStringLength(field: string, max: number, min: number | void) {
  return (field.length < max) && ((min !== undefined && field.length > min) || min === undefined);
}

export function calcDvMod11(data: string) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += (parseInt(data[i], 10) * ((data.length - i) + 1));
  }
  return sum % 11;
}

export function calcDvMod11Sub11(data: string) {
  const c = calcDvMod11(data);
  return c > 0 ? 11 - c : 0;
}

export function calcDvAgencia(branchNumber: number|string) {
  return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}

export function calcDvConta(accountNumber: number|string) {
  return calcDvMod11(accountNumber.toString()) % 10;
}

export function calcDvMod10(data: string) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let partial = (parseInt(data[i], 10) * ((i % 2) + 1));
    if (partial > 9) {
      partial = partial.toString().split('').map(c => parseInt(c, 10)).reduce((a, b) => a + b);
    }
    sum += partial;
  }
  sum %= 10;
  sum = sum !== 0 ? 10 - sum : sum;

  return sum;
}

export function cleanUndefinedMembers(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') {
      cleanUndefinedMembers(obj[key]);
    } else if (obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
}
