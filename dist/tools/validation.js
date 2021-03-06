"use strict";
/* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 20/04/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
// @ts-ignore
function isRunningInNodeJS() { return typeof module !== 'undefined' && module.exports; }
exports.isRunningInNodeJS = isRunningInNodeJS;
function normalizeXMLJSObjectProperties(obj) {
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
exports.normalizeXMLJSObjectProperties = normalizeXMLJSObjectProperties;
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
exports.validateEmail = validateEmail;
function validateCPF(cpfO) {
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
exports.validateCPF = validateCPF;
function validateCNPJ(cnpjO) {
    if (cnpjO === undefined || cnpjO === null || cnpjO.length !== 14) {
        return false;
    }
    const cnpj = cnpjO.replace(/[^\d]+/g, '');
    if (cnpj.length === 0 ||
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
        cnpj === '99999999999999') {
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
    if (resultado !== parseInt(digits.charAt(1), 10)) {
        return false;
    }
    // According to:
    // - http://www.receita.fazenda.gov.br/publico/Legislacao/atos/AtosConjuntos/AnexoIADEConjuntoCoratCotec0012002.doc
    // There are few edge cases.
    // If the starting is 000.000.00, then all cases are valid, but if not:
    // The branch number of the company cannot be higher than 0300.
    const branchNumber = parseInt(cnpj.substr(8, 4), 10);
    const baseNumber = parseInt(cnpj.substr(0, 8), 10);
    if (branchNumber === 0) { // The branch number starts with 1
        return false;
    }
    if (baseNumber !== 0) { // Base Number != the branch Number cannot be higher than 300.
        return branchNumber <= 300;
    }
    return true;
}
exports.validateCNPJ = validateCNPJ;
function undefinedOrNull(field) {
    return field === undefined || field === null;
}
exports.undefinedOrNull = undefinedOrNull;
function validateField(fieldValue, validationFn) {
    return validationFn(fieldValue);
}
exports.validateField = validateField;
function validateDateFormat(field, format) {
    return moment(field, format, true).isValid();
}
exports.validateDateFormat = validateDateFormat;
function validateStringLength(field, max, min) {
    return (field.length < max) && ((min !== undefined && field.length > min) || min === undefined);
}
exports.validateStringLength = validateStringLength;
function calcDvMod11(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += (parseInt(data[i], 10) * ((data.length - i) + 1));
    }
    return sum % 11;
}
exports.calcDvMod11 = calcDvMod11;
function calcDvMod11Sub11(data) {
    const c = calcDvMod11(data);
    return c > 0 ? 11 - c : 0;
}
exports.calcDvMod11Sub11 = calcDvMod11Sub11;
function calcDvAgencia(branchNumber) {
    return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}
exports.calcDvAgencia = calcDvAgencia;
function calcDvConta(accountNumber) {
    return calcDvMod11(accountNumber.toString()) % 10;
}
exports.calcDvConta = calcDvConta;
function calcDvMod10(data) {
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
exports.calcDvMod10 = calcDvMod10;
function cleanUndefinedMembers(obj) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') {
            cleanUndefinedMembers(obj[key]);
        }
        else if (obj[key] === undefined) {
            delete obj[key];
        }
    });
    return obj;
}
exports.cleanUndefinedMembers = cleanUndefinedMembers;
//# sourceMappingURL=validation.js.map