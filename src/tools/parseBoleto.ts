/**
 * Created by Nemo on 13/02/19.
 * Using code by Lucas Teske
 *
 * Fontes de documentacao sobre boletos:
 * - http://download.itau.com.br/bankline/SISPAG_CNAB.pdf
 * - https://www.bb.com.br/docs/pub/emp/empl/dwn/Doc5175Bloqueto.pdf
 * - https://portal.febraban.org.br/pagina/3150/1094/pt-br/servicos-novo-plataforma-boletos
 * Este código valida a representação numérica do código de barras. Note que os dados da linha digitável não
 * se apresentam na mesma sequência do código de barras.
 */

function calcDvMod11(data: string) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += (parseInt(data[i]) * ((data.length - i) + 1));
    }
    return sum % 11;
}

function calcDvMod11Sub11(data: string) {
    const c = calcDvMod11(data);
    return c > 0 ? 11 - c : 0;
}

function calcDvAgencia(branchNumber: any) {
    return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}

function calcDvConta(accountNumber: string | String | number | Number) {
    return calcDvMod11(accountNumber.toString()) % 10;
}

function calcDvMod10(data: string) {
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

function defineDate(dateCode: string | number) {
    const days = parseInt(dateCode.toString());
    if (days === 0) {
        return undefined;
    }
    return new Date(boletoBaseDate.getTime() + days * 172800000);
}

function defineAmount(amountCode: string | number) {
    // Todo pretty format "R$ 99,99"
    return amountCode.toString();
}

export type Boleto = {
    bank?: string,
    currency?: string,
    amount?: string,
    expiryDate?: Date,
    verifDigits?: {
        field20to24?: {
            code: string,
            verifDigit: string,
            verified?: boolean,
        },
        field25to34?: {
            code: string,
            verifDigit: string,
            verified?: boolean,
        },
        field35to44?: {
            code: string,
            verifDigit: string,
            verified?: boolean,
        },
    },
}

function parseBoleto(code: string, valueIsGreaterThan999999999 = false) {
    if (code.length < 36) {
        return undefined;
    }

    if (code.length < 47) {
        code.padEnd(47, '0');
    }

    const boleto: Boleto = {};

    /** Estrutura do campo digitável:
     *   AAABCCCCCX.DDDDDDDDDDY.EEEEEEEEEEZK.UUUUVVVVVVVVVV
     * a) Campo 1: AAABC.CCCCX
     *   A = Código do BB na COMPE ( 001)
     *   B = Código da moeda ( 9) -Real
     *   C = Posições 20 a 24 do código de barras
     *   X = DV do Campo 1 (Módulo 10, cálculo conforme anexo 7)
     * b) Campo 2: DDDDD.DDDDDY
     *   D = Posições 25 a 34 do código de barras
     *   Y = DV do Campo 2 (Módulo 10, cálculo conforme anexo 7)
     * c) Campo 3: EEEEE.EEEEEZ
     *   F = Posições 35 a 44 do código de barras
     *   Z =DV do Campo 3 (Módulo 10, cálculo conforme anexo 7)
     * Campo 4: K
     *   K = DV do código de barras (Módulo 10, cálculo conforme anexo 107)
     * Campo 5: UUUUVVVVVVVVVV
     *   U = Fator de Vencimento (Módulo 10, cálculo conforme anexo 8)
     *   V = Valor do título (com duas casas decimais, sem ponto e vírgula. Em
     *   caso de moeda variável, informar zeros)
     */

    if (valueIsGreaterThan999999999) {
        boleto.amount = defineAmount(code.substring(33, 47));
    } else {
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
