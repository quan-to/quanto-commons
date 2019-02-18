23793381286000375806168000063302978130000024507
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
 */

let banks = {
  '237': 'BANCO BRADESCO S.A.',
  '033': 'BANCO SANTANDER (BRASIL) S.A.',
  '001': 'BANCO DO BRASIL S.A.',
  '341': 'ITAÚ UNIBANCO S.A.',
  '633': 'BANCO RENDIMENTO S.A.',
};
let currencies = {
  '9': 'real',
};
export function parseBoleto(code){
  let boleto = {
    bank: undefined,
    currency: undefined,
    verifDigit: undefined,
    expiryDate: undefined,
  }; 

  /**
   * AAABCCCCCXDDDDDDDDDDYEEEEEEEEEEZKUUUUVVVVVVVVVV
   * 
a) Campo 1: AAABC.CCCCX
A = Código do BB na COMPE ( 001)
B = Código da moeda ( 9) -Real
C = Posições 20 a 24 do código de barras
X = DV do Campo 1 (Módulo 10, cálculo conforme anexo 7)
b) Campo 2: DDDDD.DDDDDY
D = Posições 25 a 34 do código de barras
Y = DV do Campo 2 (Módulo 10, cálculo conforme anexo 7)
Campo 3: EEEEE.EEEEEZ
F = Posições 35 a 44 do código de barras
Z =DV do Campo 3 (Módulo 10, cálculo conforme anexo 7)
Campo 4: K
K = DV do código de barras (Módulo 10, cálculo conforme anexo 107)
Campo 5: UUUUVVVVVVVVVV
U = Fator de Vencimento (Módulo 10, cálculo conforme anexo 8)
V = Valor do título (com duas casas decimais, sem ponto e vírgula. Em
caso de moeda variável, informar zeros)
   */
  if (!code.length===47) {
    boleto.bank = code.substring(0, 3);
    boleto.currency  = code.substring(3, 4);
    boleto.C = code.substring(4, 9);
    boleto.verifDigit1 = code.substring(9, 10);

    boleto.D = code.substring(10, 20);
    boleto.verifDigit2 = code.substring(20, 21);
    
    boleto.E = code.substring(21,31);
    boleto.verifDigit3 = code.substring(31, 32);
    boleto.verifDigit4 = code.substring(32, 33);
    
    boleto.expiryDate = code.substring(33, 37);
    boleto.value = code.substring(37, 47);
    console.log(boleto);
  }
  return undefined;
}
export function validateBoleto(code) {


  return false;
}
function calculateVefrifDigit(code) {

}

function tests(){
  let nemoNubank0 = '23793381286000374362647000063306678000000066666'
  let nemoNubank1 = '23793381286000375806168000063302978130000024507'
  let boletoAbad  = '23793114069000552895671018289307978780000003000'

  let boletoDoBeto ='34191755383314459252550451630003200000000000000'


  let boleto = parseBoleto()
}