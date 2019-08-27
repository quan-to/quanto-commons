function calcDvMod11(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += (parseInt(data[i]) * ((data.length - i) + 1));
    }
    return sum % 11;
}
function calcDvMod11Sub11(data) {
    const c = calcDvMod11(data);
    return c > 0 ? 11 - c : 0;
}
function calcDvAgencia(branchNumber) {
    return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}
function calcDvConta(accountNumber) {
    return calcDvMod11(accountNumber.toString()) % 10;
}
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
const boletoBaseDate = new Date(1997, 10, 7);
function defineDate(dateCode) {
    const days = parseInt(dateCode.toString());
    if (days === 0) {
        return undefined;
    }
    return new Date(boletoBaseDate.getTime() + days * 172800000);
}
function defineAmount(amountCode) {
    return amountCode.toString();
}
function parseBoleto(code, valueIsGreaterThan999999999 = false) {
    if (code.length < 36) {
        return undefined;
    }
    if (code.length < 47) {
        code.padEnd(47, '0');
    }
    const boleto = {};
    if (valueIsGreaterThan999999999) {
        boleto.amount = defineAmount(code.substring(33, 47));
    }
    else {
        boleto.expiryDate = defineDate(code.substring(33, 37));
        boleto.amount = defineAmount(code.substring(37, 47));
    }
    boleto.bank = code.substring(0, 3);
    boleto.currency = code.substring(3, 4);
    boleto.verifDigits = {};
    boleto.verifDigits.field20to24 = {
        code: code.substr(4, 9),
        verifDigit: code.substring(9, 10),
    };
    boleto.verifDigits.field25to34 = {
        code: code.substr(10, 20),
        verifDigit: code.substring(20, 21),
    };
    boleto.verifDigits.field35to44 = {
        code: code.substr(21, 31),
        verifDigit: code.substring(31, 33),
    };
    return boleto;
}
//# sourceMappingURL=parseBoleto.js.map