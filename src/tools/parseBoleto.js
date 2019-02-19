/**
 * Created by Nemo on 13/02/19.
 * @flow
 *
 * Fontes de documentacao sobre boletos:
 * - http://download.itau.com.br/bankline/SISPAG_CNAB.pdf
 * - https://www.bb.com.br/docs/pub/emp/empl/dwn/Doc5175Bloqueto.pdf
 * - https://portal.febraban.org.br/pagina/3150/1094/pt-br/servicos-novo-plataforma-boletos
 * Este código valida a representação numérica do código de barras. Note que os dados da linha digitável não
 * se apresentam na mesma sequência do código de barras.
 *
 * Estrutura do campo digitável:
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

function calcDvMod11(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += (parseInt(data[i], 10) * ((data.length - i) + 1));
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

const banks = {
  1: 'BANCO DO BRASIL S.A.',
  33: 'BANCO SANTANDER (BRASIL) S.A.',
  237: 'BANCO BRADESCO S.A.',
  341: 'ITAÚ UNIBANCO S.A.',
  633: 'BANCO RENDIMENTO S.A.',
};

const currencies = {
  9: 'real',
};

function getExpiryDate(dateCode) {
  const febrabanBaseDate = new Date(1997, 10, 7);
  return new Date((febrabanBaseDate / 1) + (dateCode * 86400000));
}

function parseBoleto(code, valueIsGreaterThan999999999 = false) {
  if (code < 36) {
    return undefined;
  }
  if (code.length < 47) {
    code.padEnd(47, '0');
  }
  const boleto = {
    bank: undefined,
    currency: undefined,
    verifiableFields: {
      field20to24: {
        value: undefined,
        verifDigit: undefined,
        verified: undefined,
      },
      field25to34: {
        value: undefined,
        verifDigit: undefined,
        verified: undefined,
      },
      field35to44: {
        value: undefined,
        verifDigit: undefined,
        verified: undefined,
      },
    },
    expiryDate: undefined,
    amount: undefined,
  };

  boleto.bank = banks[code.substring(0, 3)];
  boleto.currency = currencies[code.substring(3, 4)];
  boleto.verifiableFields.field20to24.value  = code.substring(4, 9);
  boleto.verifiableFields.field20to24.verifDigit = code.substring(9, 10);
  boleto.verifiableFields.field25to34.value  = code.substring(10, 20);
  boleto.verifiableFields.field25to34.verifDigit = code.substring(20, 21);
  boleto.verifiableFields.field35to44.value  = code.substring(21, 31);
  boleto.verifiableFields.field35to44.verifDigit= code.substring(31, 33);

  if (valueIsGreaterThan999999999) {
    boleto.amount = code.substring(33, 47) / 100;
  } else {
    boleto.expiryDate = getExpiryDate(code.substring(33, 37));
    boleto.amount = code.substring(37, 47) / 100;
  }

  return boleto;
}

module.exports = { parseBoleto };
